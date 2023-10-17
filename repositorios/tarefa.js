let tarefas = [
    {
        nome: "task1",
        descricao: "123",
        status: "FEITO",
        id: 1
    },
    {
        nome: "task2",
        descricao: "456",
        status: "A FAZER",
        id: 2
    }
]
let ultimo_id = 1

const validacao = require("../validacoes/tarefa")

const tarefaRepositorio = () => {
    return {
        getAll: () => {
            if (tarefas.length == 0) {
                throw new Error(JSON.stringify({
                    status: 404,
                    msg: "Nenhuma tarefa encontrada."
                }))
            } else {
                return tarefas
            }
        },

        get: (id) => {
            const tarefasFiltrados = tarefas.filter(task => task.id == id)

            if (tarefasFiltrados.length == 0) {
                throw new Error(JSON.stringify({
                    status: 404,
                    msg: "Nenhuma tarefa encontrada."
                }))
            } else {
                return tarefasFiltrados[0]
            }
        },
        create: (dados) => {
            if (validacao(dados)) {
                dados.id = ++ultimo_id

                tarefas.push(dados)

                return dados
            } else {
                throw new Error("Dados inválidos para cadastrar.")
            }
        },
        destroy: (id) => {
            const tarefas_filtrados = tarefas.filter(task => task.id == id)

            if (tarefas_filtrados.length == 0) {
                throw new Error("Tarefa inexistente")
            }

            tarefas = tarefas.filter(task => task.id != id)

            return true
        }
    }
}

module.exports = {
    tarefaRepositorio
};