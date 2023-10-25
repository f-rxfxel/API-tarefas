const { tarefaRepositorio } = require('../repositorios/tarefa')
const repositorio = tarefaRepositorio()

const Router = require('express').Router()

Router.get('/tarefas', (req, res) => {
    // #swagger.tags = ['Tarefas']
        // #swagger.summary = 'Requisite todas as tarefas.'
        // #swagger.description = 'Descrição mais detalhada da rota aqui!'
        /* #swagger.responses[200] = {
            description: 'Retorno com sucesso, devolve todos os dados das tarefas.',
            schema: [
                {
                    nome: "Nome da Tarefa",
                    descricao: "Descrição da tarefa",
                    status: "Status",
                    id: ID da tarefa
                }
            ]
        }
            #swagger.responses[404] = {
                description: 'Quando não existe nenhum dado'
            }
            #swagger.responses[400] = {
                description: 'Quando o usuário ou cliente envia dados de forma incorreta.',
                schema: "Mensagem de erro apontando as falhas enviadas"
            }
        
        */
    try {
        const tarefas = repositorio.getAll()
        res.send(tarefas)
    } catch (err) {
        const dadosDoErro = JSON.parse(err.message)

        res.status(dadosDoErro.status).send(dadosDoErro.msg)
    }
})

Router.get('/tarefas/:id', (req, res) => {
    // #swagger.tags = ['Tarefas']
    try {
        const { id } = req.params

        const tarefa = repositorio.get(id)

        res.send(tarefa)
    } catch (err) {
        const dadosDoErro = JSON.parse(err.message)

        res.status(dadosDoErro.status).send(dadosDoErro.msg)
    }
})

Router.post("/tarefas", (req, res) => {
    // #swagger.tags = ['Tarefas']
        /* #swagger.parameters['tarefa'] = {
            in: 'body',
            description: 'Dados enviados para cadastrar a tarefa:',
            required: true,
            schema: {
                $nome: "Nome da Tarefa",
                $descricao: "Descrição da tarefa",
                $status: "Status"
            }
        } */
    try {
        const dados = req.body

        const tarefaCriada = repositorio.create(dados)

        res.send(tarefaCriada)
    } catch (err) {
        res.status(400).send(err.message)
    }
})

Router.delete("/tarefas/:id", (req, res) => {
    try {
        const { id } = req.params

        repositorio.destroy(id)

        res.status(204).send()
    } catch (err) {
        res.status(400).send(err.message)
    }
})

Router.put('/tarefas/:id', (req, res) => {
    try {
        const { id } = req.params;
        const dados = req.body;

        const tarefaAtualizada = repositorio.update(id, dados);

        res.send(tarefaAtualizada);
    } catch (err) {
        res.status(400).send(err.message);
    }
});

Router.patch('/tarefas/:id', (req, res) => {
    try {
        const { id } = req.params;
        const dados = req.body;

        const tarefaAtualizada = repositorio.partialUpdate(id, dados);

        res.send(tarefaAtualizada);
    } catch (err) {
        res.status(400).send(err.message);
    }
});

module.exports = Router