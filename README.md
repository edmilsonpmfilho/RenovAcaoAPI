
# <h1 align="center">RenovAção</h1>

<p align="center">
  <img src="src\componentes\img\logoreadme.png" alt="Logo do Pojeto">
</p>

O projeto RenovAção tem como público-alvo os agressores de ciberbullying e as Instituições de Ensino Superior (IES). É uma plataforma que visa oferecer suporte tanto aos agressores quanto às instituições, fornecendo ferramentas para conscientização, prevenção e reabilitação do comportamento agressivo, além de oferecer suporte psicológico e recursos educativos.

### Propósito da Plataforma RenovAção:

A plataforma RenovAção tem como objetivo primordial oferecer um ambiente seguro e de apoio para indivíduos envolvidos em casos de ciberbullying. Suas principais áreas de atuação incluem:

- **Agenda de cumprimento de cargas horárias:** O administrador pode cadastrar atividades educativas e de reabilitação para os agressores, visando promover a reflexão e mudança de comportamento.

- **Suporte psicológico:** A plataforma proporciona acesso a sessões de apoio psicológico tanto para os agressores quanto para as vítimas de ciberbullying. Isso inclui acompanhamento individualizado e orientações para lidar com os desafios emocionais relacionados ao comportamento agressivo e ao trauma causado pelo ciberbullying.

- **Recursos educativos:** Além das intervenções diretas, a RenovAção disponibiliza uma trilha educativa com vídeos, artigos e atividades interativas. Esses recursos visam fornecer conhecimento e habilidades para prevenir o ciberbullying e promover relações saudáveis online.

Essas iniciativas da RenovAção não apenas visam a recuperação dos agressores, mas também buscam capacitar as Instituições de Ensino Superior a lidar com casos de ciberbullying e a promover uma cultura de respeito e inclusão digital em seus ambientes online.

## Apêndice

Este apêndice fornece uma visão mais detalhada do projeto de combate ao ciberbullying, com foco nos públicos-alvo e funcionalidades principais.

## Público-Alvo
O projeto visa atender principalmente dois grupos:

Agressor: Estudantes que se envolvem em comportamentos de ciberbullying, conscientizando-os sobre as consequências de suas ações e fornecendo recursos educativos para promover uma mudança de comportamento positiva.

Instituições de Ensino Superior (IES): Profissionais do Núcleo de Apoio a Estudante(NAE) das instituições de ensino superior, fornecendo ferramentas para prevenir e lidar com casos de ciberbullying entre os alunos, além de promover um ambiente online seguro e inclusivo.

## Funcionalidades

### Perfil do Aluno

Trilha Educativa: Oferece uma série de vídeos educativos que abordam temas relacionados ao ciberbullying, suas consequências e estratégias de prevenção.

Agenda: Permite que os alunos visualizem um cronograma com datas importantes, incluindo consultas psicológicas e outras atividades relevantes.

Mensagens: Fornece um meio de comunicação seguro e privado entre os alunos e outros perfis no sistema, como administradores e psicólogos.

### Perfil do Administrador

Cronograma: Permite ao administrador criar e gerenciar um calendário de eventos, incluindo consultas, workshops e outras atividades relacionadas à prevenção do ciberbullying.

Usuários: Permite ao administrador visualizar os usuários existentes no sistema e cadastrar novos usuários, incluindo alunos, psicólogos e outros administradores, atribuindo-lhes os papéis apropriados e configurando suas permissões de acesso.


Mensagens: Permite que o administrador se comunique diretamente com os alunos e psicólogos por meio de mensagens internas.

### Perfil do Psicólogo

Agenda: Permite ao psicólogo visualizar e gerenciar suas consultas psicológicas agendadas com os alunos.

Acompanhamento: Oferece ferramentas para o psicólogo acompanhar o progresso dos alunos, avaliar seu bem-estar emocional e oferecer suporte individualizado conforme necessário.

Relatórios: Oferece acesso a relatórios detalhados sobre o acompanhamento de casos de ciberbullying, avaliação dos atribuída pelos psicólogos e outras métricas relevantes.

Mensagens: Permite que o psicólogo se comunique diretamente com os alunos e administrador por meio de mensagens seguras e confidenciais.

## Pré-requisitos

Para executar e desenvolver este projeto, certifique-se de atender aos seguintes requisitos:

