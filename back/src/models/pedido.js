// Define que estamos utilizando o sequelize
const Sequelize = require('sequelize');
 
// Obtem dados de conexão entre sequelize e banco de dados MySQL
const sequelize = require('../database/database.js');
 
// Cria tabela no BD e seus campos
const Pedido = sequelize.define("pedido", {
    id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
    },
    nomePedido: {
        allowNull: false,
        type: Sequelize.STRING(100),
        validate: {
            len: [1, 100]
        }
    },
    ingredientes: {
        allowNull: false,
        type: Sequelize.STRING(100),
        validate: {
            len: [1, 100]
        }
    },
    custo: {
        allowNull: false,
        type: Sequelize.DOUBLE(),
        validate: {
            len: [1, 999999]
        }
    },
    venda: {
        allowNull: false,
        type: Sequelize.DOUBLE(),
        validate: {
            len: [1, 999999]
        }
    },
    estoque: {
        allowNull: false,
        type: Sequelize.DOUBLE(),
        validate: {
            len: [1, 999999]
        }
    },
});
 
module.exports = Pedido;
