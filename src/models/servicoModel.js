import { Sequelize } from 'sequelize';
import db from '../db.js';

export default db.define('servico', {
    id: {
        type: Sequelize.INTEGER.UNSIGNED,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    titulo: {
        type: Sequelize.STRING,
        allowNull: false
    },
    descricao: {
        type: Sequelize.STRING,
        allowNull: false
    },
    disponibility:{
        type: Sequelize.BOOLEAN,
        allowNull: false
        },
})
