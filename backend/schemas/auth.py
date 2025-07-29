from pydantic import BaseModel
from schemas.user import UserOut

class AuthResponse(BaseModel):
    user: UserOut
    access_token: str
    token_type: str