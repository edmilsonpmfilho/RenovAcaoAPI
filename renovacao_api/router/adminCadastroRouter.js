// /routes/userRoutes.js
const express = require("express");
const AdminCadastroController = require("../controller/adminCadastroController");

const adminCadastroController = express.Router();

// Rota para listar usuários com paginação
adminCadastroController.get("/adminusuario", AdminCadastroController.getUsers);


// Rota para excluir um usuário
adminCadastroController.delete("/adminusuario/:id", AdminCadastroController.deleteUser);

module.exports = adminCadastroController;
