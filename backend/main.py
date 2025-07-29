from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from routers import user, va_formulary, audit_log, auth  # Add any other routers as needed

app = FastAPI()

# CORS configuration
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # TODO: tighten this for prod
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Register API routers
app.include_router(user.router)
app.include_router(va_formulary.router)
app.include_router(audit_log.router, prefix="/admin", tags=["audit"])
app.include_router(auth.router, prefix="/auth")