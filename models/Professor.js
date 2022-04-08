module.exports = (sequelize, DataTypes) => {
    const Professor = sequelize.define('Professor', {
        nome: DataTypes.STRING,
        sobrenome: DataTypes.STRING
    },{
        tableName: 'professores',
        timestamps: false
    })

    Professor.associate = (models) => {
        Professor.hasMany(models.Turma, {
            as: 'professor_turma',
            foreignKey: 'professor_id'
        })
    }
    return Professor
}