import { Sequelize } from 'sequelize';
import conn from '../../../../config/db.js';

const sequelize = new Sequelize('sqlite::memory:');
const { DataTypes } = Sequelize;

const User = conn.define('tb_movie', {
    id : {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
    },
    name : {
        type : DataTypes.STRING,
        allowNull : false
    },
    description : {
        type : DataTypes.STRING,
        allowNull : false
    },
    category : {
        type : DataTypes.STRING,
        allowNull : false
    },
    thumbnail : {
        type : DataTypes.STRING,
        allowNull : false
    }
    

}, {
    freezeTableName : true,
    timestamps: false
});

User.removeAttribute('id');
export default User;