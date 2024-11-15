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

const createTrilhasTable = `
  CREATE TABLE IF NOT EXISTS trilhas (
    id INT AUTO_INCREMENT PRIMARY KEY,
    titulo VARCHAR(255) NOT NULL,
    descricao TEXT,
    matricula_aluno VARCHAR(8) NOT NULL,
    FOREIGN KEY (matricula_aluno) REFERENCES usuarios(matricula) ON DELETE CASCADE
  );
`;

const createLinksTable = `
  CREATE TABLE IF NOT EXISTS links (
    id INT AUTO_INCREMENT PRIMARY KEY,
    url VARCHAR(255) NOT NULL,
    titulo VARCHAR(255) NOT NULL,
    descricao TEXT,
    trilha_id INT NOT NULL,
    FOREIGN KEY (trilha_id) REFERENCES trilhas(id) ON DELETE CASCADE
  );
`;

const createLinksAssistidosTable = `
  CREATE TABLE IF NOT EXISTS links_assistidos (
    id INT AUTO_INCREMENT PRIMARY KEY,
    link_id INT NOT NULL,
    matricula_aluno VARCHAR(8) NOT NULL,
    assistido BOOLEAN DEFAULT FALSE,
    FOREIGN KEY (link_id) REFERENCES links(id) ON DELETE CASCADE,
    FOREIGN KEY (matricula_aluno) REFERENCES usuarios(matricula) ON DELETE CASCADE
  );
`;

const createEventosTable = `
  CREATE TABLE IF NOT EXISTS eventos (
    id INT AUTO_INCREMENT PRIMARY KEY,
    data_evento DATE NOT NULL,
    matricula_aluno VARCHAR(8) NOT NULL,
    matricula_psicologo VARCHAR(8) NOT NULL,
    descricao TEXT NOT NULL,
    FOREIGN KEY (matricula_aluno) REFERENCES usuarios(matricula) ON DELETE CASCADE,
    FOREIGN KEY (matricula_psicologo) REFERENCES usuarios(matricula) ON DELETE CASCADE
  );
`;

// Função para verificar e criar tabelas
const dbTable = () => {
  // Criação da tabela 'usuarios'
  db.query(createUsersTable, (err) => {
    if (err) {
      console.error("Erro ao criar a tabela 'usuarios':", err);
      return;
    }
    console.log("Tabela 'usuarios' verificada/criada com sucesso.");

    // Criação da tabela 'trilhas'
    db.query(createTrilhasTable, (err) => {
      if (err) {
        console.error("Erro ao criar a tabela 'trilhas':", err);
        return;
      }
      console.log("Tabela 'trilhas' verificada/criada com sucesso.");

      // Criação da tabela 'links'
      db.query(createLinksTable, (err) => {
        if (err) {
          console.error("Erro ao criar a tabela 'links':", err);
          return;
        }
        console.log("Tabela 'links' verificada/criada com sucesso.");

        // Criação da tabela 'links_assistidos'
        db.query(createLinksAssistidosTable, (err) => {
          if (err) {
            console.error("Erro ao criar a tabela 'links_assistidos':", err);
            return;
          }
          console.log("Tabela 'links_assistidos' verificada/criada com sucesso.");

          // Criação da tabela 'eventos'
          db.query(createEventosTable, (err) => {
            if (err) {
              console.error("Erro ao criar a tabela 'eventos':", err);
              return;
            }
            console.log("Tabela 'eventos' verificada/criada com sucesso.");
          });
        });
      });
    });
  });
};

// Executa a função de criação ao importar o arquivo
dbTable();

module.exports = dbTable;
