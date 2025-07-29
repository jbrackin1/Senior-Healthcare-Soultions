from sqlalchemy import Column, String, DateTime, JSON, func
from db.base import Base
import uuid

class AuditLog(Base):
    __tablename__ = "audit_logs"

    id = Column(String(36), primary_key=True, default=lambda: str(uuid.uuid4()))
    user_id = Column(String(36), nullable=True)  # who triggered the action (nullable if system event)
    action = Column(String(255), nullable=False)  # e.g. "create_user", "update_user"
    target_id = Column(String(36), nullable=True)  # the ID of the affected record (e.g. updated user)
    details = Column(JSON, nullable=True)  # optional: what changed
    timestamp = Column(DateTime(timezone=True), server_default=func.now())