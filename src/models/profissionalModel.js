import { Sequelize } from 'sequelize';
import db from '../db.js';

export default db.define('profissional', {
    id: {
        type: Sequelize.INTEGER.UNSIGNED,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    nome: {
        type: Sequelize.STRING,
        allowNull: false
    },
    email: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true
    },
    cpf: {
        type: Sequelize.STRING,
        allowNull: true,
        unique: true
    },
    data_nascimento: {
        type: Sequelize.DATE,
        allowNull: true,
        unique: false
    },
    telefone: {
        type: Sequelize.STRING,
        allowNull: true,
        unique: false
    },
    sexo: {
        type: Sequelize.STRING,
        allowNull: true,
        unique: false
    },
    horario_disponibilidade: {
        type: Sequelize.STRING,
        allowNull: true,
    },
})
