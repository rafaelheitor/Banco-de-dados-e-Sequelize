    const {sequelize, Professor, Curso, Turma} = require('../models')
    
    const professorController =  {
        professor: async (req, res) => {
            let {id} = req.params
            const professor = await Professor.findByPk(id, {include:['professor_turma']})
            const turmas = professor.dataValues.professor_turma
            const turmasDoProfessor = []
            let listaDeId = turmas.map(turma => turma.dataValues.id)
            const todasAsTurmas = await Turma.findAll()
            for(let i= 0; i < listaDeId.lenght; i++){
                let resultado = todasAsTurmas.find(turmas => turmas.dataValues.id == listaDeId[i])
                console.log(turmasDoProfessor)
                turmasDoProfessor.push(resultado)
            }
            // listaDeId.forEach( id => {
            //     let turmaProfessor = await Turma.findByPk(id, {include: ['turma_curso']})
            //     turmasDoProfessor.push(turmaProfessor)
            //     console.log(turmasDoProfessor.map(turma => turma.dataValues.turma_curso.dataValues.nome))
            // })
            // console.log(turmasDoProfessor.map(turma => turma.dataValues.turma_curso.dataValues.nome))
            return res.status(200).json({   
                success: true,
                id:professor.dataValues.id,
                nome:professor.dataValues.nome,
                turmas:professor.dataValues.professor_turma.map(turma => ({id:turma.id, anoDeInicio: turma.ano_inicio, semestre: turma.semestre}))
            })
        }
    }

    module.exports = professorController