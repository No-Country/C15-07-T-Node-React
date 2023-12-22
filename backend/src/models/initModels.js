const Amenities = require('./amenities.model');
const Users = require('./users.model');
const UsersAmenities = require('./users_amenities.model');
const Condominiums = require('./condominiums.models');

const initModels = () => {
  Users.hasMany(UsersAmenities);
  UsersAmenities.belongsTo(UsersAmenities);

  Amenities.hasMany(UsersAmenities);
  UsersAmenities.belongsTo(Amenities);

  Users.hasOne(Condominiums);
  Condominiums.belongsTo(Users);
};

module.exports = initModels;
