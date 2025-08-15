import os, time, base64, hashlib, secrets, httpx
from urllib.parse import urlencode
from dotenv import load_dotenv

env_path = os.path.abspath(os.path.join(os.path.dirname(__file__), '..', '..', '..', '.env'))
load_dotenv(dotenv_path=env_path)

# Simple in-process PKCE store (10 min TTL). Replace with DB if you run multiple instances.
_pkce = {}  # state -> {"verifier": str, "exp": int}

_google = None  # holds discovery + client + redirect_uri


def _b64url(raw: bytes) -> str:
    return base64.urlsafe_b64encode(raw).decode().rstrip("=")


def _build_pkce():
    code_verifier = _b64url(secrets.token_bytes(32))
    challenge = hashlib.sha256(code_verifier.encode()).digest()
    code_challenge = _b64url(challenge)
    return code_verifier, code_challenge


async def init_google():
    """Call once on startup."""
    is_dev = os.getenv("NODE_ENV", "development") != "production"
    redirect_uri = (
        os.getenv("GOOGLE_REDIRECT_URI_DEV", "http://localhost:8000/api/auth/google/callback")
        if is_dev
        else os.getenv("GOOGLE_REDIRECT_URI", "https://seniorhealthcaresolution.net/api/auth/google/callback")
    )

    client_id = os.getenv("GOOGLE_CLIENT_ID")
    client_secret = os.getenv("GOOGLE_CLIENT_SECRET")
    if not client_id or not client_secret:
        raise RuntimeError("Missing GOOGLE_CLIENT_ID or GOOGLE_CLIENT_SECRET")

    issuer = "https://accounts.google.com"
    well_known = f"{issuer}/.well-known/openid-configuration"

    async with httpx.AsyncClient(timeout=10) as http:
        r = await http.get(well_known)
        r.raise_for_status()
        as_conf = r.json()

    global _google
    _google = {
        "as": as_conf,  # authorization server metadata
        "client": {
            "client_id": client_id,
            "client_secret": client_secret,
            "redirect_uri": redirect_uri,
            "token_endpoint_auth_method": "client_secret_post",
        },
    }


def get_config():
    if not _google:
        raise RuntimeError("OIDC not initialized")
    return _google


def start_pkce(state: str) -> str:
    if not state:
        raise ValueError("state required")
    code_verifier, code_challenge = _build_pkce()
    _pkce[state] = {"verifier": code_verifier, "exp": int(time.time()) + 600}
    return code_challenge


def take_verifier(state: str) -> str | None:
    rec = _pkce.get(state)
    if not rec:
        return None
    if rec["exp"] < int(time.time()):
        _pkce.pop(state, None)
        return None
    return rec["verifier"]


def consume_verifier(state: str) -> None:
    _pkce.pop(state, None)


def build_auth_url(state: str, code_challenge: str, prompt: str | None = None) -> str:
    cfg = get_config()
    auth_endpoint = cfg["as"]["authorization_endpoint"]
    client_id = cfg["client"]["client_id"]
    redirect_uri = cfg["client"]["redirect_uri"]
    params = {
        "client_id": client_id,
        "redirect_uri": redirect_uri,
        "response_type": "code",
        "scope": "openid email profile",
        "state": state,
        "code_challenge": code_challenge,
        "code_challenge_method": "S256",
        "access_type": "offline",
        "include_granted_scopes": "true",
    }
    if prompt:
        params["prompt"] = prompt  # e.g., "consent" if you need refresh_token every time
    return f'{auth_endpoint}?{urlencode(params)}'


async def exchange_code_for_tokens(code: str, state: str) -> dict:
    cfg = get_config()
    token_endpoint = cfg["as"]["token_endpoint"]
    client = cfg["client"]
    verifier = take_verifier(state)
    if not verifier:
        raise RuntimeError("Missing or expired PKCE verifier for state")

    data = {
        "grant_type": "authorization_code",
        "code": code,
        "redirect_uri": client["redirect_uri"],
        "client_id": client["client_id"],
        "client_secret": client["client_secret"],
        "code_verifier": verifier,
    }
    async with httpx.AsyncClient(timeout=10) as http:
        r = await http.post(token_endpoint, data=data)
        r.raise_for_status()
        tokens = r.json()

    # one-time use
    consume_verifier(state)
    return tokens


async def fetch_userinfo(access_token: str) -> dict:
    cfg = get_config()
    endpoint = cfg["as"].get("userinfo_endpoint")
    if not endpoint:
        raise RuntimeError("No userinfo_endpoint in discovery document")
    headers = {"Authorization": f"Bearer {access_token}"}
    async with httpx.AsyncClient(timeout=10) as http:
        r = await http.get(endpoint, headers=headers)
        r.raise_for_status()
        return r.json()