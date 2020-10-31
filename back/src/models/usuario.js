// Define que estamos utilizando o sequelize
const Sequelize = require('sequelize');
 
// Obtem dados de conexão entre sequelize e banco de dados MySQL
const sequelize = require('../database/database.js');
 
// Cria tabela no BD e seus campos
const Usuario = sequelize.define("usuario", {
    id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
    },
    nomeCliente: {
        allowNull: true,
        type: Sequelize.STRING(50),
        validate: {
            len: [1, 100]
        }
    },
    endereço: {
        allowNull: true,
        type: Sequelize.STRING(50),
        validate: {
            len: [1, 100]
        }
    },
    email: {
        allowNull: true,
        type: Sequelize.STRING(50),
        validate: {
            len: [1, 100]
        }
    },
    telefone: {
        allowNull: true,
        type: Sequelize.DOUBLE(),
        validate: {
            len: [1, 999999]
        }
    },
});
 
module.exports = Usuario;
