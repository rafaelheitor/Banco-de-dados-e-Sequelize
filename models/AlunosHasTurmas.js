module.exports = (sequelize, DataTypes) => {
    const AlunosHasTurmas = sequelize.define('AlunosHasTurmas', {
        aluno_id: DataTypes.INTEGER,
        turma_id: DataTypes.INTEGER,
        numero_faltas: DataTypes.INTEGER
    },{
        tableName: 'alunos_has_turmas',
        timestamps: false
    })

    return AlunosHasTurmas
}