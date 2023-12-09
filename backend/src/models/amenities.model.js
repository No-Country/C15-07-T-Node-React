const db = require('../utils/database');
const {DataTypes} = require('sequelize');

const Amenities = db.define('amenities', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true
    },
    amenitieName: {
        type: DataTypes.STRING,
        allowNull: false,
        field: 'amenitie_name'
    },
    capacity: {
        type: DataTypes.INTEGER,
        autoIncrement:false,
        allowNull: false
    },
    amenitieImage : {
        type: DataTypes.STRING,
        allowNull: true,
        field: 'amenitie_image'
    },
    status : {
        type: DataTypes.STRING,
        allowNull: false, 
        defaultValue: 'active'
    }
});

module.exports = Amenities

