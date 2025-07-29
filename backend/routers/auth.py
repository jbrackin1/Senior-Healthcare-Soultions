from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session
from pydantic import BaseModel, EmailStr
from crud.auth import login_user
from utils.deps import get_db

router = APIRouter()

class LoginInput(BaseModel):
    email: EmailStr
    password: str

@router.post("/auth/login")
def login(data: LoginInput, db: Session = Depends(get_db)):
    return login_user(db, email=data.email, password=data.password)

