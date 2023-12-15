const {
  getAllPaymentsController,
  createNewPayments,
  patchPaymentsController,
  delPaymentsController
} = require('../payments/payments.controllers');
const getAllPaymentsHandler = async (req, res) => {
  const getAllPayments = await getAllPaymentsController();
  if (getAllPayments) {
    res.status(200).json(getAllPayments);
  } else {
    res.status(404).json({ message: 'Payments not found' });
  }
};

const postPaymentsHandler = async (req, res) => {
  try {
    const { user_id, description, quantity } = req.body;
    const newPayments = await createNewPayments(user_id, description, quantity);
    res.status(201).json({ newPayments });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const updatePaymentsHandler = async (req, res) => {
  const { id } = req.params;
  const newData = req.body;
  try {
    const updatePayments = await patchPaymentsController(id, newData);
    res.status(200).json(updatePayments);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const deletePaymentsHandler = async (req, res) => {
  const { id } = req.params;
  try {
    const delPayments = await delPaymentsController(id);
    res.status(200).json(delPayments);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = {
  getAllPaymentsHandler,
  postPaymentsHandler,
  updatePaymentsHandler,
  deletePaymentsHandler
};
