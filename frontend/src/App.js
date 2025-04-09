import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Lista from './pages/lista';
import Cadastro from './pages/cadastro';
import Edicao from './pages/edicao';
import GlobalStyle from './styles/globalStyle';

function App() {
  return (
    <BrowserRouter>
    <GlobalStyle />
    <Routes>
      <Route path="/" element={<Lista />} />
      <Route path="/cadastro" element={<Cadastro />} />
      <Route path="/editar/:id" element={<Edicao />} />
    </Routes>
  </BrowserRouter>
  );
}

export default App;
