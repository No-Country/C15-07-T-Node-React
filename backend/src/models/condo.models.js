const db = require('../utils/database');
const {DataTypes} = require('sequelize');
const Users = require('./users.model')

const Condo = db.define('condominuims' , {
    id: {
        type: DataTypes.UUID,
        primaryKey: true,
        allowNull: false
    },
    user_id: {
      type: DataTypes.STRING,
      allowNull: false,
      references: {
          model: Users,
          key: 'id'
      }
  },
    tower : {
        type: DataTypes.STRING,
        allowNull: false
    },
    room : {
        type: DataTypes.INTEGER,
        allowNull: false
    },

});

module.exports = Condo;
