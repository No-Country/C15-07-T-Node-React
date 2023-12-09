const Maintenance = require('../../models/maintenance.models')
const uuid = require('uuid')

const getAllMaintController = async() => {
  const data = await Maintenance.findAll();
  return data;
};

const createNewMaint = async (user_id, title, description, status) => {
  if (title && description && status) {
    return await Maintenance.create({
      id: uuid.v4(),
      user_id,
      title,
      description,
      status
    });
  } else {
    throw new Error('Faltan description o status');
  }
};


const patchMaintController = async (id, newData) => {
  try {
    const maintenanceToUpdate = await Maintenance.findByPk(id);
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

const delMaintController = async (id) => {
  try {
    const delMaintenance = await Maintenance.findByPk(id);
    if (!delMaintenance) {
      throw new Error('Maintenance not found');
    }
    await delMaintenance.destroy();
    return "delete Maintenance";
  } catch (error) {
    console.error('Error no delete maintenance:', error.message);
    throw error;
  }
};





module.exports =
{getAllMaintController, createNewMaint, patchMaintController, delMaintController}
