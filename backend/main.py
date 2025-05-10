from fastapi import FastAPI, Query
from fastapi.middleware.cors import CORSMiddleware
from typing import List
from db import get_connection

app = FastAPI()

# Allow frontend requests
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # Change to your frontend's origin for production    
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/autocomplete", response_model=List[str])
def autocomplete_medications(q: str = Query(..., min_length=1)):
    conn = get_connection()
    try:
        with conn.cursor() as cursor:
            cursor.execute(
                "SELECT Generic FROM va_formulary_feb_2025 WHERE Generic LIKE %s LIMIT 10",
                (q + '%',)
            )
            results = cursor.fetchall()
            # Access the first element of each tuple in results
            return [row[0] for row in results]
    finally:
        conn.close()
