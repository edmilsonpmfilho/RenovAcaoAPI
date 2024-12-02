import React, { useContext } from "react";
import * as yup from "yup";
import { ErrorMessage, Formik, Form, Field } from "formik";
import api from '../../componentes/api/apiConfig';
import { Link, useNavigate } from "react-router-dom";
import { UserContext } from '../../contexts/UserContext';
import EmailIcon from '@mui/icons-material/Email'; // Ícone de email
import LockIcon from '@mui/icons-material/Lock'; // Ícone de senha
import styles from './login.module.css';

function Login() {
    const navigate = useNavigate();
    const { setUser } = useContext(UserContext);

    // Função para realizar o login
    const handleLogin = async (values) => {
        try {
          const response = await api.post("/login", {
            email: values.email,
            senha: values.senha,
          });
      
          if (response.status === 200 && response.data) {
            const userType = response.data.tipoUsuario;
            const userData = {
              nome: response.data.nome,
              matricula: response.data.matricula,
              tipoUsuario: userType,
              email: response.data.email,
            };
            setUser(userData); // Armazena o usuário no contexto
      
            // Navega para a página adequada com base no tipo de usuário
            switch (userType) {
              case 'administrador':
                navigate('/administrador');
                break;
              case 'aluno':
                navigate('/aluno');
                break;
              case 'psicologo':
                navigate('/psicologo');
                break;
              default:
                alert('Tipo de usuário desconhecido. Por favor, entre em contato com o suporte.');
                break;
            }
          }
        } catch (error) {
          // Verifica se o status do erro é 403 (usuário já logado)
          if (error.response && error.response.status === 403) {
            alert("Usuário já está logado em outro dispositivo. Por favor, faça logout antes de tentar novamente.");
          } else if (error.response && error.response.data && error.response.data.msg) {
            // Exibe mensagens de erro retornadas pela API
            alert(error.response.data.msg);
          } else {
            console.error("Houve um erro na requisição de login:", error);
            alert('Ocorreu um erro. Por favor, tente novamente.');
          }
        }
      };
      

   

    const validationsLogin = yup.object().shape({
        email: yup.string().email("Email inválido").required("O email é obrigatório"),
        senha: yup.string().min(8, "A senha deve ter pelo menos 8 caracteres").required("A senha é obrigatória"),
    });

    return (
        <div className={styles.container}>
            <h1 className={styles.title}>Login</h1>
            <Formik initialValues={{ email: '', senha: '' }} onSubmit={handleLogin} validationSchema={validationsLogin}>
                <Form className={styles.loginForm}>
                    <div className={styles.loginFormGroup}>
                        <div className={styles.inputWithIcon}>
                            <EmailIcon />
                            <Field name="email" className={styles.formField} placeholder="Email" />
                        </div>
                        <ErrorMessage component="span" name="email" className={styles.formError} />
                    </div>
                    <div className={styles.loginFormGroup}>
                        <div className={styles.inputWithIcon}>
                            <LockIcon className={styles.icon}/>
                            <Field name="senha" className={styles.formField} type="password" placeholder="Senha" />
                        </div>
                        <ErrorMessage component="span" name="senha" className={styles.formError} />
                    </div>
                    <button className={styles.button} type="submit">Login</button>
                </Form>
            </Formik>
            <div className='botaocon'>
                <Link to={'/'}>
                    <button className={styles.button}>Voltar</button>
                </Link>
            </div>
        </div>
    );
}

export default Login;