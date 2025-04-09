from sqlalchemy import Column, String, Integer, Text
from database import Base

class Tarefa(Base):
    __tablename__ = "tarefas"

    id = Column(Integer, primary_key=True, index=True)
    titulo = Column(String(100), nullable=False)
    descricao = Column(Text)
    status = Column(String(20), default="Pendente") 