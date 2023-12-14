const db = require( '../utils/database');
const {DataTypes} = require('sequelize');
const Users = require('./users.model');
const Amenities = require('./amenities.model');

const UsersAmenities = db.define('user_amenities', {
    id: {
        type: DataTypes.UUID,
        allowNull: false, 
        primaryKey: true
    },
    userId: {
        type: DataTypes.UUID,
        allowNull: false, 
        field: 'user_id',
        references: {
            key: 'id',
            model: Users
        }
    },
    amenitieId : {
        type: DataTypes.INTEGER,
        allowNull: false, 
        field: 'amenitie_id',
        references: {
            key: 'id',
            model: Amenities
        }
    },
    dateReservation: {
        type: DataTypes.DATE,
        allowNull: false,
        field: 'date_reservation'
    }
})

module.exports = UsersAmenities
