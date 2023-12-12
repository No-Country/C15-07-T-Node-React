const condos = require('../../models/condominiums.models');
const uuid = require('uuid');
//const db = require('../utils/database')

const getAllCondoController = async () => {
  const data = await condos.findAll();
  return data;
};

const createNewCondo = async (user_id, tower, room) => {
  if (tower && room) {
    return await condos.create({
      id: uuid.v4(),
      user_id,
      tower,
      room
    });
  } else {
    throw new Error('Faltan description o status');
  }
};

const patchCondoController = async (id, newData) => {
  try {
    const maintenanceToUpdate = await condos.findByPk(id);
    if (!maintenanceToUpdate) {
      throw new Error('Maintenance not found');
    }
    await maintenanceToUpdate.update(newData);
    return maintenanceToUpdate;
  } catch (error) {
    console.error('Error patching maintenance:', error.message);
    throw error;
  }
};

const delCondoController = async (id) => {
  try {
    const delMaintenance = await condos.findByPk(id);
    if (!delMaintenance) {
      throw new Error('Maintenance not found');
    }
    await delMaintenance.destroy();
    return 'delete Condominium';
  } catch (error) {
    console.error('Error no delete maintenance:', error.message);
    throw error;
  }
};

module.exports = {
  getAllCondoController,
  createNewCondo,
  patchCondoController,
  delCondoController
};
