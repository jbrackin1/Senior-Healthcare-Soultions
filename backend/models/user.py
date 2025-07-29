from cryptography.fernet import Fernet
from sqlalchemy import Column, String, Boolean, DateTime, LargeBinary, func
from db.base import Base
import bcrypt
import uuid
import os


FERNET_KEY = os.getenv("FERNET_KEY").encode()
fernet = Fernet(FERNET_KEY)

class User(Base):
    __tablename__ = "users"

    id = Column(String(36), primary_key=True, default=lambda: str(uuid.uuid4()))
    _email = Column("email", LargeBinary, nullable=False, unique=True)
    _full_name = Column("full_name", LargeBinary, nullable=True)
    _gender = Column("gender", LargeBinary, nullable=True)

    password_hash = Column(String(128), nullable=False)
    role = Column(String(50), default="patient", nullable=False)
    is_admin = Column(Boolean, default=False, nullable=False)

    created_at = Column(DateTime, server_default=func.now())
    updated_at = Column(DateTime, onupdate=func.now())

    def set_encrypted_fields(self, email=None, full_name=None, gender=None):
        if email: self._email = fernet.encrypt(email.encode())
        if full_name: self._full_name = fernet.encrypt(full_name.encode())
        if gender: self._gender = fernet.encrypt(gender.encode())

    @property
    def email(self):
        return fernet.decrypt(self._email).decode() if self._email else None

    @property
    def full_name(self):
        return fernet.decrypt(self._full_name).decode() if self._full_name else None

    @property
    def gender(self):
        return fernet.decrypt(self._gender).decode() if self._gender else None

    def set_password(self, password: str):
        self.password_hash = bcrypt.hashpw(password.encode(), bcrypt.gensalt()).decode()

    def check_password(self, password: str) -> bool:
        return bcrypt.checkpw(password.encode(), self.password_hash.encode())