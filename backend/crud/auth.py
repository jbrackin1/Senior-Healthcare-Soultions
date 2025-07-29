from models.user import User
from utils.security import verify_password
from utils.jwt import create_access_token
from fastapi import HTTPException, status

def login_user(db, email: str, password: str):
    user = db.query(User).all()
    for u in user:
        try:
            decrypted = u.get_email()
            if decrypted == email and verify_password(password, u.password_hash):
                token = create_access_token({"sub": u.id})
                return {
                    "user": u,
                    "access_token": token,
                    "token_type": "bearer"
                }
        except:
            continue

    raise HTTPException(status_code=status.HTTP_401_UNAUTHORIZED, detail="Invalid credentials")