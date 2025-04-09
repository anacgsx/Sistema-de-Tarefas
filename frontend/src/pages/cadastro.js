import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Container, Title, Input, TextArea, Select, Button } from '../styles/styledComponents';

function Cadastro() {
  const [titulo, setTitulo] = useState('');
  const [descricao, setDescricao] = useState('');
  const [status, setStatus] = useState('');
  const navigate = useNavigate();

  const salvar = (e) => {
    e.preventDefault();
  
    fetch("http://localhost:8000/tarefas", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ titulo, descricao, status })
    })
      .then(response => {
        if (response.ok) {
          navigate("/");
        } else {
          console.error("Erro ao salvar tarefa.");
        }
      })
      .catch(error => console.error("Erro na requisição:", error));
  };  

  return (
    <Container>
      <Title>Nova Tarefa</Title>
      <form onSubmit={salvar}>
        <Input placeholder="Título" value={titulo} onChange={e => setTitulo(e.target.value)} required />
        <TextArea placeholder="Descrição" value={descricao} onChange={e => setDescricao(e.target.value)} required />
        <Select value={status} onChange={e => setStatus(e.target.value)}>
          <option value="pendente">Pendente</option>
          <option value="em andamento">Em andamento</option>
          <option value="concluída">Concluída</option>
        </Select>
        <Button type="submit">Salvar</Button>
      </form>
    </Container>
  );
}

export default Cadastro;
