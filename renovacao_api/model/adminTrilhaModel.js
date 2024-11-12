// models/AdminTrilhaModel.js
const db = require('../db/db'); // configuração do banco de dados

const AdminTrilhaModel = {
  getAll: () => {
    return new Promise((resolve, reject) => {
      db.query('SELECT * FROM trilhas', (err, results) => {
        if (err) {
          return reject(err);
        }
        resolve(results);
      });
    });
  },

  getById: (id) => {
    return new Promise((resolve, reject) => {
      db.query('SELECT * FROM trilhas WHERE id = ?', [id], (err, results) => {
        if (err) {
          return reject(err);
        }
        resolve(results[0]);
      });
    });
  },

  create: ({ titulo, descricao, matricula_aluno }) => {
    return new Promise((resolve, reject) => {
      db.query(
        'INSERT INTO trilhas (titulo, descricao, matricula_aluno) VALUES (?, ?, ?)',
        [titulo, descricao, matricula_aluno],
        (err, result) => {
          if (err) {
            return reject(err);
          }
          resolve({ id: result.insertId });
        }
      );
    });
  },

  update: (id, { titulo, descricao }) => {
    return new Promise((resolve, reject) => {
      db.query(
        'UPDATE trilhas SET titulo = ?, descricao = ? WHERE id = ?',
        [titulo, descricao, id],
        (err, result) => {
          if (err) {
            return reject(err);
          }
          resolve(result);
        }
      );
    });
  },

  delete: (id) => {
    return new Promise((resolve, reject) => {
      db.query('DELETE FROM trilhas WHERE id = ?', [id], (err, result) => {
        if (err) {
          return reject(err);
        }
        resolve(result);
      });
    });
  }
};

module.exports = AdminTrilhaModel;
