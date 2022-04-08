module.exports = (sequelize, DataTypes) => {
    const Area = sequelize.define('Area', {
        tipo: DataTypes.STRING
    }, {
        tableName: 'areas',
        timestamps: false
    })

    Area.associate = models => {
        Area.hasMany(models.Curso, {
            as: 'area_curso',
            foreignKey: 'area_id'
        })
    }

    return Area
}