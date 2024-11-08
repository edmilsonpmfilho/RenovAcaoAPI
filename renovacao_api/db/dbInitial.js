
const db = require("./db");
const bcrypt = require("bcrypt");
const saltRounds = 10;

const insertUser = (name, email, password, matricula, tipoUsuario) => {
  bcrypt.hash(password, saltRounds, (error, hash) => {
    if (error) {
      console.error("Erro ao criptografar senha:", error);
      return;
    }
    db.query(
      `INSERT INTO usuarios (nome, email, senha, matricula, tipoUsuario) VALUES (?, ?, ?, ?, ?)`,
      [name, email, hash, matricula, tipoUsuario],
      (err) => {
        if (err) {
          console.error(`Erro ao inserir o usuário '${name}':`, err);
        } else {
          console.log(`Usuário '${name}' inserido com sucesso`);
        }
      }
    );
  });
};

// Insere os usuários iniciais
const dbInitial = () => {
  insertUser("Admin", "admin@gmail.com", "admin1234", "11111111", "administrador");
  insertUser("Aluno", "aluno@gmail.com", "aluno1234", "22222222", "aluno");
  insertUser("Psico", "psico@gmail.com", "psico1234", "33333333", "psicologo");
};

// Executa a inserção de dados iniciais
dbInitial();
