import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Container, Title, Button, TarefaItem } from '../styles/styledComponents';

function Lista() {
  const [tarefas, setTarefas] = useState([]);

  const buscarTarefas = () => {
    fetch("http://localhost:8000/tarefas")
      .then(res => res.json())
      .then(setTarefas);
  };

  useEffect(() => {
    buscarTarefas();
  }, []);

  const deletar = (id) => {
    fetch(`http://localhost:8000/tarefas/${id}`, { method: "DELETE" })
      .then(() => buscarTarefas());
  };

  return (
    <Container>
    <Title>Minhas Tarefas</Title>
    <Link to="/cadastro"><Button>+ Nova Tarefa</Button></Link>
    <ul>
      {tarefas.map(t => (
        <TarefaItem key={t.id}>
          <strong>{t.titulo}</strong> - {t.status}<br />
          <p>{t.descricao}</p>
          <Link to={`/editar/${t.id}`}><Button>Editar</Button></Link>
          <Button onClick={() => deletar(t.id)}>Excluir</Button>
        </TarefaItem>
      ))}
    </ul>
  </Container>
  );
}

export default Lista;
