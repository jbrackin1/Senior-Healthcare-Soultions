from sqlalchemy import Column, String, Integer
from db.base import Base

class VaFormularyEntry(Base):
    __tablename__ = "va_formulary_feb_2025"

    id = Column(Integer, primary_key=True, autoincrement=True)
    generic = Column("Generic", String(255), index=True, nullable=True)
    va_class = Column("VA Class", String(100), nullable=True)
    restriction = Column("Restriction", String(255), nullable=True)
    dosage_form = Column("Dosage Form", String(100), nullable=True)
    comments = Column("Comments", String(255), nullable=True)
    ue_formulary = Column("U/E Formulary", String(50), nullable=True)
    clinical_guidance = Column("Clinical Guidance", String(255), nullable=True)