const db = require('../utils/database');
const {DataTypes} = require('sequelize');

<<<<<<< HEAD
const Amenities = db.define('amenities' , {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false
    },
    amenitieName : {
=======
const Amenities = db.define('amenities', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true
    },
    amenitieName: {
>>>>>>> 28cb78d (feat(backend): adding Amenities)
        type: DataTypes.STRING,
        allowNull: false,
        field: 'amenitie_name'
    },
    capacity: {
        type: DataTypes.INTEGER,
<<<<<<< HEAD
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
=======
        allowNull: false
    },
    amenitieImage: {
        type: DataTypes.STRING,
        allowNull: true
    }
})

module.exports = Amenities;
>>>>>>> 28cb78d (feat(backend): adding Amenities)
