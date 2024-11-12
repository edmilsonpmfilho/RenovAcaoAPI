// TrocarSenha.js
import React, { useState, useContext } from "react";
import api from "../../componentes/api/apiConfig";
import Menu from '../../componentes/menu';
import { UserContext } from '../../contexts/UserContext';
import styles from './trocarsenha.module.css';
import LockIcon from '@mui/icons-material/Lock'; // Ícone de senha
import { ErrorMessage, Formik, Form, Field } from "formik";

const TrocarSenha = () => {
  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [message, setMessage] = useState("");
  const { user } = useContext(UserContext);
 

  const handlePasswordChange = async (e) => {
    e.preventDefault();

    // Verifica se a nova senha coincide com a confirmação
    if (newPassword !== confirmPassword) {
      setMessage("A nova senha e a confirmação não coincidem");
      return;
    }

    try {
      const response = await api.put("/trocarsenha", {
        matricula: user?.matricula, // Usa a matrícula do contexto
        oldPassword,
        newPassword,
      });
      setMessage(response.data.message);

      setOldPassword("");
      setNewPassword("");
      setConfirmPassword("");
    } catch (error) {
      setMessage(error.response.data.error || "Erro ao alterar senha");
    }
  };

  return (
    <div className={styles.container}>
    <Menu  />
    <h2>Trocar Senha</h2>
    <Formik
      initialValues={{ oldPassword: '', newPassword: '', confirmPassword: '' }}
      onSubmit={handlePasswordChange}
      //validationSchema={validationsPasswordChange} // Presume-se que esta variável esteja definida
    >
      <Form className={styles.form}>
        <div className={styles.column}>
          <div className={styles.senhaAtual}>
            <div className={styles.inputWithIcon}>
              <LockIcon className={styles.icon} />
              <Field
                name="oldPassword"
                type="password"
                placeholder="Senha Atual"
                className={styles.formField}
                required
              />
            </div>
            <ErrorMessage component="span" name="oldPassword" className={styles.formError} />
          </div>
        </div>
  
        <div className={styles.column}>
          <div className={styles.senhaNova}>
            <div className={styles.inputWithIcon}>
              <LockIcon className={styles.icon} />
              <Field
                name="newPassword"
                type="password"
                placeholder="Nova Senha"
                className={styles.formField}
                required
              />
            </div>
            <ErrorMessage component="span" name="newPassword" className={styles.formError} />
            
            <div className={styles.inputWithIcon}>
              <LockIcon className={styles.icon} />
              <Field
                name="confirmPassword"
                type="password"
                placeholder="Confirmar Senha"
                className={styles.formField}
                required
              />
            </div>
            <ErrorMessage component="span" name="confirmPassword" className={styles.formError} />
          </div>
        </div>
  
        
      </Form>
    </Formik>
    <button type="submit" className={styles.button}>Trocar Senha</button>
    {message && <p>{message}</p>}
  </div>
  
  );
};

export default TrocarSenha;
