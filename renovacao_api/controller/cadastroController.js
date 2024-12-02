const CadastroModel = require('../model/cadastroModel');

const CadastroController = {
    register: (req, res) => {
        const { nome, email, senha, matricula, tipoUsuario } = req.body;
        //Realiza a verificação do email e matricula
        CadastroModel.findByEmailOrMatricula(email, matricula, (error, results) => {
            if (error) return res.status(500).json({ msg: 'Erro no servidor.' });
            //Informa de que o email ou matricula ja foram cadastrados
            if (results.length > 0) {
                return res.status(409).json({ msg: 'Email ou matrícula já cadastrados' });
            }
            //Cria o usuário
            CadastroModel.createUser({ nome, email, senha, matricula, tipoUsuario }, (error) => {
                if (error) return res.status(500).json({ msg: 'Erro ao cadastrar usuário' });
                
                res.status(201).json({ msg: 'Usuário cadastrado com sucesso' });
            });
        });
    }
};

module.exports = CadastroController;
