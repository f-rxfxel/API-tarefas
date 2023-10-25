// Documentação do swagger autogen
// https://www.npmjs.com/package/swagger-autogen
// Importação da biblioteca para gerar a documentação automaticamente
const autogen = require("swagger-autogen")()

// Definição do arquivo resultado da documentação
const fileDocs = './swaggerOutput.json'

// Definição dos arquivos que mapeam as rotas da aplicação
const routeFiles = [
    './rotas/tarefa.js'
]

const infos = {
    info: {
        title: "API de Tarefas",
        description: "API criada durante o curso de Sistemas de Informação",
        version: "3.0.0"
    },
    host: 'localhost:3000',
    schemes: ['http', 'https']
}

// Geração da documentação automaticamente
autogen(fileDocs, routeFiles, infos).then(() => {
    require("./index.js")
})