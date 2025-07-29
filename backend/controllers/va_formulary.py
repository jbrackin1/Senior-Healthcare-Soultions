from sqlalchemy.orm import Session
from models.va_formulary import VaFormularyEntry

def autocomplete_medications(query: str, db: Session) -> list[str]:
    results = (
        db.query(VaFormularyEntry.Generic)
        .filter(VaFormularyEntry.Generic.like(f"{query}%"))
        .limit(10)
        .all()
    )
    return [r[0] for r in results]