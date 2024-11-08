// migrations/createTables.js
const db = require("./db");

const createUsersTable = `
  CREATE TABLE IF NOT EXISTS usuarios (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(255) NOT NULL,
    email VARCHAR(255) UNIQUE NOT NULL,
    senha VARCHAR(255) NOT NULL,
    matricula VARCHAR(8) UNIQUE NOT NULL,
    tipoUsuario VARCHAR(50) NOT NULL,
    logged_in TINYINT(1) DEFAULT 0,
    last_login TIMESTAMP DEFAULT CURRENT_TIMESTAMP
  );
`;

// Função para criar as tabelas
const dbTable = () => {
  db.query(createUsersTable, (err) => {
    if (err) {
      console.error("Erro ao criar a tabela usuarios:", err);
    } else {
      console.log("Tabela 'usuarios' verificada/criada com sucesso.");
    }
  });
};

// Executa a função de criação ao importar o arquivo
dbTable();
