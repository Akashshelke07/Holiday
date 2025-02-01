const Destination = require('../models/destinationModel');

const getDestinations = async (req, res) => {
    const destinations = await Destination.find();
    res.json(destinations);
};

module.exports = { getDestinations };
