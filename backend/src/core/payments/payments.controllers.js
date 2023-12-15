const payment = require('../../models/payments.models');
const uuid = require('uuid');
//const db = require('../utils/database')

const getAllPaymentsController = async () => {
  const data = await payment.findAll();
  return data;
};

const createNewPayments = async (user_id, description, quantity) => {
  if (description && quantity) {
    return await payment.create({
      id: uuid.v4(),
      user_id,
      description,
      quantity
    });
  } else {
    throw new Error('Faltan description o quantity');
  }
};

const patchPaymentsController = async (id, newData) => {
  try {
    const PaymentToUpdate = await payment.findByPk(id);
    if (!PaymentToUpdate) {
      throw new Error('Payment not found');
    }
    await PaymentToUpdate.update(newData);
    return PaymentToUpdate;
  } catch (error) {
    console.error('Error patching Payment:', error.message);
    throw error;
  }
};

const delPaymentsController = async (id) => {
  try {
    const delPayment = await payment.findByPk(id);
    if (!delPayment) {
      throw new Error('Payment not found');
    }
    await delPayment.destroy();
    return 'delete Payment';
  } catch (error) {
    console.error('Error no delete Payment:', error.message);
    throw error;
  }
};

module.exports = {
  getAllPaymentsController,
  createNewPayments,
  patchPaymentsController,
  delPaymentsController
};
