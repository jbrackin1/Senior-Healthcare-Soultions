from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session
from db.session import get_db
from crud.user import create_user
from schemas.user import UserCreate

router = APIRouter()

@router.post("/users")
def register_user(user: UserCreate, db: Session = Depends(get_db)):
    return create_user(db, user.email, user.password, user.full_name, user.gender)