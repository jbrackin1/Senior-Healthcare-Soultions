import os
import uuid
import bcrypt
from sqlalchemy import Column, String, Boolean, DateTime, LargeBinary, text, func
from sqlalchemy.sql import expression
# from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import declared_attr
from db.base import Base


SECRET_KEY = os.getenv("DB_SECRET_KEY", "changeme")

class User(Base):
    __tablename__ = "users"

    id = Column(String(36), primary_key=True, default=lambda: str(uuid.uuid4()))

    # Stored encrypted via SQL expressions
    _email = Column("email", LargeBinary, nullable=False, unique=True)
    _full_name = Column("full_name", LargeBinary, nullable=True)
    _gender = Column("gender", LargeBinary, nullable=True)

    password_hash = Column(String(128), nullable=False)
    role = Column(String(50), default="patient")
    is_admin = Column(Boolean, default=False)

    created_at = Column(DateTime, server_default=func.now())
    updated_at = Column(DateTime, onupdate=func.now())

    # Property getters & setters that handle SQL-based encryption/decryption
    @property
    def email(self):
        return self._email

    @staticmethod
    def encrypt_expr(plaintext):
        return expression.func.AES_ENCRYPT(plaintext, SECRET_KEY)

    @staticmethod
    def decrypt_expr(field):
        return expression.func.AES_DECRYPT(field, SECRET_KEY)

    # Helpers for setting encrypted fields
    def set_encrypted_fields(self, email=None, full_name=None, gender=None):
        from sqlalchemy import literal
        if email: self._email = expression.func.AES_ENCRYPT(literal(email), SECRET_KEY)
        if full_name: self._full_name = expression.func.AES_ENCRYPT(literal(full_name), SECRET_KEY)
        if gender: self._gender = expression.func.AES_ENCRYPT(literal(gender), SECRET_KEY)

    # Password hashing
    def set_password(self, password: str):
        self.password_hash = bcrypt.hashpw(password.encode(), bcrypt.gensalt()).decode()

    def check_password(self, password: str) -> bool:
        return bcrypt.checkpw(password.encode(), self.password_hash.encode())