const router = require('express').Router();
const {
  postPaymentsHandler,
  getAllPaymentsHandler,
  updatePaymentsHandler,
  deletePaymentsHandler
} = require('../payments/payments.services');

//? Main Route

//Necesito hacer un crud de mantenimiento

//? ruta para hacer un get de mantenimiento.

router.get('/', getAllPaymentsHandler);

router.post('/', postPaymentsHandler);

router.patch('/:id', updatePaymentsHandler);

router.delete('/:id', deletePaymentsHandler);

module.exports = router;
