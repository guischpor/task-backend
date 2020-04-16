//startando o express
const express = require('express')
const app = express()

//carrega os arquivos que se conectam com o banco de dados
const db = require('./config/db')

//é responsavel por ajudar a carregar todos os modulos
const consign = require('consign')

//consign ja executando todos os modulos
consign()
    .then('./config/middlewares.js')
    .then('./api')
    .then('./config/routes.js')
    .into(app)

//setando o db no app
app.db = db

//anexando a porta e o endereço
app.listen(3000, () => {
    console.log('Backend executando...')
})