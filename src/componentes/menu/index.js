import React, { useContext, useState } from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import LogoutIcon from '@mui/icons-material/Logout';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import MessageIcon from '@mui/icons-material/Message';
import TheatersIcon from '@mui/icons-material/Theaters';
import PeopleIcon from '@mui/icons-material/People';
import TimelineIcon from '@mui/icons-material/Timeline';
import AppRegistrationIcon from '@mui/icons-material/AppRegistration';
import AssessmentIcon from '@mui/icons-material/Assessment';
import { Link, useNavigate } from 'react-router-dom';
import api from '../api/apiConfig';
import { UserContext } from '../../contexts/UserContext';
import './styles.css';

function Menu({ userRole }) {
  const [isOpen, setIsOpen] = useState(false);
  const { user, setUser } = useContext(UserContext);
  const navigate = useNavigate();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // Função de logout
  const handleLogout = async () => {
    try {
      if (!user || !user.email) {
        alert("Nenhum usuário logado.");
        return;
      }
  
      console.log("Tentando deslogar usuário:", user.email); // Adicionando log de depuração
  
      const response = await api.post("/logout", { email: user.email });
  
      if (response.status === 200) {
        alert(response.data.msg);
        setUser(null);
        localStorage.removeItem('user');
        navigate("/login");
      }
    } catch (error) {
      console.error("Erro ao realizar logout:", error.response || error);
      alert("Erro ao realizar logout: " + (error.response?.data?.msg || error.message));
    }
  };

  const renderMenuItems = () => {
    switch (userRole) {
      case 'administrador':
        return (
          <>
            <Link to={'/admincronograma'}>
              <button className='button'>
                <AppRegistrationIcon /> Cronograma
              </button>
            </Link>
            <Link to={'/admincadastro'}>
              <button className='button'>
                <PeopleIcon /> Usuários
              </button>
            </Link>
            <Link to={'/adminmensagem'}>
              <button className='button'>
                <MessageIcon /> Mensagens
              </button>
            </Link>
            <Link to={'/adminrelatorio'}>
              <button className='button'>
                <AssessmentIcon /> Relatórios
              </button>
            </Link>
          </>
        );
      case 'aluno':
        return (
          <>
            <Link to={'/alunotrilha'}>
              <button className='button'>
                <TheatersIcon /> Trilha educativa
              </button>
            </Link>
            <Link to={'/alunoagenda'}>
              <button className='button'>
                <CalendarMonthIcon /> Agenda
              </button>
            </Link>
            <Link to={'/alunomensagem'}>
              <button className='button'>
                <MessageIcon /> Mensagens
              </button>
            </Link>
          </>
        );
      case 'psicologo':
        return (
          <>
            <Link to={'/psicologoagenda'}>
              <button className='button'>
                <CalendarMonthIcon /> Agenda
              </button>
            </Link>
            <Link to={'/psicologoacompanhamento'}>
              <button className='button'>
                <TimelineIcon /> Acompanhamento
              </button>
            </Link>
            <Link to={'/psicologomensagem'}>
              <button className='button'>
                <MessageIcon /> Mensagens
              </button>
            </Link>
          </>
        );
      default:
        return null;
    }
  };

  return (
    <div className={`hamburger-menu ${isOpen ? 'open' : ''}`}>
      <div className="menu-icon" onClick={toggleMenu}>
        {isOpen ? <CloseIcon className='close-icon' /> : <MenuIcon />}
      </div>
      {isOpen && (
        <div className="menu-items">
          {renderMenuItems()}
          <button className='button logout-button' onClick={handleLogout}>
            <LogoutIcon /> Sair
          </button>
        </div>
      )}
    </div>
  );
}

export default Menu;
