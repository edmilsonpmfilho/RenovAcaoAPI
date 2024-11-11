import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Menu from '../../componentes/menu';
import api from '../../componentes/api/apiConfig'; // Configuração do axios
import "./styles.css";

const AdministradorCadastro = () => {
  const UserList = () => {
    const [users, setUsers] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);
    const usersPerPage = 10; // Total de elementos por página

    useEffect(() => {
      fetchUsers(currentPage);
    }, [currentPage]);

    const fetchUsers = async (page) => {
      try {
        const response = await api.get(`/adminusuario?page=${page}&limit=${usersPerPage}`);
        if (response.data && response.data.users) {
          setUsers(response.data.users);
          setTotalPages(response.data.totalPages);
        } else {
          console.log("Nenhum dado de usuário encontrado.");
        }
      } catch (error) {
        console.error("Erro ao buscar usuários:", error);
      }
    };

    const deleteUser = async (userId) => {
      const confirmDelete = window.confirm("Tem certeza de que deseja excluir este usuário?");
      if (confirmDelete) {
        try {
          await api.delete(`/adminusuario/${userId}`);
          fetchUsers(currentPage); // Atualiza a lista de usuários após a exclusão
        } catch (error) {
          console.error("Erro ao excluir usuário:", error);
        }
      }
    };

    return (
      <div>
       <Menu  />
        <div className="botao-container">
          <Link to={'/cadastro'} className="botao-link">
            <button className='botao'>Cadastrar Usuário</button>
          </Link>
        </div>
        <h2>Lista de Usuários</h2>
        {users.length > 0 ? (
          <div className="table-container">
            <table className="user-table">
              <thead>
                <tr>
                  <th>Nome</th>
                  <th>Matrícula</th>
                  <th>Tipo de Usuário</th>
                  <th>Ações</th>
                </tr>
              </thead>
              <tbody>
                {users.map((user) => (
                  <tr key={user.id}>
                    <td>{user.nome}</td>
                    <td>{user.matricula}</td>
                    <td>{user.tipoUsuario}</td>
                    <td>
                      <button onClick={() => deleteUser(user.id)}>Excluir</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ) : (
          <p>Nenhum usuário cadastrado.</p>
        )}
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={(page) => setCurrentPage(page)}
        />
      </div>
    );
  };

  const Pagination = ({ currentPage, totalPages, onPageChange }) => {
    const handlePrevPage = () => {
      if (currentPage > 1) {
        onPageChange(currentPage - 1);
      }
    };

    const handleNextPage = () => {
      if (currentPage < totalPages) {
        onPageChange(currentPage + 1);
      }
    };

    return (
      <div className="pagination">
        <button onClick={handlePrevPage} disabled={currentPage === 1}>
          Anterior
        </button>
        <span>
          Página {currentPage} de {totalPages}
        </span>
        <button onClick={handleNextPage} disabled={currentPage === totalPages}>
          Próxima
        </button>
      </div>
    );
  };

  return (
    <div>
      <h1>Usuários</h1>
      <UserList />
    </div>
  );
};

export default AdministradorCadastro;
