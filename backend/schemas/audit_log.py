from pydantic import BaseModel
from datetime import datetime

class AuditLogOut(BaseModel):
    id: str
    user_id: str
    action: str
    detail: str
    timestamp: datetime

    class Config:
        from_attributes = True