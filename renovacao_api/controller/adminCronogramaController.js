const AdminCronogramaModel = require('../model/adminCronogramaModel');
const Joi = require('joi');

// Schema de validação para os dados do evento
const eventoSchema = Joi.object({
  data_evento: Joi.date().required(),
  matricula_aluno: Joi.string().length(8).pattern(/^\d+$/).required(),
  matricula_psicologo: Joi.string().length(8).pattern(/^\d+$/).required(),
  descricao: Joi.string().required()
});

const AdminCronogramaController = {
  adicionarEvento: async (req, res) => {
    const { data_evento, matricula_aluno, matricula_psicologo, descricao } = req.body;

    // Validação dos dados de entrada
    const { error } = eventoSchema.validate({ data_evento, matricula_aluno, matricula_psicologo, descricao });
    if (error) {
      return res.status(400).send({ msg: error.details[0].message });
    }

    try {
      await AdminCronogramaModel.adicionarEvento(data_evento, matricula_aluno, matricula_psicologo, descricao);
      res.send({ msg: "Evento adicionado com sucesso" });
    } catch (err) {
      console.error("Erro ao adicionar evento:", err);
      res.status(500).send({ msg: "Erro ao adicionar evento" });
    }
  },

  buscarEventos: async (req, res) => {
    const { matricula_psicologo, matricula_aluno } = req.query;

    if (!matricula_psicologo || !matricula_aluno) {
      return res.status(400).send({ msg: "Matrícula do aluno e do psicólogo são obrigatórias" });
    }

    try {
      const eventos = await AdminCronogramaModel.buscarEventos(matricula_psicologo, matricula_aluno);
      res.send(eventos);
    } catch (err) {
      console.error("Erro ao buscar eventos:", err);
      res.status(500).send({ msg: "Erro ao buscar eventos" });
    }
  }
};

module.exports = AdminCronogramaController;
