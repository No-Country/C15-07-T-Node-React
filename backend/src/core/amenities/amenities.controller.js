const uuid = require('uuid');

const Amenities = require('../../models/amenities.model');
const UserAmenities = require('../../models/users_amenities.model');

const getAllAmenities = async () => {
  const data = await Amenities.findAll();
  return data;
};

const getAmenitieById = async (id) => {
  const data = await Amenities.findOne({
    where: {
      id
    }
  });
  return data;
};

const createAmenitie = async (data) => {
  const newAmenitie = await Amenities.create({
    amenitieName: data.amenitieName,
    capacity: data.capacity,
    amenitieImage: data.amenitieImage
  });

  return newAmenitie;
};

const updateAmenitie = async (id, data) => {
  const result = await Amenities.update(data, {
    where: {
      id
    }
  });
  return result;
};

const deleteAmenitie = async (id) => {
  const data = await Amenities.destroy({
    where: {
      id
    }
  });

  return data;
};

const addAmenitieToUser = async (data) => {
  const response = await UserAmenities.create({
    id: uuid.v4(),
    userId: data.userId,
    amenitieId: data.amenitieId,
    dateReservation: data.dateReservation
  });
  return response;
};

const getAllAmenitiesReservations = async () => {
  const response = await UserAmenities.findAll({
    attributes: {
      exclude: ['amenityId', 'userAmenityId']
    },
    include: [
      {
        model: Amenities
      }
    ]
  });
  return response;
};

const getAmenitieReservationByReservationid = async (id) => {
  const response = await UserAmenities.findAll({
    where: {
      id
    }
  });
  return response;
};

const getAmenitiesReservationsByUser = async (id) => {
  const response = await UserAmenities.findAll({
    where: {
      userId: id
    }
  });
  return response;
};

const getAmenitieReservationUserId = async (reservation_id) => {
  const response = await UserAmenities.findOne({
    where: {
      id: reservation_id
    },
    attributes: {
      exclude: [
        'id',
        'amenitieId',
        'dateReservation',
        'createdAt',
        'updatedAt',
        'userAmenityId',
        'amenityId'
      ]
    }
  });
  return response;
};

const editAmenitiesReservationByUser = async (id, data) => {
  const result = await UserAmenities.update(data, {
    where: {
      id
    }
  });
  return result;
};

const deleteAmenitieReservationByUser = async (id) => {
  const response = await UserAmenities.destroy({
    where: {
      id
    }
  });

  return response;
};

module.exports = {
  getAllAmenities,
  getAmenitieById,
  createAmenitie,
  updateAmenitie,
  deleteAmenitie,
  addAmenitieToUser,
  getAllAmenitiesReservations,
  getAmenitieReservationByReservationid,
  getAmenitiesReservationsByUser,
  editAmenitiesReservationByUser,
  getAmenitieReservationUserId,
  deleteAmenitieReservationByUser
};
