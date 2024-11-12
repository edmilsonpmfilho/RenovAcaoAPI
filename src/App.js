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

/* 

import AdministradorRelatorio from './pages/adminrelatorio';
import AdministradorMensagem from './pages/adminmensagem';

import AlunoAgenda from './pages/alunoagenda';
import AlunoMensagem from './pages/alunomensagem';
import PsicologoAgenda from './pages/psicologoagenda';
import PsicologoAcompanhamento from './pages/psicologoacompanhamento';
import PsicologoMensagem from './pages/psicologomensagem';
 */

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

            {/* 
            
            
            <Route path="/adminrelatorio" element={<AdministradorRelatorio />} />
            <Route path="/adminmensagem" element={<AdministradorMensagem />} />            
            
            <Route path="/alunoagenda" element={<AlunoAgenda />} />
            <Route path="/alunomensagem" element={<AlunoMensagem />} />          
            <Route path="/psicologoagenda" element={<PsicologoAgenda />} />
            <Route path="/psicologoacompanhamento" element={<PsicologoAcompanhamento />} />
            <Route path="/psicologomensagem" element={<PsicologoMensagem />} /> */}
          </Routes>
          <Footer />
        </div>
      </BrowserRouter>
    </UserProvider>
  );
}

export default App;