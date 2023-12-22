const condos = require('../../models/condominiums.models');
const uuid = require('uuid');
const Users = require('../../models/users.model');
//const db = require('../utils/database')

const getAllCondoController = async () => {
  const data = await condos.findAll({
    attributes: {
      exclude: ['userId', 'createdAt', 'updatedAt']
    },
    include: [
      {
        model: Users,
        attributes: [
          'id',
          'firstName',
          'lastName',
          'birthday',
          'email',
          'phone'
        ]
      }
    ]
  });
  return data;
};

const createNewCondo = async (userId, tower, room) => {
  if (tower && room) {
    return await condos.create({
      id: uuid.v4(),
      userId,
      tower,
      room
    });
  } else {
    throw new Error('Faltan tower o room');
  }
};

const patchCondoController = async (id, newData) => {
  try {
    const CondoToUpdate = await condos.findByPk(id);
    if (!CondoToUpdate) {
      throw new Error('Condominium not found');
    }
    await CondoToUpdate.update(newData);
    return CondoToUpdate;
  } catch (error) {
    console.error('Error patching Condominium:', error.message);
    throw error;
  }
};

const delCondoController = async (id) => {
  try {
    const delCondo = await condos.findByPk(id);
    if (!delCondo) {
      throw new Error('Condo not found');
    }
    await delCondo.destroy();
    return 'delete Condominium';
  } catch (error) {
    console.error('Error no delete Condo:', error.message);
    throw error;
  }
};

module.exports = {
  getAllCondoController,
  createNewCondo,
  patchCondoController,
  delCondoController
};
