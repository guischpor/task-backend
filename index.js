//startando o express
const express = require('express')
const app = express()

//passando requisiões como respostas
app.get('/', (req, res) => {
    res.status(200).send('Meu Backend!')
})

//anexando a porta e o endereço
app.listen(3000, () => {
    console.log('Backend executando...')
})