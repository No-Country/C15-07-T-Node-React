const router = require('express').Router();
//const {getAllMaintenance} = require('./maintenance.controllers')
const {postMaintHandler, getAllMaintHandler, updateMaintHandler, deleteMaintHandler} = require('./maintenance.services')

//? Main Route

//Necesito hacer un crud de mantenimiento

//? ruta para hacer un get de mantenimiento.

router.get('/', getAllMaintHandler);

router.post('/', postMaintHandler )

router.patch('/:id', updateMaintHandler)

router.delete('/:id', deleteMaintHandler)

module.exports = router
