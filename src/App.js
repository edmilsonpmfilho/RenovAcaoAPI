import { BrowserRouter } from 'react-router-dom';
import { Routes, Route } from 'react-router-dom';
import { UserProvider } from './contexts/UserContext';
import React from 'react';
import './App.css';
import Header from './componentes/header';
import Home from './pages/home';
import Login from './pages/login';
import Administrador from './pages/admin';
import Aluno from './pages/aluno';
import Psicologo from './pages/psicologo';
import Footer from './componentes/footer';
import AdministradorCadastro from './pages/adminCadastro';
import Cadastro from './pages/cadastro';
import TrocarSenha from './pages/trocarsenha';
import AdministradorTrilha from './pages/adminTrilha';
import AlunoTrilha from './pages/alunoTrilha';
import AdministradorCronograma from './pages/adminCronograma';
import AlunoCronograma from './pages/alunoCronograma';
import PsicologoCronograma from './pages/psicoCronograma';
import AdministradorMensagem from './pages/adminMensagem';
import AlunoMensagem from './pages/alunoMensagem';
import PsicologoMensagem from './pages/psicoMensagem';
import PsicologoRelatorio from './pages/psicoRelatorio';
import PsicologoAcompanhamento from './pages/psicoAcompanhamento';



function App() {
  return (
    <UserProvider>
      <BrowserRouter>
        <div className="App">
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/administrador" element={<Administrador />} />
            <Route path="/aluno" element={<Aluno />} />
            <Route path="/psicologo" element={<Psicologo />} />
            <Route path="/admincadastro" element={<AdministradorCadastro />} />
            <Route path="/cadastro" element={<Cadastro />} />
            <Route path="/trocarsenha" element={<TrocarSenha />} />
            <Route path="/admintrilha" element={<AdministradorTrilha />} />
            <Route path="/alunotrilha" element={<AlunoTrilha />} />
            <Route path="/admincronograma" element={<AdministradorCronograma />} />
            <Route path="/alunocronograma" element={<AlunoCronograma />} />
            <Route path="/psicologocronograma" element={<PsicologoCronograma />} />
            <Route path="/adminmensagem" element={<AdministradorMensagem />} />
            <Route path="/alunomensagem" element={<AlunoMensagem />} />
            <Route path="/psicologomensagem" element={<PsicologoMensagem />} />
            <Route path="/psicorelatorio" element={<PsicologoRelatorio />} />
            <Route path="/psicoacompanhamento" element={<PsicologoAcompanhamento />} />
          </Routes>
          <Footer />
        </div>
      </BrowserRouter>
    </UserProvider>
  );
}

export default App;