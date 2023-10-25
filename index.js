const express = require('express')
const rotasPadrao = require('./rotas/index.js')
const rotasTarefa = require('./rotas/tarefa.js')
const app = express()

const swaggerui = require('swagger-ui-express')
const swaggerFile = require('./swaggerOutput.json')

app.use(express.json())
app.use(rotasPadrao)
app.use(rotasTarefa)

app.get('/docs', swaggerui.setup(swaggerFile))

app.listen(3000, () => {
    console.log("API está viva!")
})
