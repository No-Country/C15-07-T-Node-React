const amenitiesServices = require('./amenities.services')
const router = require('express').Router();
const passport = require('passport');
const adminMiddleware = require('../middlewares/rol.middleware');

require('../middlewares/auth.middleware')(passport)

router.route('/')
    .get(amenitiesServices.getAllAmenities)
    .post(passport.authenticate('jwt', {session: false}), adminMiddleware, amenitiesServices.createAmenitie)

router.get('/reservations', passport.authenticate('jwt', {session: false}), adminMiddleware, amenitiesServices.getAllAmenitiesReservations)

router.get('/reservations/:user_id', passport.authenticate('jwt', {session: false}), adminMiddleware, amenitiesServices.getAmenitiesReservationsByUser)

router.route('/:amenitie_id')
    .get(amenitiesServices.getAmenitieById)
    .patch(passport.authenticate('jwt', {session: false}), adminMiddleware, amenitiesServices.patchAmenitie)
    .delete(passport.authenticate('jwt', {session: false}), adminMiddleware, amenitiesServices.deleteAmenitie)

router.post('/:amenitie_id/add_to_user', passport.authenticate('jwt', {session:false}), amenitiesServices.postAmenitieToUser)


module.exports = router