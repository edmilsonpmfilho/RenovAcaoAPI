// index.js
const express = require("express");
const cors = require("cors");
const db = require("./db/db");
require("./db/dbInitial"); // Importa para criar/verificar tabelas
require("./db/dbTable");       // Importa para inserir dados iniciais
const router = require("./router/loginRouter"); //router login
const adminCadastroRouter = require("./router/adminCadastroRouter"); //router admincadastro
const cadastroRouter = require("./router/cadastroRouter"); //router cadastro
const trocarSenhaRouter = require("./router/trocarSenhaRouter");
const adminTrilhaRouter = require("./router/adminTrilhaRouter"); //router adicionar trilha admin
const alunoTrilhaRouter = require("./router/alunoTrilhaRouter"); //router receber trilha aluno
const adminCronogramaRouter = require("./router/adminCronogramaRouter"); //router trocar senha
const alunoCronogramaRouter = require("./router/alunoCronogramaRouter"); //router trocar senha
const psicoCronogramaRouter = require("./router/psicoCronogramaRouter"); //router trocar senha
const alunoMensagemRouter = require("./router/alunoMensagemRouter"); //router trocar senha
const mensagemRouter = require("./router/mensagemRouter"); //router trocar senha

const app = express();
app.use(express.json());
app.use(cors());
app.use("/", router);//router login
app.use("/", adminCadastroRouter); // Prefixo /api para as rotas de usuário / admincadastro
app.use("/api", cadastroRouter); // Prefixo /api para as rotas de usuário
app.use("/", trocarSenhaRouter);// prefixo do trocar senha
app.use("/", adminTrilhaRouter);// adicionar trilha admin
app.use("/", alunoTrilhaRouter);// adicionar trilha aluno
app.use("/", adminCronogramaRouter);// adicionar cronograma admin
app.use("/", alunoCronogramaRouter);// adicionar cronograma admin
app.use("/", psicoCronogramaRouter);// adicionar cronograma admin
app.use("/", alunoMensagemRouter);// mensagem
app.use("/", mensagemRouter);// mensagem



const PORT = 3001;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
