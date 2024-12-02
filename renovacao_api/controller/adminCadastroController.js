// /controllers/AdminCadastroController.js
const AdministradorCadastroModel = require("../model/adminCadastroModel");

const AdminCadastroController = {
  // Listar usuários com paginação
  getUsers: (req, res) => {
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 10;

    AdministradorCadastroModel.getAllUsers(page, limit, (err, users) => {
      if (err) return res.status(500).json({ error: "Erro ao buscar usuários" });
      
      AdministradorCadastroModel.getTotalUsers((err, total) => {
        if (err) return res.status(500).json({ error: "Erro ao contar usuários" });
        
        res.json({
          users,
          currentPage: page,
          totalPages: Math.ceil(total / limit),
        });
      });
    });
  },


  // Excluir usuário
  deleteUser: (req, res) => {
    const { id } = req.params;
    AdministradorCadastroModel.deleteUserById(id, (err) => {
      if (err) return res.status(500).json({ error: "Erro ao excluir usuário" });
      res.json({ message: "Usuário excluído com sucesso" });
    });
  },
};

module.exports = AdminCadastroController;
