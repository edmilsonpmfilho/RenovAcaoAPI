import React, { useState } from "react";
import api from '../../componentes/api/apiConfig';
import Menu from '../../componentes/menu';
import styles from './cronograma.module.css';



const AdministradorCronograma = () => {
  // Estados para o formulário de eventos
  const [dataEvento, setDataEvento] = useState('');
  const [matriculaAlunoEvento, setMatriculaAlunoEvento] = useState('');
  const [matriculaPsicologo, setMatriculaPsicologo] = useState('');
  const [descricaoEvento, setDescricaoEvento] = useState('');
  const [feedbackEvento, setFeedbackEvento] = useState('');



  const handleSubmitEvento = async (e) => {
    e.preventDefault();

    if (matriculaAlunoEvento.length !== 8 || matriculaPsicologo.length !== 8) {
      setFeedbackEvento('A matrícula do aluno e do psicólogo deve ter exatamente 8 caracteres.');
      return;
    }

    try {
      const response = await api.post('/adicionar-evento', {
        data_evento: dataEvento,
        matricula_aluno: matriculaAlunoEvento,
        matricula_psicologo: matriculaPsicologo,
        descricao: descricaoEvento,
      });
      setFeedbackEvento(response.data.msg);
      setDataEvento('');
      setMatriculaAlunoEvento('');
      setMatriculaPsicologo('');
      setDescricaoEvento('');
    } catch (error) {
      setFeedbackEvento('Erro ao adicionar o evento.');
    }
  };

  return (

    <div className={styles.body}>
      <Menu />
      <header className={styles.header}>
        <h1>Administrador Cronograma</h1>
      </header>
      {/* Formulário para adicionar eventos */}
      <div className={styles.formContainer}>
        <h2>Adicionar Evento</h2>
        <form onSubmit={handleSubmitEvento} className={styles.form}>
          <div>
            <label>Data do Evento:</label>
            <input
              type="date"
              value={dataEvento}
              onChange={(e) => setDataEvento(e.target.value)}
              required
              className={styles.inputDate}
            />
          </div>
          <div>
            <label>Matrícula do Aluno:</label>
            <input
              type="text"
              value={matriculaAlunoEvento}
              onChange={(e) => setMatriculaAlunoEvento(e.target.value)}
              maxLength="8"
              required
              className={styles.inputText}
            />
          </div>
          <div>
            <label>Matrícula do Psicólogo:</label>
            <input
              type="text"
              value={matriculaPsicologo}
              onChange={(e) => setMatriculaPsicologo(e.target.value)}
              maxLength="8"
              required
              className={styles.inputText}
            />
          </div>
          <div>
            <label>Descrição do Evento:</label>
            <textarea
              value={descricaoEvento}
              onChange={(e) => setDescricaoEvento(e.target.value)}
              required
              className={styles.textarea}
            />
          </div>
          <button type="submit" className={styles.submitButton}>Adicionar Evento</button>
        </form>
        {feedbackEvento && <p>{feedbackEvento}</p>}
      </div>
      
    </div>
  );
};

export default AdministradorCronograma;
