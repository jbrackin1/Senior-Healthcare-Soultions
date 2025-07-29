from sqlalchemy import Column, String
from db.base import Base

class VaFormularyEntry(Base):
    __tablename__ = "va_formulary_feb_2025"

    Generic = Column(String, primary_key=True, index=True)  # adjust as needed