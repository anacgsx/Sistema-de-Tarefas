from fastapi import FastAPI, Depends, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from sqlalchemy.orm import Session
from database import Base, engine, get_db
from models import Tarefa
from pydantic import BaseModel

Base.metadata.create_all(bind=engine)

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

class TarefaBase(BaseModel):
    titulo: str
    descricao: str | None = None
    status: str | None = "Pendente"

class TarefaCreate(TarefaBase):
    pass

class TarefaMostrar(TarefaBase):
    id: int

    class Config:
        orm_mode = True


@app.get("/tarefas", response_model=list[TarefaMostrar])
def listar_tarefas(db: Session = Depends(get_db)):
    return db.query(Tarefa).all()


@app.post("/tarefas", response_model=TarefaMostrar)
def criar_tarefa(tarefa: TarefaCreate, db: Session = Depends(get_db)):
    nova_tarefa = Tarefa(**tarefa.dict())
    db.add(nova_tarefa)
    db.commit()
    db.refresh(nova_tarefa)
    return nova_tarefa


@app.put("/tarefas/{tarefa_id}", response_model=TarefaMostrar)
def atualizar_tarefa(tarefa_id: int, dados: TarefaCreate, db: Session = Depends(get_db)):
    tarefa = db.query(Tarefa).get(tarefa_id)
    if not tarefa:
        raise HTTPException(status_code=404, detail="Tarefa não encontrada")

    tarefa.titulo = dados.titulo
    tarefa.descricao = dados.descricao
    tarefa.status = dados.status
    db.commit()
    db.refresh(tarefa)
    return tarefa


@app.delete("/tarefas/{tarefa_id}")
def deletar_tarefa(tarefa_id: int, db: Session = Depends(get_db)):
    tarefa = db.query(Tarefa).get(tarefa_id)
    if not tarefa:
        raise HTTPException(status_code=404, detail="Tarefa não encontrada")

    db.delete(tarefa)
    db.commit()
    return {"mensagem": "Tarefa deletada com sucesso"}
