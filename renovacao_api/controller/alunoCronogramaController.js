// controllers/AlunoCronogramaController.js
const AlunoCronogramaModel = require('../model/alunoCronogramaModel');

const AlunoCronogramaController = {
  getEventos: (req, res) => {
    const { matricula_psicologo, matricula_aluno } = req.query;

    if (!matricula_psicologo || !matricula_aluno) {
      return res.status(400).json({ message: "Parâmetros obrigatórios ausentes." });
    }

    AlunoCronogramaModel.getEventosPorMatriculas(matricula_psicologo, matricula_aluno, (err, eventos) => {
      if (err) {
        res.status(500).json({ error: "Erro ao buscar eventos.", details: err });
      } else {
        res.json(eventos);
      }
    });
  },

  getEventosPorAluno: (req, res) => {
    const { matricula_aluno } = req.params;

    if (!matricula_aluno) {
      return res.status(400).json({ message: "Matrícula do aluno é obrigatória." });
    }

    AlunoCronogramaModel.getEventosPorAluno(matricula_aluno, (err, eventos) => {
      if (err) {
        res.status(500).json({ error: "Erro ao buscar eventos.", details: err });
      } else {
        res.json(eventos);
      }
    });
  },

  getDatasDistintas: (req, res) => {
    const { matricula } = req.params;

    if (!matricula) {
      return res.status(400).json({ message: "Matrícula é obrigatória." });
    }

    AlunoCronogramaModel.getDatasDistintasPorMatricula(matricula, (err, datas) => {
      if (err) {
        res.status(500).json({ error: "Erro ao buscar datas distintas.", details: err });
      } else {
        res.json(datas);
      }
    });
  }
};

module.exports = AlunoCronogramaController;
