from fastapi import APIRouter, Query, Depends
from sqlalchemy.orm import Session
from db.session import get_db
from controllers.va_formulary import autocomplete_medications
from typing import List

router = APIRouter()

@router.get("/autocomplete", response_model=List[str])
def autocomplete_endpoint(q: str = Query(..., min_length=1), db: Session = Depends(get_db)):
    return autocomplete_medications(q, db)