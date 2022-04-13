const {sequelize, Aluno, Area, Curso, Professor, Turma, AlunosHasTurmas} = require('./models')

// Aluno.findAll()
// .then(alunos => {
//    let listaNomes = alunos.map(aluno => aluno.nome)
//     console.log(listaNomes)
// })

// Area.findAll()
// .then(areas =>{
//     let listaDeAreas = areas.map(area => area.tipo)
//     console.log(listaDeAreas)
// })

// Curso.findAll()
// .then(cursos => {
//     let listaDeCursos = cursos.map(curso => curso.nome)
//     console.log(listaDeCursos)
// })

// Professor.findAll()
// .then(professores => {
//     let listaDeProfessores = professores.map(professor => `${professor.nome} ${professor.sobrenome}`)
//     console.log(listaDeProfessores)
// })

// Turma.findAll({
//     where: {
//         semestre: 2
//     }
// }).then(turmas => console.log(turmas))

// AlunosHasTurmas.findAll({
//     where:{
//         numero_faltas: 10
//     }
// }).then(aluno => console.log(aluno))


const adicionaAlunos = async () => {
    let alunos = await Aluno.bulkCreate(cadastroAlunos)
    console.log('Alunos adicionados com sucessor')
    sequelize.close()
}

let cadastroAlunos = [
    {
        nome: 'João',
        sobrenome: 'Silva',
        ano_matricula: 2022
    },
    {
        nome: 'Pedro',
        sobrenome: 'Pereira',
        ano_matricula: 2021
    }, 
    {
        nome: 'Heloíse',
        sobrenome: 'Silva',
        ano_matricula: 2022
    }
]

// adicionaAlunos()

const areaId = async (area) => {
let resultado =  await Area.findOne({where:{tipo:area}})
console.log(resultado.id)
sequelize.close()
return resultado.id
}

areaId('User Experience')

const atualizaAluno = async () => {
    let aluno = await Aluno.update({
        nome: 'Leoncio'
    }, {
        where: {
            id: 4
        }
    })
    console.log('Aluno Atualizado com sucesso');
    sequelize.close()

}

// atualizaAluno()

let listaDeCursos = [
    {
        nome: 'Ciência de Dados',
        area_id: 1
    },
    {
        nome: 'Full Stack Python',
        area_id: 1
    },
    {
        nome: 'Java + Spring Boot',
        area_id: 1
        
    },
    {
        nome: 'JavaScript Orientado a Objetos',
        area_id: 1
    },
    {
        nome: 'Vue',
        area_id: 1
    }
]


const cursosDeProgramacao = async (areanome) => {
   let idArea = await areaId(areanome)
    let insereCursos = await Curso.bulkCreate([
        {
            nome: 'Ciência de Dados',
            area_id: idArea
        },
        {
            nome: 'Full Stack Python',
            area_id: idArea
        },
        {
            nome: 'Java + Spring Boot',
            area_id: idArea
            
        },
        {
            nome: 'JavaScript Orientado a Objetos',
            area_id: idArea
        },
        {
            nome: 'Vue',
            area_id: idArea
        }
    ])
    sequelize.close()
    return console.log('Os cursos foram inseridos com sucesso')
}

// cursosDeProgramacao('Dados')

const deleteAluno = async () => {
    let aluno = await Aluno.destroy({
        where:{
            id: 10
        }
    })
    console.log('Aluno excluído com sucesso')
    sequelize.close()
}

// deleteAluno()

Professor.findByPk(3, {
    include:['professor_turma']
}).then(professor => console.log(professor.toJSON()))

Turma.findByPk(10, {
    include:['turma_professor', 'turma_curso']
}).then(turma => console.log(turma.toJSON()))

Curso.findByPk(3, {
    include:['curso_area']
}).then(curso => console.log(curso.toJSON()))

Turma.findByPk(15, {
    include:['turma_curso', 'turma_professor', 'turma_alunos']
}).then(turma => console.log(turma.toJSON()))

Turma.findAll({include:['turma_curso', 'turma_professor', 'turma_alunos']})
.then(turma => turma.forEach(t => console.log(t.toJSON())))

Professor.findByPk(2,{
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
}).then(professor => console.log(professor))