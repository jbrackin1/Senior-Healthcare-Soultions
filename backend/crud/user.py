from sqlalchemy.orm import Session
from models.user import User
from schemas.user import UserCreate
from utils.crypto import encrypt
from utils.security import hash_password  # separate for clarity

import uuid


def create_user(db: Session, user_data: UserCreate):
    user = User(
        id=str(uuid.uuid4()),
        hashed_password=hash_password(user_data.password)
    )
    user.set_encrypted_fields(
        email=user_data.email,
        full_name=user_data.full_name,
        gender=user_data.gender
    )
    db.add(user)
    db.commit()
    db.refresh(user)
    return user


def get_user_by_email(db: Session, email: str):
    encrypted_email = encrypt(email)
    return db.query(User).filter(User._email == encrypted_email).first()


def delete_user_by_id(db: Session, user_id: str):
    user = db.query(User).filter(User.id == user_id).first()
    if user:
        db.delete(user)
        db.commit()
    return user