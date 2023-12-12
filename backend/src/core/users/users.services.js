const usersControllers = require('./users.controllers')
const amenenititesControllers = require('../amenities/amenities.controller')

const getAllUsers = (req, res) => {
    usersControllers.getAllUsers()
        .then(data => {
            res.status(200).json(data)
        })
        .catch(err => {
            res.status(400).json(err)
        })
};

const getUserById = (req, res) => {
    const id = req.params.id;
    usersControllers.getUserById(id)
        .then(data => {
            res.status(200).json(data)
        })
        .catch(err => {
            res.status(404).json(err)
        })
};

const registerUser = (req, res) => {
    const {firstName, lastName, email, password, phone, birthday, gender, role, urlImage } = req.body;
    if (firstName && lastName && email && password && phone && birthday) {
        usersControllers.createUser({firstName, lastName, email, password, phone, birthday, gender, role,urlImage })
            .then(data => {
                res.status(201).json(data)
            })
            .catch(err => {
                res.status(400).json({
                   error: err.message
                })
            })
    } else {
        res.status(400).json({
            message: 'Missing data', fields: {
                firstName: 'string',
                lastName: 'string',
                email: 'example@example.com',
                password: 'string',
                phone: '+5212345678',
                birthday: 'YYYY/MM/DD',
                urlImage: 'string'
            }
        })
    }
};

const patchUser = (req, res) => { //? Password change will be through email request
    const id = req.params.id;
    const {firstName, lastName, phone, birthday, gender, country } = req.body; 
    usersControllers.updateUser(id, { firstName, lastName, phone, birthday, gender, country })
        .then(data => {
            if (data[0]) { 
                res.status(200).json({ message: 'User edit correctly' })
            } else {
                res.status(400).json({ message: 'Invalid id' })
            }
        })
        .catch(err => {
            res.status(400).json(err.message)
        })
};

const deleteUser = (req, res) => {
    const id = req.params.id;
    usersControllers.deleteUser(id)
        .then(data => {
            if (data) { 
                res.status(204).json()
            } else {
                res.status(404).json({ message: 'Invalid ID' })
            }
        })
        .catch(err => {
            res.status(400).json(err.message)
        })
};

//? Me - Routes Services

const getMyUser = (req, res) => {
    const id = req.user.id;
    usersControllers.getUserById(id)
        .then(data => {
            res.status(200).json(data)
        })
        .catch(err => {
            res.status(400).json({message: err.message})
        })
}

const patchMyUser = (req, res) => {
    const id = req.user.id;
    const {firstName, lastName, phone, birthday, gender, country} = req.body;
    usersControllers.updateUser(id, {firstName, lastName, phone, birthday, gender, country})
        .then(response => {
            res.status(200).json({response,message: 'User information updated!'})
        })
        .catch(err => {
            res.status(400).json(err.message)
        })
}

const deleteMyUser = (req, res) => {
    const id = req.user.id;
    usersControllers.updateUser(id, {status: 'inactive'})
        .then(data => {
            res.status(200).json({data,message: 'User deleted'})
        })
        .catch(err => {
            res.status(400).json({message: err.message})
        })
}


const getMyReservations = (req, res) => {
    const id = req.user.id;
    amenenititesControllers.getAmenitiesReservationsByUser(id)
        .then(data => {
            res.status(200).json(data)
        })
        .catch(err => {
            res.status(400).json({message: err.message})
        })
}

const editMyReservation = (req, res) => {
    const reservation_id = req.params.reservation_id;
    const user_id = req.user.id;
    const {amenitieId, dateReservation} = req.body;
    let userIdReservation;

        amenenititesControllers.getAmenitieReservationUserId(reservation_id)
        .then(data => {
            userIdReservation = data;
            if(userIdReservation.userId == user_id) {
                amenenititesControllers.editAmenitiesReservationByUser(reservation_id, {amenitieId, dateReservation})
                    .then(response => {
                        res.status(200).json(response)
                    })
                    .catch(err => {
                        res.status(400).json(err.message)
                    })
            } else {
                res.status(400).json({message: 'You can only edit your own reservations'})
            }
            
        })
        .catch(err => {
                    res.status(400).json({message: 'You cannot edit this reservation'})
        })

}

const deleteMyReservation = (req, res) => {
    const reservation_id = req.params.reservation_id;
    const user_id = req.user.id;
    let userIdReservation;

    amenenititesControllers.getAmenitieReservationUserId(reservation_id)
        .then(data => {
            userIdReservation = data;
            if(userIdReservation.userId == user_id) {
                amenenititesControllers.deleteAmenitieReservationByUser(reservation_id)
                    .then(response => {
                        res.status(200).json(response)
                    })
                    .catch(err => {
                        res.status(400).json(err.message)
                    })
            } else {
                res.status(400).json({message: 'You can only delete your own reservations'})
            }
            
        })
        .catch(err => {
                    res.status(400).json({message: 'You cannot delete this reservation'})
        })
}




module.exports = {
    getAllUsers,
    getUserById,
    patchUser,
    registerUser,
    deleteUser,
    getMyUser,
    patchMyUser,
    deleteMyUser,
    getMyReservations,
    editMyReservation,
    deleteMyReservation
}