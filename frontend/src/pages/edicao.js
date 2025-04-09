import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Container, Title, Input, TextArea, Select, Button } from '../styles/styledComponents';


function Edicao() {
    const { id } = useParams();
    const [tarefa, setTarefa] = useState({ titulo: '', descricao: '', status: 'pendente' });
    const navigate = useNavigate();
  
    useEffect(() => {
      fetch(`http://localhost:8000/tarefas/${id}`)
        .then(res =>  
          {if (!res.ok) throw new Error("Tarefa não encontrada");
        return res.json();
      })
      .then(data => setTarefa(data))
      .catch(() => alert("Erro ao carregar tarefa"));
  }, [id]);

  
    const atualizar = (e) => {
      e.preventDefault();
      fetch(`http://localhost:8000/tarefas/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(tarefa)
      }).then(() => navigate("/"));
    };
  
    return (
      <Container>
        <Title>Editar Tarefa</Title>
        <form onSubmit={atualizar}>
          <Input
            placeholder="Título"
            value={tarefa.titulo}
            onChange={e => setTarefa({ ...tarefa, titulo: e.target.value })}
            required
          />
          <TextArea
            placeholder="Descrição"
            value={tarefa.descricao}
            onChange={e => setTarefa({ ...tarefa, descricao: e.target.value })}
            required
          />
          <Select
            value={tarefa.status}
            onChange={e => setTarefa({ ...tarefa, status: e.target.value })}
          >
            <option value="pendente">Pendente</option>
            <option value="em andamento">Em andamento</option>
            <option value="concluída">Concluída</option>
          </Select>
          <Button type="submit">Atualizar</Button>
        </form>
      </Container>
    );
  }

export default Edicao;
