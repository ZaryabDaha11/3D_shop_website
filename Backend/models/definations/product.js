const sequelize = require('../../bin/dbConnection')
const { Model, DataTypes } = require('sequelize')

class PRODUCT extends Model { }

PRODUCT.init({
    product_id: {
        primaryKey: true,
        type: DataTypes.STRING(),
    },
    product_color: {
        type: DataTypes.STRING(),
        allowNull: false,
    },
    product_logo: {
        type: DataTypes.STRING(),
        allowNull: false,
    },
    product_texture: {
        type: DataTypes.STRING(),
        allowNull: false,
    },
    no_of_products: {
        type: DataTypes.STRING(),
        allowNull: false,
    },
}, {
    timestamps: true,
    paranoid: true,
    sequelize
})

module.exports = PRODUCT