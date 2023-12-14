const db = require('../utils/database');
const {DataTypes} = require('sequelize');

const Users = db.define('users' , {
    id: {
        type: DataTypes.UUID,
        primaryKey: true,
        allowNull: false
    },
    firstName : {
        type: DataTypes.STRING,
        allowNull: false, 
        field: 'first_name'
    },
    lastName : {
        type: DataTypes.STRING,
        allowNull: false, 
        field: 'last_name'
    },
    email : {
        type: DataTypes.STRING,
        allowNull: false, 
        unique: true,
        validate: {
            isEmail: true
        }    
    },
    password : {
        type: DataTypes.STRING,
        allowNull: false, 
    },
    phone : {
        type: DataTypes.STRING,
        allowNull: false, 
        unique: true
    },
    birthday : {
        type: DataTypes.DATEONLY,
        allowNull: false, 
    },
    gender : {
        type: DataTypes.STRING,
    },
    role : {
        type: DataTypes.STRING,
        allowNull: false, 
        defaultValue: 'normal'
    },
    status : {
        type: DataTypes.STRING,
        allowNull: false, 
        defaultValue: 'active'
    },
    urlImage : {
        type: DataTypes.STRING,
        allowNull: false,
        defaultValue: 'https://tanzolymp.com/images/default-non-user-no-photo-1-768x768.jpg'
    }
});

module.exports = Users;