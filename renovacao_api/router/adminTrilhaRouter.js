// routes/TrilhaRouter.js
const express = require('express');
const AdminTrilhaRouter = express.Router();
const AdminTrilhaController = require('../controller/adminTrilhaController');

// Rota para listar todas as trilhas
AdminTrilhaRouter.get('/', AdminTrilhaController.getAll);

// Rota para obter uma trilha específica por ID
AdminTrilhaRouter.get('/:id', AdminTrilhaController.getById);

// Rota para criar uma nova trilha
AdminTrilhaRouter.post('/', AdminTrilhaController.create);

// Rota para atualizar uma trilha existente
AdminTrilhaRouter.put('/:id', AdminTrilhaController.update);

// Rota para deletar uma trilha
AdminTrilhaRouter.delete('/:id', AdminTrilhaController.delete);

module.exports = AdminTrilhaRouter;
