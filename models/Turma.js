module.exports = (sequelize, DataTypes) => {
    const Turma = sequelize.define('Turma', {
        duracao: DataTypes.INTEGER,
        ano_inicio: DataTypes.INTEGER,
        semestre: DataTypes.INTEGER,
        curso_id: DataTypes.INTEGER,
        professor_id: DataTypes.INTEGER
    }, {
        tableName: 'turmas',
        timestamps: false
    })

    Turma.associate = (models) => {
        Turma.belongsTo(models.Professor, {as: 'turma_professor', foreignKey: 'professor_id'})
        Turma.belongsTo(models.Curso, {as: 'turma_curso', foreignKey: 'curso_id'})
        Turma.belongsToMany(models.Aluno, {as: 'turma_alunos', through: models.AlunosHasTurmas, foreignKey: 'turma_id', otherKey: 'aluno_id'})
    }
    return Turma
}