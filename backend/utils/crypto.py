from cryptography.fernet import Fernet
import os

# Use a consistent key pulled from environment (e.g., stored in AWS Secrets Manager in prod)
FERNET_KEY = os.getenv("FERNET_KEY").encode()
fernet = Fernet(FERNET_KEY)

def encrypt(value: str) -> bytes:
    return fernet.encrypt(value.encode())

def decrypt(value: bytes) -> str:
    return fernet.decrypt(value).decode()