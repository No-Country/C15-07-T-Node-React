const usersServices = require('./users.services');
const router = require('express').Router();
const passport = require('passport');
const adminValidate = require('../../middlewares/rol.middleware');

require('../../middlewares/auth.middleware')(passport)

//? Main Route

router.get('/',usersServices.getAllUsers);

//? Protected routes for each user
router.route('/me')
    .get(passport.authenticate('jwt', {session:false}), usersServices.getMyUser)
    .patch(passport.authenticate('jwt', {session: false}), usersServices.patchMyUser)
    .delete(passport.authenticate('jwt', {session: false}), usersServices.deleteMyUser)
    
router.route('/me/reservations')    
    .get(passport.authenticate('jwt', {session:false}), usersServices.getMyReservations)

router.route('/me/reservations/:reservation_id')
    .patch(passport.authenticate('jwt', {session:false}), usersServices.editMyReservation)
    .delete(passport.authenticate('jwt', {session:false}), usersServices.deleteMyReservation)

router.route('/:id')
    .get(usersServices.getUserById)
    .patch(passport.authenticate('jwt', {session: false}),adminValidate,usersServices.patchUser)
    .delete(passport.authenticate('jwt', {session: false}),adminValidate,usersServices.deleteUser)


module.exports = router
