const Amenities = require('./amenities.model')
const Users = require('./users.model')
const UsersAmenities = require('./users_amenities')

const initModels = () => {

    Users.hasMany(UsersAmenities)
    UsersAmenities.belongsTo(UsersAmenities)

    Amenities.hasMany(UsersAmenities)
    UsersAmenities.belongsTo(Amenities)
    
    
}

module.exports = initModels