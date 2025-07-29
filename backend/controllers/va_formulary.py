from sqlalchemy.orm import Session
from models.va_formulary import VaFormularyEntry
from typing import List

def autocomplete_medications(query: str, db: Session) -> List[str]:
    results = (
        db.query(VaFormularyEntry.generic)
        .filter(VaFormularyEntry.generic.like(f"{query}%"))
        .limit(10)
        .all()
    )
    return [r[0] for r in results]