const db = require('../utils/database');
const { DataTypes } = require('sequelize');
const Users = require('./users.model');

const Condominium = db.define('condo', {
  id: {
    type: DataTypes.UUID,
    primaryKey: true,
    allowNull: false
  },
  userId: {
    type: DataTypes.UUID,
    allowNull: false,
    field: 'user_id',
    references: {
      model: Users,
      key: 'id'
    }
  },
  tower: {
    type: DataTypes.STRING,
    allowNull: false
  },
  room: {
    type: DataTypes.INTEGER,
    allowNull: false
  }
});

module.exports = Condominium;
