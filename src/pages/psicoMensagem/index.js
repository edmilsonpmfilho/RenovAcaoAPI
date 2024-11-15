import React, { useEffect, useState, useContext } from "react";
import api from '../../componentes/api/apiConfig';
import Menu from '../../componentes/menu';
import { UserContext } from '../../contexts/UserContext';
import styles from './mensagemp.module.css'; 

const PsicologoMensagem = () => {
    const { user } = useContext(UserContext);
    const [mensagens, setMensagens] = useState([]);
    const [respostas, setRespostas] = useState({});
    const [feedback, setFeedback] = useState('');
    const [error, setError] = useState('');
    const [page, setPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);
    const limit = 10;

    useEffect(() => {
        const fetchMensagens = async () => {
            try {
                const response = await api.get(`/mensagens/psicologo?page=${page}&limit=${limit}`);
                setMensagens(response.data.messages);
                setTotalPages(response.data.totalPages);
            } catch (error) {
                setError('Erro ao buscar as mensagens.');
            }
        };

        fetchMensagens();
    }, [page]);

    const handleResponder = async (mensagem_id) => {
        try {
            const response = await api.post(`/resposta`, {
                mensagem_id,
                resposta: respostas[mensagem_id] || '',
                matricula: user.matricula, // Usando a matrícula do usuário do contexto
                tipoUsuario: 'psicologo',
            });
            setFeedback(response.data.msg);

            // Atualize a mensagem com a resposta e a data da resposta
            setMensagens((prevMensagens) =>
                prevMensagens.map((msg) =>
                    msg.id === mensagem_id
                        ? { ...msg, resposta: response.data.resposta, data_resposta: response.data.data_resposta }
                        : msg
                )
            );
            setRespostas(prevRespostas => ({ ...prevRespostas, [mensagem_id]: '' }));
        } catch (error) {
            setError('Erro ao enviar a resposta.');
        }
    };

    const handleRespostaChange = (mensagem_id, value) => {
        setRespostas(prevRespostas => ({ ...prevRespostas, [mensagem_id]: value }));
    };

    const handlePageChange = (newPage) => {
        if (newPage > 0 && newPage <= totalPages) {
            setPage(newPage);
        }
    };

    return (
        <div className={styles.container}>
            <Menu userRole="psicologo" />
            <h1>Mensagens para Psicólogo</h1>
            {error && <p className={styles.error}>{error}</p>}
            {mensagens.length > 0 ? (
                <ul className={styles.messageList}>
                    {mensagens.map((msg, index) => (
                        <li key={`${msg.id}-${index}`} className={styles.messageItem}>
                            <p><strong>De:</strong> {msg.remetente_nome}</p>
                            <p>{msg.mensagem}</p>
                            <p><em>{new Date(msg.data_envio).toLocaleString()}</em></p>
                            {msg.resposta ? (
                                <>
                                    <p><strong>Resposta:</strong> {msg.resposta}</p>
                                    <p><strong>Data da resposta:</strong> {new Date(msg.data_resposta).toLocaleString()}</p>
                                </>
                            ) : (
                                <>
                                    <textarea
                                        value={respostas[msg.id] || ''}
                                        onChange={(e) => handleRespostaChange(msg.id, e.target.value)}
                                        placeholder="Escreva sua resposta aqui"
                                        className={styles.textarea}
                                    />
                                    <button onClick={() => handleResponder(msg.id)} className={styles.button}>Responder</button>
                                </>
                            )}
                        </li>
                    ))}
                </ul>
            ) : (
                <p className={styles.noMessage}>Nenhuma mensagem encontrada.</p>
            )}
            <div className={styles.pagination}>
                <button onClick={() => handlePageChange(page - 1)} disabled={page === 1}>Anterior</button>
                <span>Página {page} de {totalPages}</span>
                <button onClick={() => handlePageChange(page + 1)} disabled={page === totalPages}>Próxima</button>
            </div>
            {feedback && <p>{feedback}</p>}
        </div>
    );
};

export default PsicologoMensagem;
