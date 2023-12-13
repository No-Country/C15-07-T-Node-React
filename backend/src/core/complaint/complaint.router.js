const router = require('express').Router();
const complaintServices = require('./complaint.services');

//? Main Route

//Necesito hacer un crud de mantenimiento

//? ruta para hacer un get de mantenimiento.

router.get('/', complaintServices.getAllComplaintHandler);

router.post('/', complaintServices.postComplaintHandler);

router.patch('/:id', complaintServices.updateComplaintHandler);

router.delete('/:id', complaintServices.deleteComplaintHandler);

module.exports = router;
