// models/AlunoCronogramaModel.js
const db = require('../db/db'); // Importa a configuração do banco de dados

const AlunoCronogramaModel = {
  getEventosPorMatriculas: (matriculaPsicologo, matriculaAluno, callback) => {
    const query = "SELECT * FROM eventos WHERE matricula_psicologo = ? AND matricula_aluno = ?";
    db.query(query, [matriculaPsicologo, matriculaAluno], (err, results) => {
      if (err) {
        callback(err, null);
      } else {
        callback(null, results);
      }
    });
  },

  getEventosPorAluno: (matriculaAluno, callback) => {
    const query = "SELECT * FROM eventos WHERE matricula_aluno = ?";
    db.query(query, [matriculaAluno], (err, results) => {
      if (err) {
        callback(err, null);
      } else {
        callback(null, results);
      }
    });
  },

  getDatasDistintasPorMatricula: (matricula, callback) => {
    const query = "SELECT DISTINCT data_consulta FROM avaliacoes WHERE matricula_aluno = ?";
    db.query(query, [matricula], (err, results) => {
      if (err) {
        callback(err, null);
      } else {
        // Retorna apenas as datas
        callback(null, results.map(r => r.data_consulta));
      }
    });
  }
};

module.exports = AlunoCronogramaModel;
