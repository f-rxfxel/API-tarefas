const express = require('express')
const rotasPadrao = require('./rotas/index.js')
const rotasTarefa = require('./rotas/tarefa.js')
const app = express()

app.use(express.json())
app.use(rotasPadrao)
app.use(rotasTarefa)

app.listen(3000, () => {
    console.log("API está viva!")
})