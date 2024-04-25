const PRODUCT = require('./definations/product');
const ORDER = require('./definations/order');
const sequelize = require('../bin/dbConnection');

const models = {
    orders: ORDER,
    products: PRODUCT,
}

const db = {}

db.sequelize = sequelize;
sequelize.models = models;

module.exports = {db, models}
