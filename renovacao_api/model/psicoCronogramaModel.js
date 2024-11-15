const db = require('../db/db');

const PsicoCronogramaModel = {
  getEventosByPsicologoAndAluno: (matriculaPsicologo, matriculaAluno) => {
    return new Promise((resolve, reject) => {
      db.query(
        "SELECT * FROM eventos WHERE matricula_psicologo = ? AND matricula_aluno = ?",
        [matriculaPsicologo, matriculaAluno],
        (err, result) => {
          if (err) {
            reject(err);
          } else {
            resolve(result);
          }
        }
      );
    });
  },

  getEventosByPsicologo: (matriculaPsicologo) => {
    return new Promise((resolve, reject) => {
      db.query(
        "SELECT * FROM eventos WHERE matricula_psicologo = ?",
        [matriculaPsicologo],
        (err, result) => {
          if (err) {
            reject(err);
          } else {
            resolve(result);
          }
        }
      );
    });
  },

  getDistinctConsultasByAluno: (matricula) => {
    return new Promise((resolve, reject) => {
      db.query(
        "SELECT DISTINCT data_consulta FROM avaliacoes WHERE matricula_aluno = ?",
        [matricula],
        (err, result) => {
          if (err) {
            reject(err);
          } else {
            resolve(result.map(r => r.data_consulta));
          }
        }
      );
    });
  }
};

module.exports = PsicoCronogramaModel;
