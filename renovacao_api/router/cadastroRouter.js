// routes/userRoutes.js
const express = require('express');
const CadastroController = require('../controller/cadastroController');
const cadastroRouter = express.Router();

cadastroRouter.post('/cadastro', CadastroController.register);

module.exports = cadastroRouter;
