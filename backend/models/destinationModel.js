const mongoose = require('mongoose');

const destinationSchema = new mongoose.Schema({
    name: { type: String, required: true },
    description: String,
    price: Number,
    image: String
});

module.exports = mongoose.model('Destination', destinationSchema);
