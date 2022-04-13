const { sequelize, Professor, Curso, Turma, Area, Aluno } = require('../models')

const professorController = {
    professor: async (req, res) => {
        let { id } = req.params
        const professor = await Professor.findByPk(id,{
            include:[{
                model: Turma,
                association: 'professor_turma',
                required: false,
                include:[{
                    model: Curso,
                    association: 'turma_curso',
                    required: false,
                    include:[{
                        model: Area,
                        association: 'curso_area',
                        required: false
                    }]
                }]
            }]
        })
        return res.status(200).json(professor)
    }
}

module.exports = professorController