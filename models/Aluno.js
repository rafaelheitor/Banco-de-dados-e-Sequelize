module.exports = (sequelize, DataTypes) => {
    const Aluno = sequelize.define('Aluno', {
        nome: DataTypes.STRING,
        sobrenome: DataTypes.STRING,
        ano_matricula: DataTypes.INTEGER
    }, {
        tableName: 'alunos',
        timestamps: false
    })

    Aluno.associate = models => {
        Aluno.belongsToMany(models.Turma, { as: 'alunos_turmas', through: models.AlunosHasTurmas, foreignKey: 'aluno_id', otherKey: 'turma_id' })
    }
    return Aluno
}