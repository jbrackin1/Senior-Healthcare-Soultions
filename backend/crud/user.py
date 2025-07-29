from sqlalchemy.orm import Session
from models.user import User
from schemas.user import UserCreate, UserUpdate
from utils.security import hash_password  # still used
from cryptography.fernet import Fernet
import os
import uuid
from fastapi import HTTPException
from crud.audit_log import log_audit
from utils.jwt import create_access_token

FERNET_KEY = os.getenv("FERNET_KEY").encode()
fernet = Fernet(FERNET_KEY)


def create_user(db: Session, user_data: UserCreate):
    user = User(id=str(uuid.uuid4()))
    user.set_password(user_data.password)
    user.set_encrypted_fields(
        email=user_data.email,
        full_name=user_data.full_name,
        gender=user_data.gender
    )
    db.add(user)
    db.commit()
    db.refresh(user)

    # Log audit
    log_audit(
        db,
        action="create_user",
        user_id=user.id,
        target_id=user.id,
        details={
            "email": user_data.email,
            "full_name": user_data.full_name
        }
    )

    # ✅ Create JWT for this user
    token = create_access_token({"sub": user.id})

    return {
        "user": user,
        "access_token": token,
        "token_type": "bearer"
    }


def delete_user_by_id(db: Session, user_id: str, admin_user: User):
    user = db.query(User).filter(User.id == user_id).first()
    if not user:
        raise HTTPException(status_code=404, detail="User not found.")

    db.delete(user)
    db.commit()

    log_audit(
        db,
        action="delete_user",
        user_id=admin_user.id,
        target_id=user.id,
        details={"email": user.get_email()}
    )

    return {"message": "User deleted"}

def update_user(user_id: str, user_data: UserUpdate, db: Session, admin_user: User):
    user = db.query(User).filter(User.id == user_id).first()
    if not user:
        raise HTTPException(status_code=404, detail="User not found.")

    changes = {}

    if user_data.password:
        user.set_password(user_data.password)
        changes["password"] = "updated"

    # Compare each encrypted field manually if needed
    if user_data.email and user_data.email != user.get_email():
        changes["email"] = {"from": user.get_email(), "to": user_data.email}
    if user_data.full_name and user_data.full_name != user.get_full_name():
        changes["full_name"] = {"from": user.get_full_name(), "to": user_data.full_name}
    if user_data.gender and user_data.gender != user.get_gender():
        changes["gender"] = {"from": user.get_gender(), "to": user_data.gender}

    user.set_encrypted_fields(
        email=user_data.email or user.email,
        full_name=user_data.full_name or user.full_name,
        gender=user_data.gender or user.gender,
    )

    if user_data.role and user_data.role != user.role:
        changes["role"] = {"from": user.role, "to": user_data.role}
        user.role = user_data.role
    if user_data.is_admin is not None and user_data.is_admin != user.is_admin:
        changes["is_admin"] = {"from": user.is_admin, "to": user_data.is_admin}
        user.is_admin = user_data.is_admin

    db.commit()
    db.refresh(user)

    if changes:
        log_audit(
            db,
            action="update_user",
            user_id=admin_user.id,
            target_id=user.id,
            details=changes
        )

    return user

def get_user_by_email(db: Session, email: str):
    for user in db.query(User).all():
        try:
            decrypted_email = fernet.decrypt(user._email).decode()
            if decrypted_email == email:
                log_audit(
                    db,
                    action="lookup_success",
                    user_id=user.id,
                    target_id=user.id,
                    details={"matched_email": email}
                )
                return user
        except Exception as e:
            log_audit(
                db,
                action="decrypt_failure",
                user_id=None,
                target_id=user.id,
                details={"error": str(e), "email_lookup": email}
            )
    return None