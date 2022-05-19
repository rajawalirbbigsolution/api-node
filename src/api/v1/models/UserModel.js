import { Sequelize } from 'sequelize';
import conn from '../../../../config/db.js';

const sequelize = new Sequelize('sqlite::memory:');
const { DataTypes } = Sequelize;

const User = conn.define('users', {
    user_id : {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
    },
    pic_name : {
        type : DataTypes.STRING,
        allowNull : false
    },
    email : {
        type : DataTypes.STRING,
        allowNull : false
    },
    password : {
        type : DataTypes.STRING,
        allowNull : false
    },    
    nohp : {
        type : DataTypes.STRING,
        allowNull : false
    },   
    role_id : {
        type : DataTypes.INTEGER,
        allowNull : true
    },
    status : {
        type : DataTypes.INTEGER,
        allowNull : true
    },
    forget_code : {
        type : DataTypes.STRING,
        allowNull : true
    },
    forget_date : {
        type : DataTypes.DATE,
        allowNull : true
    },
    created_at : {
        type : DataTypes.DATE,
        allowNull : true
    },
    updated_at : {
        type : DataTypes.DATE,
        allowNull : true
    }
}, {
    freezeTableName : true,
    timestamps: false
});

User.removeAttribute('id');
export default User;