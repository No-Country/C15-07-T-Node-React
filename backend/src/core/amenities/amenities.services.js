const amenitiesControllers = require('./amenities.controller')

const getAllAmenities = (req, res) => {
    amenitiesControllers.getAllAmenities()
        .then(data => {
            res.status(200).json(data)
        })
        .catch(err => {
            res.status(400).json(err)
        })
};

const getAmenitieById = (req, res) => {
    const id = req.params.amenitie_id;
    amenitiesControllers.getAmenitieById(id)
        .then(data => {
            res.status(200).json(data)
        })
        .catch(err => {
            res.status(404).json(err)
        })
};

const createAmenitie = (req, res) => {
    const {amenitieName, amenitieImage, capacity } = req.body;
    if(amenitieName && capacity) {
        amenitiesControllers.createAmenitie({amenitieName, capacity, amenitieImage})
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
            message: 'Missing data', fields : {
                amenitieName: 'string',
                capacity: 'integer'
            }
        })
    }
}

const patchAmenitie = (req, res) => {
    const id = req.params.amenitie_id;
    const {amenitieName, capacity} = req.body;
    amenitiesControllers.updateAmenitie(id, {amenitieName, capacity})
        .then(data => {
            if(data[0]) {
                res.status(200).json({message: 'Amenitie edited correctly'})
            } else {
                res.status(400).json({message: 'Invalid ID, or wrong fields',
            fields: {
                amenitieName : 'string',
                capacity: 'integer'
            }

            })
            }
        })
        .catch(err => {
            res.status(400).json(err.message)
        })
}

const deleteAmenitie = (req, res) => {
    const id = req.params.amenitie_id;
    amenitiesControllers.deleteAmenitie(id)
        .then(data => {
            if(data) {
                res.status(204).json()
            } else {
                res.status(404).json({message: 'Invalid ID'})
            }
        })
        .catch(err => {
            res.status(400).json(err.message)
        })
}

const postAmenitieToUser = (req, res) => {
    const userId = req.user.id;
    const {dateReservation} = req.body;
    const amenitieId = req.params.amenitie_id;
    if(dateReservation) {
        amenitiesControllers.addAmenitieToUser({userId, amenitieId, dateReservation})
            .then(data => {
                res.status(201).json(data)
            })
            .catch(err => {
                res.status(400).json({message: err.message})
            })
    } else {
        res.status(400).json({
            message: 'Missing data',
            fields: {
                dateReservation: 'YYYY-MM-DDT12:00:00Z'
            }
        })
    }

}

const getAllAmenitiesReservations = (req, res) => {
    amenitiesControllers.getAllAmenitiesReservations()
        .then(data => {
            res.status(200).json(data)
        })
        .catch(err => {
            res.status(400).json(err.message)
        })
}

const getAmenitiesReservationsByUser = (req, res) => {
    const id = req.params.user_id;
    amenitiesControllers.getAmenitiesReservationsByUser(id)
        .then(data => {
            res.status(200).json(data)
        })
        .catch(err => {
            res.status(400).json(err.message)
        })
}

const getAmenitiesReservationById = (req, res) => {
    const id = req.params.reservation_id;
        amenitiesControllers.getAmenitieReservationByReservationid(id)
            .then(data => {
                res.status(200).json(data)
            })
            .catch(err => {
                res.status(400).json(err.message)
            })
}

const editAmenitiesReservationByUser = (req, res) => {
    const id = req.params.reservation_id;
    const {amenitieId, dateReservation} = req.body;
    amenitiesControllers.editAmenitiesReservationByUser(id,{amenitieId, dateReservation})
        .then(data => {
            if(data[0]) {
                res.status(200).json(data)
            } else {
                res.status(400).json({message: 'Invalid ID, or wrong fields', fields: {
                    amenitieId: 'integer',
                    dateReservation: '2000-01-01 06:00:00.000 -0600'
                }})
            }
        })
        .catch(err => {
            res.status(400).json({error: err.message})
        })
}

const deleteAmenitiesReservationByUser = (req, res) => {
    const id = req.params.reservation_id;
    amenitiesControllers.deleteAmenitieReservationByUser()
        .then(data => {
            res.status(204).json({message: 'Reservation deleted'})
        })
        .catch(err => {
            res.status(400).json({message: err.message})
        })
    
}

module.exports = {
    getAllAmenities,
    getAmenitieById,
    createAmenitie,
    patchAmenitie,
    deleteAmenitie,
    postAmenitieToUser,
    getAllAmenitiesReservations,
    getAmenitiesReservationsByUser,
    editAmenitiesReservationByUser,
    deleteAmenitiesReservationByUser,
    getAmenitiesReservationById
}