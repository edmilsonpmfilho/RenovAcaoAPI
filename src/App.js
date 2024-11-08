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
/* import AdministradorCronograma from './pages/admincronograma';
import Cadastro from './pages/cadastro';
import AdministradorCadastro from './pages/admincadastro';
import AdministradorRelatorio from './pages/adminrelatorio';
import AdministradorMensagem from './pages/adminmensagem';
import AlunoTrilha from './pages/alunotrilha';
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

            {/* <Route path="/cadastro" element={<Cadastro />} />
            <Route path="/admincronograma" element={<AdministradorCronograma />} />
            <Route path="/admincadastro" element={<AdministradorCadastro />} />
            <Route path="/adminrelatorio" element={<AdministradorRelatorio />} />
            <Route path="/adminmensagem" element={<AdministradorMensagem />} />            
            <Route path="/alunotrilha" element={<AlunoTrilha />} />
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