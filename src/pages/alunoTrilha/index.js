import React, { useEffect, useState, useContext } from "react";
import api from '../../componentes/api/apiConfig';
import Menu from '../../componentes/menu';
//import { useNavigate } from 'react-router-dom';
import { UserContext } from '../../contexts/UserContext';
import styles from './trilha.module.css';

const AlunoTrilha = () => {
  const [trilhas, setTrilhas] = useState([]);
  const [links, setLinks] = useState([]);
  const [feedback, setFeedback] = useState('');
  const [currentTrilhaId, setCurrentTrilhaId] = useState(null);
  const { user } = useContext(UserContext);

  useEffect(() => {
    if (user && user.matricula) {
      fetchTrilhas(user.matricula);
    }
  }, [user]);

  const fetchTrilhas = async (matricula) => {
    try {
      const response = await api.get(`/trilhas/${matricula}`);
      setTrilhas(response.data);
    } catch (error) {
      console.error("Erro ao buscar trilhas:", error);
    }
  };

  const fetchLinks = async (trilhaId) => {
    try {
      const response = await api.get(`/links/${trilhaId}`, {
        params: { matricula_aluno: user.matricula }
      });
      setLinks(response.data);
      setCurrentTrilhaId(trilhaId);
    } catch (error) {
      console.error("Erro ao buscar links:", error);
    }
  };

  const handleMarcarAssistido = async (linkId) => {
    try {
      const response = await api.post('/marcar-assistido', {
        link_id: linkId,
        matricula_aluno: user.matricula,
      });
      setFeedback(response.data.msg);
      setLinks(links.map(link => link.id === linkId ? { ...link, assistido: true } : link));
    } catch (error) {
      console.error("Erro ao marcar link como assistido:", error);
    }
  };

  return (
    <div className={styles.body}>
      <Menu userRole="aluno" />
      <h1 className={styles.headerLarge}>Trilhas de Aprendizagem</h1>
      {currentTrilhaId ? (
        <div>
          <button onClick={() => setCurrentTrilhaId(null)} className={styles.buttonBack}>Voltar</button>
          {links.length > 0 ? (
            <div>
              {links.map((link) => (
                <div key={link.id} className={styles.linkBloco}>
                  <h3>{link.titulo}</h3>
                  <p>{link.descricao}</p>
                  <a href={link.url} target="_blank" rel="noopener noreferrer">Acessar Conteúdo</a>
                  {link.assistido ? (
                    <p>Já assistido</p>
                  ) : (
                    <button onClick={() => handleMarcarAssistido(link.id)} className={styles.buttonMark}>Marcar como assistido</button>
                  )}
                </div>
              ))}
            </div>
          ) : (
            <p className={styles.noData}>Nenhum link encontrado.</p>
          )}
          {feedback && <p className={styles.feedback}>{feedback}</p>}
        </div>
      ) : (
        <div>
          {trilhas.length > 0 ? (
            <div>
              {trilhas.map((trilha) => (
                <div key={trilha.id} className={styles.trilhaBloco}>
                  <h2>{trilha.titulo}</h2>
                  <p>{trilha.descricao}</p>
                  <button onClick={() => fetchLinks(trilha.id)} className={styles.button}>Entrar</button>
                </div>
              ))}
            </div>
          ) : (
            <p className={styles.noData}>Nenhuma trilha encontrada.</p>
          )}
        </div>
      )}
    </div>
  );
};

export default AlunoTrilha;
