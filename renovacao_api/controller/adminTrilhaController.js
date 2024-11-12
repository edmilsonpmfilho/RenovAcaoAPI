// controllers/AdminTrilhaController.js
const AdminTrilhaModel = require('../model/adminTrilhaModel');

const AdminTrilhaController = {
  getAll: async (req, res) => {
    try {
      const trilhas = await AdminTrilhaModel.getAll();
      res.json(trilhas);
    } catch (error) {
      res.status(500).send({ error: 'Erro ao buscar trilhas.' });
    }
  },

  getById: async (req, res) => {
    try {
      const { id } = req.params;
      const trilha = await AdminTrilhaModel.getById(id);
      if (!trilha) {
        return res.status(404).send({ msg: 'Trilha não encontrada.' });
      }
      res.json(trilha);
    } catch (error) {
      res.status(500).send({ error: 'Erro ao buscar trilha.' });
    }
  },

  create: async (req, res) => {
    try {
      const { titulo, descricao, matricula_aluno } = req.body;
      const trilha = await AdminTrilhaModel.create({ titulo, descricao, matricula_aluno });
      res.status(201).send({ msg: 'Trilha criada com sucesso', trilhaId: trilha.id });
    } catch (error) {
      res.status(500).send({ error: 'Erro ao criar trilha.' });
    }
  },

  update: async (req, res) => {
    try {
      const { id } = req.params;
      const { titulo, descricao } = req.body;
      const result = await AdminTrilhaModel.update(id, { titulo, descricao });
      if (result.affectedRows === 0) {
        return res.status(404).send({ msg: 'Trilha não encontrada.' });
      }
      res.send({ msg: 'Trilha atualizada com sucesso' });
    } catch (error) {
      res.status(500).send({ error: 'Erro ao atualizar trilha.' });
    }
  },

  delete: async (req, res) => {
    try {
      const { id } = req.params;
      const result = await AdminTrilhaModel.delete(id);
      if (result.affectedRows === 0) {
        return res.status(404).send({ msg: 'Trilha não encontrada.' });
      }
      res.send({ msg: 'Trilha deletada com sucesso' });
    } catch (error) {
      res.status(500).send({ error: 'Erro ao deletar trilha.' });
    }
  }
};

module.exports = AdminTrilhaController;
