const mongoose = require('mongoose');

const destinationSchema = new mongoose.Schema({
    name: { type: String, required: true },
    description: { type: String },
    price: { type: Number, required: true },
    image: { type: String },
}, { timestamps: true });

module.exports = mongoose.model('Destination', destinationSchema);
