from sqlalchemy.orm import Session
from models.audit_log import AuditLog
from fastapi import HTTPException,Depends, status
from models.user import User
from utils.deps import get_current_user
from utils.deps import get_current_admin

def log_audit(db: Session, *, action: str, user_id: str = None, target_id: str = None, details: dict = None):
    log_entry = AuditLog(
        user_id=user_id,
        action=action,
        target_id=target_id,
        details=details,
    )
    db.add(log_entry)
    db.commit()
