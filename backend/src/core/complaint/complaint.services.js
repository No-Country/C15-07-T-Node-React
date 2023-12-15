const {
  getAllComplaintController,
  createNewComplaint,
  patchComplaintController,
  delComplaintController
} = require('./complaint.controllers');

const getAllComplaintHandler = async (req, res) => {
  const getAllComplaint = await getAllComplaintController();
  if (getAllComplaint) {
    res.status(200).json(getAllComplaint);
  } else {
    res.status(404).json({ message: 'Complaint not found' });
  }
};

const postComplaintHandler = async (req, res) => {
  try {
    const { user_id, title, description, status } = req.body;
    const newComplaint = await createNewComplaint(
      user_id,
      title,
      description,
      status
    );
    res.status(201).json({ newComplaint });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const updateComplaintHandler = async (req, res) => {
  const { id } = req.params;
  const newData = req.body;
  try {
    const updateComplaint = await patchComplaintController(id, newData);
    res.status(200).json(updateComplaint);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const deleteComplaintHandler = async (req, res) => {
  const { id } = req.params;
  try {
    const delComplaint = await delComplaintController(id);
    res.status(200).json(delComplaint);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = {
  getAllComplaintHandler,
  postComplaintHandler,
  updateComplaintHandler,
  deleteComplaintHandler
};
