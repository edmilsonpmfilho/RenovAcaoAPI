
const db = require('../db/db');
const bcrypt = require('bcrypt');
const saltRounds = 10;

const cadastroModel = {
    // Cria um novo usuário
    createUser: (userData, callback) => {
        bcrypt.hash(userData.senha, saltRounds, (error, hash) => {
            if (error) return callback(error);
            
            const query = `
                INSERT INTO usuarios (nome, email, senha, matricula, tipoUsuario)
                VALUES (?, ?, ?, ?, ?)
            `;
            db.query(query, [userData.nome, userData.email, hash, userData.matricula, userData.tipoUsuario], callback);
        });
    },
    // Busca um usuário pelo email ou matrícula
    findByEmailOrMatricula: (email, matricula, callback) => {
        const query = `SELECT * FROM usuarios WHERE email = ? OR matricula = ?`;
        db.query(query, [email, matricula], callback);
    },
};

module.exports = cadastroModel;