* Sistema Operacional: Pode ser utilizado em `<Windows / Linux / Mac>`

* Node.js e npm: Certifique-se de ter o Node.js instalado em sua máquina. O npm (Node Package Manager) é instalado automaticamente com o Node.js.
Node.js: `>= 18.0.0` e `<= 20.13.1>`
npm: Versão incluída no Node.js

* Editor de Código: Você pode usar qualquer editor de código de sua preferência.

## Configuração e execução do projeto

Para instalar o RenovAção, siga as etapas descritas abaixo:

### Clone o projeto

```bash
  git clone https://github.com/anajuliaflx/projeto-renovacao.git
```

Em seguida acesse o projeto pela IDE de sua preferência

```bash
  code .
```

### Instalação de dependências

Realize a instalação das dependências descritas abaixo no diretório principal

```bash
  npm install react-router-dom --save
```

```bash
  npm install formik yup axios dotenv moment
```

```bash
  npm install @mui/icons-material @mui/material @emotion/styled @emotion/react
```

```bash
  npm install react-big-calendar react-modal
```

Instale as dependências no diretório functions

```bash
  npm install bcrypt express mysql2 nodemon cors
```
```bash
  npm install dotenv
```
```bash
  npm install express-session
```
```bash
  npm install joi
```

### Configure o Banco de Dados

Edite a configuração do banco de dados, de acordo com seu ambiente. Abra o arquivo [db.js](renovacao_api\db\db.js) presente na pasta `renovacao_api` e encontre a seção onde a conexão com o banco de dados é definida.

    ```javascript
    const db = mysql.createConnection({
      host: "",
      port: "",
      user: "",
      password: "",
      database: "",
    });
    ```

Certifique-se de fornecer as informações corretas do seu banco de dados, incluindo host, porta, nome de usuário, senha e nome do banco de dados.

### Configure a URL base do projeto

Edite a URL base a ser utilizada na [apiConfig.js](src\componentes\api\apiConfig.js).

## Execução

Para iniciar a aplicação, siga estas etapas:

Na pasta do servidor(renovacao_api) execute no terminal:
```bash
  npm run dev
```
E em seguida pasta principal do projeto execute no terminal:
```bash
  npm start
```

## Documentação do projeto

### Documento

[Projeto RenovAção]

### Cores

