const Complaint = require('../../models/complaints.models')
const uuid = require('uuid')

const getAllComplaintController = async() => {
  const data = await Complaint.findAll();
  return data;
};

const createNewComplaint = async (user_id, title, description, status) => {
  if (title && description && status) {
    return await Complaint.create({
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


const patchComplaintController = async (id, newData) => {
  try {
    const ComplaintToUpdate = await Complaint.findByPk(id);
    if (!ComplaintToUpdate) {
      throw new Error('Complaint not found');
    }
    await ComplaintToUpdate.update(newData);
    return ComplaintToUpdate;
  } catch (error) {
    console.error('Error patching complaint:', error.message);
    throw error;
  }
};

const delComplaintController = async (id) => {
  try {
    const delComplaint = await Complaint.findByPk(id);
    if (!delComplaint) {
      throw new Error('Complaint not found');
    }
    await delComplaint.destroy();
    return "delete Complaint";
  } catch (error) {
    console.error('Error no delete Complaint:', error.message);
    throw error;
  }
};





module.exports =
{getAllComplaintController, createNewComplaint, patchComplaintController, delComplaintController}
