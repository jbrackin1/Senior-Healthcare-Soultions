from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session
from models.audit_log import AuditLog
from schemas.audit_log import AuditLogOut
from utils.deps import get_db, get_current_admin  # assumes you have a get_current_admin() dep

router = APIRouter()

@router.get("/audit-logs", response_model=list[AuditLogOut])
def get_logs(db: Session = Depends(get_db), current_user=Depends(get_current_admin)):
    return db.query(AuditLog).order_by(AuditLog.timestamp.desc()).limit(100).all()