import os
import mysql.connector
from dotenv import load_dotenv
from pathlib import Path

# Load environment variables from .env file
load_dotenv(dotenv_path=Path(__file__).resolve().parent.parent / ".env")

def get_connection():
    host = os.getenv("DB_HOST", "localhost")  # Default to localhost if not in .env
    port = os.getenv("DB_PORT", "3306")      # Default to 3306 if not in .env
    user = os.getenv("DB_USER", "root")  # Default to 'yourusername' if not in .env
    password = os.getenv("DB_PASSWORD", "yourpassword")  # Default to 'yourpassword' if not in .env
    database = os.getenv("DB_NAME", "va_formulary")  # Default to 'yourdbname' if not in .env

    return mysql.connector.connect(
        host=host,
        port=port,
        user=user,
        password=password,
        database=database
    )