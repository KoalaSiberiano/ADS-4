const Sequelize = require('sequelize');
const database = require('./db');

const Usuario = database.define('usuario', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allownNull: false,
        primaryKey: true

    },
    nome: {
        type: Sequelize.STRING,
        allownNull: false
    },
    email: {
        type: Sequelize.STRING
    },
    senha: {
        type: Sequelize.STRING
    },
    nascimeento: {
        type: Sequelize.DATE
    }
})

module.exports = Usuario;