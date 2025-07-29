from pydantic import BaseModel, EmailStr
from typing import Optional
from datetime import datetime

class UserBase(BaseModel):
    email: Optional[EmailStr]   
    full_name: Optional[str] = None
    gender: Optional[str] = None
    role: Optional[str] = "patient"
    is_admin: Optional[bool] = False

class UserCreate(UserBase):
    password: str

class UserOut(UserBase):
    id: str
    created_at: Optional[datetime]
    updated_at: Optional[datetime]
        
    class Config:
        from_attributes = True

class UserPublic(BaseModel):
    id: str
    email: EmailStr
    full_name: Optional[str]
    gender: Optional[str]
    role: Optional[str]
    is_admin: Optional[bool]

    class Config:
        from_attributes = True

class UserUpdate(BaseModel):
    email: Optional[EmailStr]
    password: Optional[str]
    full_name: Optional[str]
    gender: Optional[str]
    role: Optional[str]
    is_admin: Optional[bool]

    class Config:
        from_attributes = True