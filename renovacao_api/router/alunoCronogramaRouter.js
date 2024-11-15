// routes/eventoRouter.js
const express = require('express');
const AlunoCronogramaRouter = express.Router();
const AlunoCronogramaController = require('../controller/alunoCronogramaController');

// Rota para listar eventos por aluno
AlunoCronogramaRouter.get('/eventos/:matricula_aluno', AlunoCronogramaController.getEventosPorAluno);

// Rota para listar datas distintas de consulta por matrícula do aluno
AlunoCronogramaRouter.get('/eventos-datas/:matricula', AlunoCronogramaController.getDatasDistintas);

// Rota existente para listar eventos por psicólogo e aluno
AlunoCronogramaRouter.get('/eventos', AlunoCronogramaController.getEventos);

module.exports = AlunoCronogramaRouter;
