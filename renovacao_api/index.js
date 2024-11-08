// index.js
const express = require("express");
const cors = require("cors");
const db = require("./db/db");
require("./db/dbInitial"); // Importa para criar/verificar tabelas
require("./db/dbTable");       // Importa para inserir dados iniciais
const router = require("./router/loginRouter");

const app = express();
app.use(express.json());
app.use(cors());
app.use("/", router);

const PORT = 3001;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
