const router = require('express').Router();
const {postCondoHandler, getAllCondoHandler, updateCondoHandler, deleteCondoHandler} = require('../../core/condominiums/condominiums.services')

//? Main Route

//Necesito hacer un crud de mantenimiento

//? ruta para hacer un get de mantenimiento.

router.get('/', getAllCondoHandler);

router.post('/', postCondoHandler )

router.patch('/:id', updateCondoHandler)

router.delete('/:id', deleteCondoHandler)

module.exports = router
