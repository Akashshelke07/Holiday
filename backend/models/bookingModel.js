const mongoose = require('mongoose');

// Define the booking schema with required fields
const bookingSchema = new mongoose.Schema({
    fullname: {
        type: String,
        required: true,
        trim: true
    },
    contact: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        trim: true,
        lowercase: true
    },
    destination: {
        type: String,
        required: true,
        trim: true
    },
    price: {
        type: Number,
        required: true
    },
    days: {
        type: Number,
        required: true,
        min: 1
    },
    totalCost: {
        type: Number,
        required: true
    },
    // Optional: Reference to the User model (if you're associating the booking with a user)
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User' // Reference to the User model
    }
}, { timestamps: true }); // Adds createdAt and updatedAt fields automatically

// Create the model
module.exports = mongoose.model('Booking', bookingSchema);
