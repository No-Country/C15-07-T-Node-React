const router = require('express').Router();
const maintenanceServices = require('../../core/maintenance/maintenance.services')

//? Main Route

//Necesito hacer un crud de mantenimiento

//? ruta para hacer un get de mantenimiento.

router.get('/', maintenanceServices.getAllMaintHandler);

router.post('/', maintenanceServices.postMaintHandler )

router.patch('/:id', maintenanceServices.updateMaintHandler)

router.delete('/:id', maintenanceServices.deleteMaintHandler)

module.exports = router
