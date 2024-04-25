const { Sequelize } = require('sequelize');
require('dotenv').config();

const sequelize = new Sequelize({
    port: process.env.DB_PORT,
    host: process.env.DB_HOST,
    database: process.env.DB_NAME,
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    dialect: process.env.DB_DIALECT
})

sequelize.authenticate().then(() => {
    console.log('database connection established!');
}).catch(err => { console.log('error: ', err) })

module.exports = sequelize;