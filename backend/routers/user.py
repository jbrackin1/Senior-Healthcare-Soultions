from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session
from db.session import get_db
from crud.user import create_user, get_user_by_email, delete_user_by_id, update_user
from schemas.user import UserCreate, UserOut, UserPublic, UserUpdate
from models.user import User
from utils.deps import get_current_admin
from schemas.auth import AuthResponse

router = APIRouter()

@router.post("/users", response_model=UserOut)
def register_user(user: UserCreate, db: Session = Depends(get_db)):
    return create_user(db, user)

# Get user by email (admin/internal use)
@router.get("/by-email", response_model=UserOut)
def read_user_by_email(email: str, db: Session = Depends(get_db)):
    user = get_user_by_email(db, email)
    if not user:
        raise HTTPException(status_code=404, detail="User not found")
    return user


# Get all users (public-safe version)
@router.get("/", response_model=list[UserPublic])
def read_all_users(db: Session = Depends(get_db)):
    return db.query(User).all()


# Delete user by ID
@router.delete("/{user_id}", response_model=UserOut)
def delete_user(user_id: str, db: Session = Depends(get_db)):
    user = delete_user_by_id(db, user_id)
    if not user:
        raise HTTPException(status_code=404, detail="User not found")
    return user

@router.put("/users/{user_id}", response_model=AuthResponse)
def update_user_route(
    user_id: str,
    user_data: UserUpdate,
    db: Session = Depends(get_db),
    admin_user: User = Depends(get_current_admin)  # ✅ required for permission and audit
):
    return update_user(user_id, user_data, db, admin_user)