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
    const id = req.params.id;
    const {amenitieName, amenitieImage} = req.body;
    amenitiesControllers.updateAmenitie(id, {amenitieName, amenitieImage})
        .then(data => {
            if(data[0]) {
                res.status(200).json({message: 'Amenitie edited correctly'})
            } else {
                res.status(400).json({message: 'Invalid ID'})
            }
        })
        .catch(err => {
            res.status(400).json(err.message)
        })
}

const deleteAmenitie = (req, res) => {
    const id = req.params.id;
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

module.exports = {
    getAllAmenities,
    getAmenitieById,
    createAmenitie,
    patchAmenitie,
    deleteAmenitie,
    postAmenitieToUser,
    getAllAmenitiesReservations,
    getAmenitiesReservationsByUser
}