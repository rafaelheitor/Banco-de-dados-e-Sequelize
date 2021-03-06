const {sequelize, Curso} = require('../models')

const cursoController =  {
    listaDeCursos: async (req, res) => {
        const todosOscursos = await Curso.findAll({include:['curso_area', 'curso_turma']})
        const cursosInfo = todosOscursos.map(curso => ({
            id:curso.dataValues.id,
            nome:curso.dataValues.nome,
            area:curso.dataValues.curso_area.dataValues.tipo,
            turma:curso.curso_turma.map(turma => turma.dataValues.id)
        }))
        return res.status(200).json({   
            success: true,
            cursos: cursosInfo
        })
    }
}

module.exports = cursoController