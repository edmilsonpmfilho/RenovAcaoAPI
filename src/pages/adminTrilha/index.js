import React, { useState } from "react";
import api from '../../componentes/api/apiConfig';
import Modal from 'react-modal';
import Menu from '../../componentes/menu';
import styles from './adminTrilha.module.css';

Modal.setAppElement('#root');

const AdministradorTrilha = () => {
  // Estados para o formulário de trilhas e links
  const [tituloTrilha, setTituloTrilha] = useState('');
  const [descricaoTrilha, setDescricaoTrilha] = useState('');
  const [links, setLinks] = useState([{ url: '', titulo: '', descricao: '' }]);
  const [trilhaId, setTrilhaId] = useState(null);
  const [feedbackTrilha, setFeedbackTrilha] = useState('');
  const [matriculaAlunoTrilha, setMatriculaAlunoTrilha] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);


  const handleSubmitTrilha = async (e) => {
    e.preventDefault();

    if (matriculaAlunoTrilha.length !== 8) {
      setFeedbackTrilha('A matrícula do aluno deve ter exatamente 8 caracteres.');
      return;
    }

    try {
      const response = await api.post('/adicionar-trilha', {
        titulo: tituloTrilha,
        descricao: descricaoTrilha,
        matricula_aluno: matriculaAlunoTrilha,
      });
      setFeedbackTrilha(response.data.msg);
      setTrilhaId(response.data.trilhaId);
      setTituloTrilha('');
      setDescricaoTrilha('');
      setIsModalOpen(true);  // Abre o modal ao adicionar a trilha com sucesso
    } catch (error) {
      setFeedbackTrilha('Erro ao adicionar a trilha.');
    }
  };

  const handleSubmitLink = async (e) => {
    e.preventDefault();

    if (!trilhaId) {
      setFeedbackTrilha('Primeiro adicione uma trilha.');
      return;
    }

    try {
      await Promise.all(links.map(link =>
        api.post('/adicionar-link', {
          url: link.url,
          titulo: link.titulo,
          descricao: link.descricao,
          trilha_id: trilhaId,
        })
      ));
      setFeedbackTrilha('Links adicionados com sucesso');
      setLinks([{ url: '', titulo: '', descricao: '' }]);
      setIsModalOpen(false);  // Fecha o modal após adicionar os links com sucesso
    } catch (error) {
      setFeedbackTrilha('Erro ao adicionar os links.');
    }
  };

  const handleLinkChange = (index, e) => {
    const { name, value } = e.target;
    const newLinks = [...links];
    newLinks[index][name] = value;
    setLinks(newLinks);
  };

  const handleAddLink = () => {
    setLinks([...links, { url: '', titulo: '', descricao: '' }]);
  };

  return (

    <div className={styles.body}>
      <Menu />
      <header className={styles.header}>
        <h1>Trilhas</h1>
      </header>     
      {/* Formulário para adicionar trilhas */}
      <div className={styles.formContainer}>
        <h2>Adicionar Trilha</h2>
        <form onSubmit={handleSubmitTrilha} className={styles.form}>
          <div>
            <label>Título:</label>
            <input
              type="text"
              value={tituloTrilha}
              onChange={(e) => setTituloTrilha(e.target.value)}
              required
              className={styles.inputText}
            />
          </div>
          <div>
            <label>Descrição:</label>
            <textarea
              value={descricaoTrilha}
              onChange={(e) => setDescricaoTrilha(e.target.value)}
              required
              className={styles.textarea}
            />
          </div>
          <div>
            <label>Matrícula do Aluno:</label>
            <input
              type="text"
              value={matriculaAlunoTrilha}
              onChange={(e) => setMatriculaAlunoTrilha(e.target.value)}
              maxLength="8"
              required
              className={styles.inputText}
            />
          </div>
          <button type="submit" className={styles.submitButton}>Adicionar Trilha</button>
        </form>
        {feedbackTrilha && <p>{feedbackTrilha}</p>}
      </div>
      {/* Modal para adicionar links */}
      <Modal
        isOpen={isModalOpen}
        onRequestClose={() => setIsModalOpen(false)}
        contentLabel="Adicionar Links"
        className="modal"
        overlayClassName="overlay"
      >
        <h2>Adicionar Links</h2>
        <form onSubmit={handleSubmitLink}>
          {links.map((link, index) => (
            <div key={index}>
              <label>URL:</label>
              <input
                type="text"
                name="url"
                value={link.url}
                onChange={(e) => handleLinkChange(index, e)}
                required
                className={styles.inputText}
              />
              <label>Título:</label>
              <input
                type="text"
                name="titulo"
                value={link.titulo}
                onChange={(e) => handleLinkChange(index, e)}
                required
                className={styles.inputText}
              />
              <label>Descrição:</label>
              <textarea
                name="descricao"
                value={link.descricao}
                onChange={(e) => handleLinkChange(index, e)}
                required
                className={styles.textarea}
              />
            </div>
          ))}
          <button type="button" onClick={handleAddLink} className={styles.submitButton}>Adicionar Link</button>
          <button type="submit" className={styles.submitButton}>Salvar Links</button>
        </form>
      </Modal>
    </div>
  );
};

export default AdministradorTrilha;
