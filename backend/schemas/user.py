# schemas/user.py

from pydantic import BaseModel, EmailStr
from typing import Optional


# ---------- Input Schema (e.g., for creation) ----------
class UserCreate(BaseModel):
    email: EmailStr
    password: str
    full_name: Optional[str] = None
    gender: Optional[str] = None


# ---------- Output Schema (limited, no PII by default) ----------
class UserPublic(BaseModel):
    id: str
    # You can include decrypted fields only if necessary and justified
    # email: EmailStr

    class Config:
        orm_mode = True