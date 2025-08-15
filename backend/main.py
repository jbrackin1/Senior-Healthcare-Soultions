import os, secrets 
from fastapi import FastAPI, Request
from fastapi.responses import JSONResponse, RedirectResponse
from fastapi.middleware.cors import CORSMiddleware
from auth.oidc_google import init_google, start_pkce, build_auth_url, exchange_code_for_tokens, fetch_userinfo
from dotenv import load_dotenv, find_dotenv
from routers import user, va_formulary, audit_log, auth  # Add any other routers as needed

env_path = os.path.abspath(os.path.join(os.path.dirname(__file__), '..', '..', '..', '.env'))
load_dotenv(find_dotenv())

app = FastAPI()

@app.on_event("startup")
async def _startup():
    await init_google()
    
@app.get("/test/env")
def test_env():
    # mask secrets, just confirm presence
    return {
        "NODE_ENV": os.getenv("NODE_ENV", "missing"),
        "GOOGLE_CLIENT_ID_present": bool(os.getenv("GOOGLE_CLIENT_ID")),
        "GOOGLE_CLIENT_SECRET_present": bool(os.getenv("GOOGLE_CLIENT_SECRET")),
    }

@app.get("/api/auth/google")  # start
async def google_start(request: Request):
    state = secrets.token_urlsafe(24)
    challenge = start_pkce(state)
    url = build_auth_url(state, challenge)
    resp = RedirectResponse(url)
    # simple state cookie for test
    resp.set_cookie("oauth_state", state, httponly=True, samesite="Lax")
    return resp

@app.get("/api/auth/google/callback")  # finish
async def google_cb(request: Request, code: str | None = None, state: str | None = None):
    if not code or not state:
        return JSONResponse({"ok": False, "why": "missing code or state"}, status_code=400)
    if request.cookies.get("oauth_state") != state:
        return JSONResponse({"ok": False, "why": "bad state"}, status_code=400)

    tokens = await exchange_code_for_tokens(code, state)
    profile = await fetch_userinfo(tokens["access_token"])
    # For test, just show who logged in. Remove later.
    return {
        "ok": True,
        "email": profile.get("email"),
        "sub": profile.get("sub"),
        "name": profile.get("name"),
        "has_refresh": bool(tokens.get("refresh_token")),
    }

# CORS configuration
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # TODO: tighten this for prod
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Register API routers
app.include_router(user.router)
app.include_router(va_formulary.router)
app.include_router(audit_log.router, prefix="/admin", tags=["audit"])
app.include_router(auth.router, prefix="/auth")