| Cor               | Hexadecimal                                                |
| ----------------- | ---------------------------------------------------------------- |
| Branco       | ![#FFFFFF](https://via.placeholder.com/10/FFFFFF?text=+) #FFFFFF |
| Preto       | ![#000000](https://via.placeholder.com/10/000000?text=+) #000000 |
| Ciano forte       | ![#0395BA](https://via.placeholder.com/10/0395BA?text=+) #0395BA |
| Cinza escuro       | ![#848484](https://via.placeholder.com/10/848484?text=+) #848484 |
| Azul ligeiramente dessaturado       | ![#8390C8](https://via.placeholder.com/10/8390C8?text=+) #8390C8 |

## Documentação da API

### URL Base
A URL base para todos os endpoints é

```https
    http://localhost:3001
```

### Cadastro de usuário
```https
  POST /admincadastro
```
Cria um novo usuário no banco de dados.

#### Corpo da requisição
| Parâmetro   | Tipo       | Descrição                           |
| :---------- | :--------- | :---------------------------------- |
| `nome` | `string` | **Obrigatório**. O nome do usuário. |
| `email` | `string` | **Obrigatório**. O email do usuário. |
| `senha` | `string` | **Obrigatório**. A senha do usuário. |
| `matricula` | `string` | **Obrigatório**. A matrícula do usuário. |
| `tipoUsuario` | `string` | **Obrigatório**. O tipo do usuário. |

#### Respostas
- `200 OK`: Usuário cadastrado com sucesso.
  ```json
  {
  "msg": "Usuário cadastrado com sucesso"
  }

- `400 Bad Request`: Email ou matrícula já cadastrados.
  ```json
  {
    "msg": "Email ou matrícula já cadastrados"
  }

- `500 Internal Server Error`: Ocorreu um erro.
  ```json
  {
    "error": "Mensagem de erro"
  }

### Login de usuário
```https
  POST /login
```
Autentica um usuário.

#### Corpo da requisição
| Parâmetro   | Tipo       | Descrição                           |
| :---------- | :--------- | :---------------------------------- |
| `email` | `string` | **Obrigatório**. O email do usuário. |
| `senha` | `string` | **Obrigatório**. A senha do usuário. |

#### Respostas
- `200 OK`: Usuário logado com sucesso.
  ```json
  {
    "msg": "Usuário logado",
    "tipoUsuario": "userType",
    "matricula": "matricula"
  }

- `401 Unauthorized`: Senha incorreta.
  ```json
  {
    "msg": "Senha incorreta"
  }

- `404 Not Found`: Usuário não registrado.
  ```json
  {
    "msg": "Usuário não registrado!"
  }

- `500 Internal Server Error`: Ocorreu um erro.
  ```json
  {
    "error": "Mensagem de erro"
  }

### Listar usuários
```https
  GET /adminusuario
```
Lista os usuários com paginação.

#### Parâmetros da query
| Parâmetro   | Tipo       | Descrição                           |
| :---------- | :--------- | :---------------------------------- |
| `page` | `number` | **Opcional**. Número da página (default 1). |
| `limit` | `number` | **Opcional**. Limite de usuários por página (default 10). |

#### Respostas
- `200 OK`: Lista de usuários com paginação.
  ```json
  {
    "users": [/* lista de usuários */],
    "totalPages": 5
  }

- `500 Internal Server Error`: Ocorreu um erro.
  ```json
  {
    "error": "Mensagem de erro"
  }

### Excluir usuário por ID
```https
  DELETE /adminusuario/:id
```
Exclui um usuário pelo ID.

#### Parâmetros da URL
| Parâmetro   | Tipo       | Descrição                           |
| :---------- | :--------- | :---------------------------------- |
| `id` | `number` | **Obrigatório**. O ID do usuário a ser excluído. | 

#### Respostas
- `200 OK`: Usuário excluído com sucesso.
  ```json
  {
  "msg": "Usuário excluído com sucesso"
  }

- `500 Internal Server Error`: Ocorreu um erro.
  ```json
  {
    "error": "Mensagem de erro"
  }

### Enviar mensagem
```https
  POST /mensagem
```
Envia uma mensagem.

#### Corpo da requisição
| Parâmetro   | Tipo       | Descrição                           |
| :---------- | :--------- | :---------------------------------- |
| `remetente_id` | `number` | **Obrigatório**. O ID do remetente. |
| `destinatario_tipo` | `string` | **Obrigatório**. O tipo de destinatário ('administrador' ou 'psicologo'). |
| `mensagem` | `string` | **Obrigatório**. O conteúdo da mensagem. |

#### Respostas
- `200 OK`: Mensagem enviada com sucesso.
  ```json
  {
  "msg": "Mensagem enviada com sucesso"
  }

- `400 Bad Request`: A mensagem não pode ter mais de 400 caracteres.
  ```json
  {
    "msg": "A mensagem não pode ter mais de 400 caracteres"
  }

- `500 Internal Server Error`: Ocorreu um erro.
  ```json
  {
    "error": "Mensagem de erro"
  }

### Obter usuário por matrícula
```https
  GET /adminusuario/:matricula
```
Cria um novo usuário no banco de dados.

#### Parâmetros da URL
| Parâmetro   | Tipo       | Descrição                           |
| :---------- | :--------- | :---------------------------------- |
| `matricula` | `string` | **Obrigatório**. A matrícula do usuário. |

#### Respostas
- `200 OK`: Retorna o ID do usuário.
  ```json
  {
    "id": 1
  }

- `404 Not Found`: Usuário não encontrado.
  ```json
  {
    "msg": "Usuário não encontrado"
  }

- `500 Internal Server Error`: Ocorreu um erro.
  ```json
  {
    "error": "Mensagem de erro"
  }

### Enviar resposta
```https
  POST /resposta/:tipoUsuario
```
Envia uma resposta a uma mensagem.

#### Parâmetro da URL
| Parâmetro   | Tipo       | Descrição                           |
| :---------- | :--------- | :---------------------------------- |
| `tipoUsuario` | `string` | **Obrigatório**. O tipo de usuário ('administrador' ou 'psicologo'). |

#### Corpo da requisição
| Parâmetro   | Tipo       | Descrição                           |
| :---------- | :--------- | :---------------------------------- |
| `mensagem_id` | `number` | **Obrigatório**. O ID da mensagem. |
| `resposta` | `string` | **Obrigatório**. O conteúdo da resposta. |
| `matricula` | `string` | **Obrigatório**. A matrícula do respondente. |

#### Respostas
- `200 OK`: Resposta enviada com sucesso.
  ```json
  {
  "msg": "Resposta enviada com sucesso",
  "data_resposta": "2023-05-15T13:45:30.000Z",
  "resposta": "Conteúdo da resposta"
  }

- `400 Bad Request`: Tipo de usuário inválido ou campos obrigatórios ausentes.
  ```json
  {
    "msg": "Tipo de usuário inválido"
  }

- `500 Internal Server Error`: Ocorreu um erro.
  ```json
  {
    "error": "Mensagem de erro"
  }

### Listar mensagens
```https
  GET /mensagens/:tipoUsuario
```
Lista as mensagens recebidas pelo tipo de usuário com paginação.

#### Parâmetro da URL
| Parâmetro   | Tipo       | Descrição                           |
| :---------- | :--------- | :---------------------------------- |
| `tipoUsuario` | `string` | **Obrigatório**. O tipo de usuário ('administrador' ou 'psicologo'). |

#### Corpo da requisição
| Parâmetro   | Tipo       | Descrição                           |
| :---------- | :--------- | :---------------------------------- |
| `page` | `number` | **Opcional**. Número da página (default 1). |
| `limit` | `number` | **Opcional**. Limite de mensagens por página (default 10). |

#### Respostas
- `200 OK`: Lista de mensagens com paginação.
  ```json
  {
  "messages": [/* lista de mensagens */],
  "totalPages": 5
  }

- `400 Bad Request`: Tipo de usuário inválido.
  ```json
  {
    "msg": "Tipo de usuário inválido"
  }

- `500 Internal Server Error`: Ocorreu um erro.
  ```json
  {
    "error": "Mensagem de erro"
  }

### Listar mensagens e respostas por aluno
```https
  GET /mensagens-respostas/:matricula
```
Envia uma resposta a uma mensagem.

#### Parâmetro da URL
| Parâmetro   | Tipo       | Descrição                           |
| :---------- | :--------- | :---------------------------------- |
| `matricula` | `string` | **Obrigatório**. A matrícula do aluno. |

#### Corpo da requisição
| Parâmetro   | Tipo       | Descrição                           |
| :---------- | :--------- | :---------------------------------- |
| `page` | `number` | **Opcional**. Número da página (default 1). |
| `limit` | `number` | **Opcional**. Limite de mensagens por página (default 10). |

#### Respostas
- `200 OK`: Lista de mensagens e respostas com paginação.
  ```json
  {
  "messagesAndAnswers": [/* lista de mensagens e respostas */],
  "totalPages": 5
  }

- `404 Not Found`: Usuário não encontrado.
  ```json
  {
    "msg": "Usuário não encontrado"
  }

- `500 Internal Server Error`: Ocorreu um erro.
  ```json
  {
    "error": "Mensagem de erro"
  }

### Adicionar evento
```https
  POST /adicionar-evento
```
Adiciona um novo evento ao sistema.

#### Corpo da requisição
| Parâmetro   | Tipo       | Descrição                           |
| :---------- | :--------- | :---------------------------------- |
| `data_evento` | `string` | **Obrigatório**. A data do evento. |
| `matricula_aluno` | `string` | **Obrigatório**. A matrícula do aluno. |
| `matricula_psicologo` | `string` | **Obrigatório**. A matrícula do psicólogo. |
| `descricao` | `string` | **Obrigatório**. A descrição do evento. |

#### Respostas
- `200 OK`: Evento adicionado com sucesso.
  ```json
  {
  "msg": "Evento adicionado com sucesso"
  }

- `400 Bad Request`: Matrícula inválida ou campos obrigatórios ausentes.
  ```json
  {
    "msg": "Matrícula do aluno e do psicólogo deve ter exatamente 8 caracteres"
  }

- `500 Internal Server Error`: Ocorreu um erro ao adicionar o evento.
  ```json
  {
    "msg": "Erro ao adicionar evento"
  }

### Listar eventos
```https
  GET /eventos
```
Lista todos os eventos.

#### Parâmetro da URL
| Parâmetro   | Tipo       | Descrição                           |
| :---------- | :--------- | :---------------------------------- |
| `matricula_psicologo` | `string` | **Opcional**. A matrícula do psicólogo. |
| `matricula_aluno` | `string` | **Opcional**. A matrícula do aluno. |

#### Respostas
- `200 OK`: Lista de eventos.
  ```json
  {
    [
      {
      "id": 1,
      "data_evento": "2023-05-15",
      "matricula_aluno": "12345678",
      "matricula_psicologo": "87654321",
      "descricao": "Consulta psicológica"
      }
    ]
  }

- `500 Internal Server Error`: Ocorreu um erro ao buscar os eventos.
  ```json
  {
    "msg": "Erro ao buscar eventos"
  }

### Listar eventos por aluno
```https
  GET /eventos/:matricula_aluno
```
Lista eventos associados a um aluno específico.

#### Parâmetro da URL
| Parâmetro   | Tipo       | Descrição                           |
| :---------- | :--------- | :---------------------------------- |
| `matricula_aluno` | `string` | **Obrigatório**. A matrícula do aluno. |

#### Respostas
- `200 OK`: Lista de eventos do aluno.
  ```json
  {
    [
      {
      "id": 1,
      "data_evento": "2023-05-15",
      "matricula_aluno": "12345678",
      "matricula_psicologo": "87654321",
      "descricao": "Consulta psicológica"
      }
    ]
  }

- `500 Internal Server Error`: Ocorreu um erro ao buscar os eventos.
  ```json
  {
    "msg": "Erro ao buscar eventos"
  }

### Listar eventos por psicólogo
```https
  GET /eventos-psicologo/:matricula_psicologo
```
Lista eventos associados a um psicólogo específico.

#### Parâmetro da URL
| Parâmetro   | Tipo       | Descrição                           |
| :---------- | :--------- | :---------------------------------- |
| `matricula_psicologo` | `string` | **Obrigatório**. A matrícula do psicólogo. |

#### Respostas
- `200 OK`: Lista de eventos do aluno.
  ```json
  {
    [
      {
      "id": 1,
      "data_evento": "2023-05-15",
      "matricula_aluno": "12345678",
      "matricula_psicologo": "87654321",
      "descricao": "Consulta psicológica"
      }
    ]
  }

- `500 Internal Server Error`: Ocorreu um erro ao buscar os eventos.
  ```json
  {
    "msg": "Erro ao buscar eventos"
  }

### Adicionar trilha
```https
  POST /adicionar-trilha
```
Adiciona uma nova trilha ao sistema.

#### Corpo da requisição
| Parâmetro   | Tipo       | Descrição                           |
| :---------- | :--------- | :---------------------------------- |
| `titulo` | `string` | **Obrigatório**. O título da trilha. |
| `descricao` | `string` | **Opcional**. A descrição da trilha. |
| `matricula_aluno` | `string` | **Obrigatório**. A matrícula do aluno. |

#### Respostas
- `200 OK`: Trilha adicionada com sucesso.
  ```json
  {
  "msg": "Trilha adicionada com sucesso",
  "trilhaId": 1
  }

- `400 Bad Request`: Matrícula inválida.
  ```json
  {
    "msg": "A matrícula do aluno deve ter exatamente 8 caracteres"
  }

- `500 Internal Server Error`: Ocorreu um erro ao adicionar a trilha.
  ```json
  {
    "error": "Erro ao adicionar trilha"
  }

### Adicionar link a uma trilha
```https
  POST /adicionar-link
```
Adiciona um novo link a uma trilha existente.

#### Corpo da requisição
| Parâmetro   | Tipo       | Descrição                           |
| :---------- | :--------- | :---------------------------------- |
| `url` | `string` | **Obrigatório**. A URL do link. |
| `titulo` | `string` | **Obrigatório**. O título do link. |
| `descricao` | `string` | **Opcional**. A descrição do link. |
| `trilha_id` | `number` | **Obrigatório**. O ID da trilha. |

#### Respostas
- `200 OK`: Link adicionado com sucesso.
  ```json
  {
  "msg": "Link adicionado com sucesso"
  }

- `500 Internal Server Error`: Ocorreu um erro ao adicionar o link.
  ```json
  {
    "msg": "Erro ao adicionar link"
  }

### Marcar link como assistido
```https
  POST /marcar-assistido
```
Marca um link como assistido por um aluno.

#### Corpo da requisição
| Parâmetro   | Tipo       | Descrição                           |
| :---------- | :--------- | :---------------------------------- |
| `link_id` | `number` | **Obrigatório**. O ID do link. |
| `matricula_aluno` | `string` | **Obrigatório**. A matrícula do aluno. |

#### Respostas
- `200 OK`: Link marcado como assistido.
  ```json
  {
   "msg": "Link marcado como assistido"
  }

- `400 Bad Request`: Matrícula inválida.
  ```json
  {
    "msg": "A matrícula do aluno deve ter exatamente 8 caracteres"
  }

- `500 Internal Server Error`: Ocorreu um erro ao marcar o link como assistido.
  ```json
  {
    "msg": "Erro ao marcar link como assistido"
  }

### Listar trilhas por aluno
```https
  GET /trilhas/:matricula_aluno
```
Lista todas as trilhas associadas a um aluno específico.

#### Parâmetro da URL
| Parâmetro   | Tipo       | Descrição                           |
| :---------- | :--------- | :---------------------------------- |
| `matricula_aluno` | `string` | **Obrigatório**. A matrícula do aluno. |

#### Respostas
- `200 OK`: Lista de eventos do aluno.
  ```json
  [
    {
      "id": 1,
      "titulo": "Trilha de Ciberbullying",
      "descricao": "Trilha para conscientização sobre ciberbullying",
      "matricula_aluno": "12345678"
    }
  ]

- `400 Bad Request`: Matrícula inválida.
  ```json
  {
    "msg": "A matrícula do aluno deve ter exatamente 8 caracteres"
  }

- `500 Internal Server Error`: Ocorreu um erro ao buscar as trilhas.
  ```json
  {
    "msg": "Erro ao buscar trilhas"
  }

### Listar links de uma trilha
```https
  GET /links/:trilha_id
```
Lista todos os links associados a uma trilha específica.

#### Parâmetro da URL
| Parâmetro   | Tipo       | Descrição                           |
| :---------- | :--------- | :---------------------------------- |
| `trilha_id` | `number` | **Obrigatório**. O ID da trilha. |

#### Corpo da requisição
| Parâmetro   | Tipo       | Descrição                           |
| :---------- | :--------- | :---------------------------------- |
| `matricula_aluno` | `string` | **Opcional**. A matrícula do aluno. |

#### Respostas
- `200 OK`: Lista de links da trilha.
  ```json
  [
    {
      "id": 1,
      "url": "https://example.com",
      "titulo": "Vídeo sobre Ciberbullying",
      "descricao": "Descrição do vídeo",
      "trilha_id": 1,
      "assistido": true
    }
  ]

- `500 Internal Server Error`: Ocorreu um erro ao buscar os links.
  ```json
  {
    "msg": "Erro ao buscar links"
  }

### Listar notificações
```https
  GET /notificacoes
```
Lista todas as notificações do sistema.

#### Respostas
- `200 OK`: Lista de notificações.
  ```json
  [
    {
      "id": 1,
      "mensagem": "O aluno concluiu a trilha.",
      "matricula_aluno": "12345678",
      "titulo_trilha": "Trilha de Ciberbullying",
      "data_notificacao": "2023-05-15T13:45:30.000Z"
    }
  ]

- `500 Internal Server Error`: Ocorreu um erro ao buscar as notificações.
  ```json
  {
    "msg": "Erro ao buscar notificações"
  }

### Adicionar uma notificação
```https
  POST /adicionar-notificacao
```
Adiciona uma nova notificação ao sistema.

#### Corpo da requisição
| Parâmetro   | Tipo       | Descrição                           |
| :---------- | :--------- | :---------------------------------- |
| `mensagem` | `string` | **Obrigatório**. A mensagem da notificação. |
| `matricula_aluno` | `string` | **Obrigatório**. A matrícula do aluno. |
| `titulo_trilha` | `string` | **Obrigatório**. O título da trilha. |

#### Respostas
- `200 OK`: Notificação adicionada com sucesso.
  ```json
  {
  "msg": "Notificação adicionada com sucesso"
  }

- `500 Internal Server Error`: Ocorreu um erro ao adicionar a notificação.
  ```json
  {
     "msg": "Erro ao adicionar notificação"
  }

### Salvar avaliação
```https
  POST /avaliacao
```
Salva uma nova avaliação para um aluno.

#### Corpo da requisição
| Parâmetro   | Tipo       | Descrição                           |
| :---------- | :--------- | :---------------------------------- |
| `matricula_aluno` | `string` | **Obrigatório**. A matrícula do aluno. |
| `matricula_psicologo` | `string` | **Obrigatório**. A matrícula do psicólogo. |
| `data_consulta` | `string` | **Obrigatório**. A data da consulta. |
| `comportamento` | `string` | **Obrigatório**. O comportamento do aluno. |
| `expressao_sentimentos` | `boolean` | **Obrigatório**. Expressão de sentimentos. |
| `dificuldades_expressao` | `string` | **Opcional**. Dificuldades de expressão. |
| `reconhecimento_impacto` | `boolean` | **Obrigatório**. Reconhecimento do impacto. |
| `explicacao_impacto` | `string` | **Opcional**. Explicação do impacto. |
| `arrependimento` | `boolean` | **Obrigatório**. Arrependimento. |
| `forma_arrependimento` | `string` | **Opcional**. Forma de arrependimento |
| `identificacao_motivo` | `boolean` | **Obrigatório**. Identificação do motivo. |
| `explicacao_motivo` | `string` | **Opcional**. Explicação do motivo. |
| `estrategias` | `string` | **Obrigatório**. Estratégias adotadas. |
| `descricao_estrategias` | `string` | **Opcional**. Descrição das estratégias. |
| `metas` | `string` | **Obrigatório**. Metas estabelecidas. |
| `descricao_metas` | `string` | **Opcional**. Descrição das metas. |
| `progresso_metas` | `string` | **Obrigatório**. Progresso das metas. |
| `detalhes_progresso` | `string` | **Opcional**. Detalhes do progresso. |
| `avaliacao_geral` | `string` | **Obrigatório**. Avaliação geral. |
| `comentarios` | `string` | **Opcional**. Comentários adicionais. |


#### Respostas
- `200 OK`: Avaliação salva com sucesso.
  ```json
  {
  "msg": "Avaliação salva com sucesso"
  }

- `500 Internal Server Error`: Ocorreu um erro ao salvar a avaliação.
  ```json
  {
    "msg": "Erro ao salvar avaliação"
  }

### Obter avaliações por aluno
```https
   GET /avaliacoes/:matricula_aluno
```
Lista todas as avaliações associadas a um aluno específico.

#### Parâmetro da URL
| Parâmetro   | Tipo       | Descrição                           |
| :---------- | :--------- | :---------------------------------- |
| `matricula_aluno` | `string` | **Obrigatório**. A matrícula do aluno. |

#### Respostas
- `200 OK`: Lista de avaliações do aluno.
  ```json
  [
    {
    "id": 1,
    "matricula_aluno": "12345678",
    "matricula_psicologo": "87654321",
    "data_consulta": "2023-05-15",
    "comportamento": "Cooperativo",
    "expressao_sentimentos": true,
    "dificuldades_expressao": "Nenhuma",
    "reconhecimento_impacto": true,
    "explicacao_impacto": "Compreendeu o impacto",
    "arrependimento": true,
    "forma_arrependimento": "Pediu desculpas",
    "identificacao_motivo": true,
    "explicacao_motivo": "Entendeu os motivos",
    "estrategias": "Aumentar a comunicação",
    "descricao_estrategias": "Participar de sessões de grupo",
    "metas": "Melhorar a comunicação",
    "descricao_metas": "Participar de workshops",
    "progresso_metas": "Em progresso",
    "detalhes_progresso": "Está se esforçando",
    "avaliacao_geral": "Satisfatório",
    "comentarios": "Está mostrando progresso"
    }
  ]

- `500 Internal Server Error`: Ocorreu um erro ao buscar as avaliações
  ```json
  {
    "msg": "Erro ao buscar avaliações"
  }

### Buscar avaliações por data e aluno
```https
   GET /avaliacoes-datas/:matricula
```
Lista todas as datas de avaliações associadas a um aluno específico.

#### Parâmetro da URL
| Parâmetro   | Tipo       | Descrição                           |
| :---------- | :--------- | :---------------------------------- |
| `matricula_aluno` | `string` | **Obrigatório**. A matrícula do aluno. |

#### Respostas
- `200 OK`: Lista de datas de avaliações do aluno.
  ```json
  [
    "2023-05-15",
    "2023-06-20"
  ]

- `500 Internal Server Error`: Ocorreu um erro ao buscar as datas de avaliações.
  ```json
  {
    "msg": "Erro ao buscar datas de avaliações"
  }


## Contribuindo
Contribuições são sempre bem-vindas! Se você deseja melhorar este projeto, siga as etapas abaixo para garantir um fluxo organizado e eficiente:

Como contribuir com este projeto
Faça um fork do repositório
Crie uma cópia do repositório no seu GitHub clicando no botão Fork.

Clone o repositório forkado

No terminal, execute o seguinte comando (substitua seu-usuario pelo seu nome de usuário no GitHub):

 ```bash
  git clone https://github.com/edmilsonpmfilho/RenovAcaoAPI.git
 ```
Configure o repositório original como remoto

Adicione o repositório original como um remoto chamado upstream:

```bash
  git remote add upstream hhttps://github.com/edmilsonpmfilho/RenovAcaoAPI.git
```
Crie uma branch para suas mudanças

Sempre crie uma nova branch antes de começar a trabalhar. Use um nome descritivo para a branch:

```bash
  git checkout -b nome-da-sua-branch
```
- Exemplo:
```bash
  git checkout -b corrigir-documentacao
```
Faça as alterações necessárias
Realize as mudanças ou adicione novas funcionalidades. Certifique-se de testar tudo antes de continuar.

Commit das alterações
Após finalizar suas mudanças, faça o commit com uma mensagem clara e objetiva:

```bash
  git add .
  git commit -m "Descrição clara do que foi alterado"
```
Exemplo:

```bash
  git commit -m "Corrige erros de digitação no README"
```
Envie sua branch para o GitHub
Suba suas mudanças para o repositório forkado:

```bash
  git push origin nome-da-sua-branch
```
Crie um Pull Request (PR)

Acesse o repositório original no GitHub.

Clique em Compare & Pull Request.

Preencha os detalhes do PR, descrevendo suas alterações e o motivo delas.
Envie o PR para revisão.

- Dicas para contribuir
  - Certifique-se de seguir as diretrizes de estilo do código (se existirem).
  - Adicione comentários claros e testes, se aplicável.
  - Verifique se suas alterações não introduzem erros rodando os testes locais.
  - Como sincronizar seu fork

Para evitar conflitos, mantenha seu fork atualizado com o repositório original:

```bash
  git checkout main
  git pull upstream main
  git push origin main
```
Precisa de ajuda?
Se tiver dúvidas sobre como contribuir, entre em contato abrindo uma issue ou enviando uma mensagem para os mantenedores do projeto.


## Licença

Este projeto está licenciado sob a [Creative Commons CC0 1.0 Universal (CC0).](./LICENSE).  

Você pode compartilhar e adaptar este material para qualquer propósito, desde que:
- Atribua os créditos apropriados.
- Licencie suas alterações sob os mesmos termos.  

Leia o arquivo `LICENSE` para mais informações ou visite [Creative Commons CC0 1.0 Universal (CC0).](https://creativecommons.org/publicdomain/zero/1.0/deed.en).

## Imagens

<p align="center">
  <img src="src\componentes\img\Pastas do Projeto.png" alt="Pastas do Projeto">
</p>

<p align="center">
  <img src="src\componentes\img\Arquivos da Pasta Principal.png" alt="Arquivos da Pasta Principal">
</p>

<p align="center">
  <img src="src\componentes\img\Pastas do Page.png" alt="Pastas do Page">
</p>

<p align="center">
  <img src="src\componentes\img\Pastas e Arquivos Extras.png" alt="Pastas e Arquivos Extras">
</p>

<p align="center">
  <img src="src\componentes\img\Pastas do Servidor (renovacao_api).png" alt="Pastas do Servidor (renovacao_api)">
</p>

## Documentos
- [Ferramentas](docs\Definição de Ferramentas.pdf)
- [Fluxo de Trabalho do Git](docs\Fluxo de Trabalho do Git.pdf)
## Autores

- [@anajulia](https://github.com/anajuliaflx)
- [@arielmartins](https://github.com/martinsariel)
- [@edmilsonpessoa](https://github.com/edmilsonpmfilho)