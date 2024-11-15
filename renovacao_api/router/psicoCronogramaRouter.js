const express = require('express');
const PsicoCronogramaRouter = express.Router();
const PsicoCronogramaController = require('../controller/psicoCronogramaController');

// Rota para listar eventos por psicólogo e aluno
PsicoCronogramaRouter.get("/eventos", PsicoCronogramaController.listarEventosPorPsicologoEAluno);

// Rota para listar eventos por psicólogo
PsicoCronogramaRouter.get("/eventos-psicologo/:matricula_psicologo", PsicoCronogramaController.listarEventosPorPsicologo);

// Rota para listar datas de consultas por aluno
PsicoCronogramaRouter.get("/eventos-datas/:matricula", PsicoCronogramaController.listarConsultasPorAluno);

module.exports = PsicoCronogramaRouter;
