const {
  getAllCondoController,
  createNewCondo,
  patchCondoController,
  delCondoController
} = require('./condominiums.controllers');

const getAllCondoHandler = async (req, res) => {
  const getAllCondo = await getAllCondoController();
  if (getAllCondo) {
    res.status(200).json(getAllCondo);
  } else {
    res.status(404).json({ message: 'Condominium not found' });
  }
};

const postCondoHandler = async (req, res) => {
  try {
    const { user_id, tower, room } = req.body;
    const newCondo = await createNewCondo(user_id, tower, room);
    res.status(201).json({ newCondo });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const updateCondoHandler = async (req, res) => {
  const { id } = req.params;
  const newData = req.body;
  try {
    const updateCondo = await patchCondoController(id, newData);
    res.status(200).json(updateCondo);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const deleteCondoHandler = async (req, res) => {
  const { id } = req.params;
  try {
    const delCondo = await delCondoController(id);
    res.status(200).json(delCondo);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = {
  getAllCondoHandler,
  postCondoHandler,
  updateCondoHandler,
  deleteCondoHandler
};
