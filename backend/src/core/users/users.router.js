/**
 * @swagger
 * tags:
 *   name: Users
 *   description: User management
 */

const usersServices = require('./users.services');
const router = require('express').Router();
const passport = require('passport');
const adminValidate = require('../../middlewares/rol.middleware');

require('../../middlewares/auth.middleware')(passport);

//? Main Route

/**
 * @swagger
 * /api/v1/users:
 *   get:
 *     summary: Get all users
 *     tags: [Users]
 *     responses:
 *       '200':
 *         description: Successfully retrieved users
 *       '500':
 *         description: Internal server error
 */
router.get('/', usersServices.getAllUsers); //esto es porque userServices es un objeto

//? Protected routes for each user
/**
 * @swagger
 * /api/v1/users/me:
 *   get:
 *     summary: Get my own user
 *     tags:
 *       - Users
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       '200':
 *         description: Successfully retrieved user
 *         content:
 *           application/json:
 *             example:
 *               id: 12345
 *               username: example_user
 *               email: user@example.com
 *       '401':
 *         description: Unauthorized - Missing or invalid JWT token
 *       '500':
 *         description: Internal server error
 *   patch:
 *     summary: Update my own user
 *     tags:
 *       - Users
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       description: User data to update
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               firstName:
 *                 type: string
 *               lastName:
 *                 type: string
 *               phone:
 *                 type: string
 *               birthday:
 *                 type: string
 *                 format: date
 *               gender:
 *                 type: string
 *                 enum: ['male', 'female', 'other']
 *               country:
 *                 type: string
 *       responses:
 *         '200':
 *           description: Successfully updated user
 *           content:
 *             application/json:
 *               example:
 *                 id: 12345
 *                 username: updated_user
 *                 email: updated_user@example.com
 *                 firstName: Updated
 *                 lastName: User
 *                 phone: '+1234567890'
 *                 birthday: '1990-01-01'
 *                 gender: 'male'
 *                 country: 'USA'
 *         '401':
 *           description: Unauthorized - Missing or invalid JWT token
 *         '500':
 *           description: Internal server error
 *   delete:
 *     summary: Delete my own user
 *     tags:
 *       - Users
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       '204':
 *         description: User successfully deleted
 *       '401':
 *         description: Unauthorized - Missing or invalid JWT token
 *       '500':
 *         description: Internal server error
 */
router
  .route('/me')
  .get(
    passport.authenticate('jwt', { session: false }),
    usersServices.getMyUser
  )
  .patch(
    passport.authenticate('jwt', { session: false }),
    usersServices.patchMyUser
  )
  .delete(
    passport.authenticate('jwt', { session: false }),
    usersServices.deleteMyUser
  );

router
  .route('/me/reservations')
  .get(
    passport.authenticate('jwt', { session: false }),
    usersServices.getMyReservations
  );

router
  .route('/me/reservations/:reservation_id')
  .patch(
    passport.authenticate('jwt', { session: false }),
    usersServices.editMyReservation
  )
  .delete(
    passport.authenticate('jwt', { session: false }),
    usersServices.deleteMyReservation
  );

router
  .route('/:id')
  .get(usersServices.getUserById)
  .patch(
    passport.authenticate('jwt', { session: false }),
    adminValidate,
    usersServices.patchUser
  )
  .delete(
    passport.authenticate('jwt', { session: false }),
    adminValidate,
    usersServices.deleteUser
  );

module.exports = router;
