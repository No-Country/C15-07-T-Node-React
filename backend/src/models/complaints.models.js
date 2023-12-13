const db = require('../utils/database');
const {DataTypes} = require('sequelize');
const Users = require('./users.model')

const Complaint = db.define('complaint' , {
    id: {
        type: DataTypes.UUID,
        primaryKey: true,
        allowNull: false
    },
    user_id: {
      type: DataTypes.UUID,
      allowNull: false,
      references: {
          model: Users,
          key: 'id'
      }
    },
    title : {
    type: DataTypes.STRING,
    allowNull: false
    },
    description : {
        type: DataTypes.STRING,
        allowNull: false
    },
    status : {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: 'false'
    },

});

module.exports = Complaint;
