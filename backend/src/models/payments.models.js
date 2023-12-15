const db = require('../utils/database');
const { DataTypes } = require('sequelize');
const Users = require('./users.model');

const Payment = db.define('payment', {
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
  description: {
    type: DataTypes.STRING,
    allowNull: false
  },
  quantity: {
    type: DataTypes.FLOAT,
    allowNull: false
  }
});

module.exports = Payment;
