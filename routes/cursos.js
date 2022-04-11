const express = require('express')
const router = express.Router()
const { listaDeCursos } = require('../controllers/cursoController')

router.get('/cursos', listaDeCursos)

module.exports = router