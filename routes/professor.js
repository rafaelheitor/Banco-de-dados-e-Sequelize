const express = require('express')
const router = express.Router()
const { professor } = require('../controllers/professorController')

router.get('/professor/:id', professor)

module.exports = router