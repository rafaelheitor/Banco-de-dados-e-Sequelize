const express = require('express')
const app = express()
const cursos = require('./routes/cursos')


app.use(express.json())
app.use('/', cursos)


app.listen(3000, () => {
    console.log('Servidor rodando na porta 3000')
})

module.exports = app 