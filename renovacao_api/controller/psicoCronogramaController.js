const PsicoCronogramaModel = require('../model/psicoCronogramaModel');

const PsicoCronogramaController = {
  listarEventosPorPsicologoEAluno: async (req, res) => {
    const { matricula_psicologo, matricula_aluno } = req.query;
    try {
      const eventos = await PsicoCronogramaModel.getEventosByPsicologoAndAluno(matricula_psicologo, matricula_aluno);
      res.status(200).json(eventos);
    } catch (err) {
      res.status(500).send("Erro ao buscar eventos: " + err.message);
    }
  },

  listarEventosPorPsicologo: async (req, res) => {
    const { matricula_psicologo } = req.params;
    try {
      const eventos = await PsicoCronogramaModel.getEventosByPsicologo(matricula_psicologo);
      res.status(200).json(eventos);
    } catch (err) {
      res.status(500).send("Erro ao buscar eventos: " + err.message);
    }
  },

  listarConsultasPorAluno: async (req, res) => {
    const { matricula } = req.params;
    try {
      const datasConsultas = await PsicoCronogramaModel.getDistinctConsultasByAluno(matricula);
      res.status(200).json(datasConsultas);
    } catch (err) {
      res.status(500).send("Erro ao buscar consultas: " + err.message);
    }
  }
};

module.exports = PsicoCronogramaController;
