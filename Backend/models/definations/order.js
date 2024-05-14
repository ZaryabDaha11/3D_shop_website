const sequelize = require('../../bin/dbConnection')
const { Model, DataTypes } = require('sequelize')

class ORDER extends Model { }

ORDER.init({
    customer_id: {
        primaryKey: true,
        type: DataTypes.STRING(),
    },
    customer_name: {
        type: DataTypes.STRING(),
        allowNull: false,
    },
    customer_phone: {
        type: DataTypes.STRING(),
        allowNull: false,
    },
    customer_address: {
        type: DataTypes.STRING(),
        allowNull: false,
    },
    customer_product: {
        type: DataTypes.JSON(),
        allowNull: false
    },
}, {
    timestamps: true,
    paranoid: true,
    sequelize
})

module.exports = ORDER