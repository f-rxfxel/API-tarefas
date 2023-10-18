const { tarefaRepositorio } = require('../repositorios/tarefa')
const repositorio = tarefaRepositorio()

const Router = require('express').Router()

Router.get('/tarefas', (req, res) => {
    try {
        const tarefas = repositorio.getAll()
        res.send(tarefas)
    } catch (err) {
        const dadosDoErro = JSON.parse(err.message)

        res.status(dadosDoErro.status).send(dadosDoErro.msg)
    }
})

Router.get('/tarefas/:id', (req, res) => {
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