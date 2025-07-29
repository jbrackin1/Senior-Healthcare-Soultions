from jose import jwt, JWTError
from datetime import datetime, timedelta
import os

from dotenv import load_dotenv
from pathlib import Path

# Load the .env file located three levels up from this file
env_path = Path(__file__).resolve().parent / ".." / ".." / ".." / ".env"
load_dotenv(dotenv_path=env_path.resolve())

JWT_SECRET = os.getenv("JWT_SECRET")
JWT_ALGORITHM = "HS256"
JWT_EXP_DELTA_HOURS = 1  # Adjust expiration if needed

def create_access_token(data: dict):
    to_encode = data.copy()
    expire = datetime.utcnow() + timedelta(hours=JWT_EXP_DELTA_HOURS)
    to_encode.update({"exp": expire})
    return jwt.encode(to_encode, JWT_SECRET, algorithm=JWT_ALGORITHM)

def verify_access_token(token: str):
    try:
        return jwt.decode(token, JWT_SECRET, algorithms=[JWT_ALGORITHM])
    except JWTError:
        return None