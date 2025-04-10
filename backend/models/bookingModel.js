const mongoose = require('mongoose');

const bookingSchema = new mongoose.Schema({
    fullname: {
        type: String,
        required: [true, 'Full name is required'],
        minlength: [3, 'Full name must be at least 3 characters'],
        maxlength: [50, 'Full name must not exceed 50 characters'],
        trim: true
    },
    contact: {
        type: String,
        required: [true, 'Contact number is required'],
        match: [/^[0-9]{10}$/, 'Contact must be a 10-digit number']
    },
    email: {
        type: String,
        required: [true, 'Email is required'],
        lowercase: true,
        trim: true,
        match: [/^\S+@\S+\.\S+$/, 'Please provide a valid email address']
    },
    destination: {
        type: String,
        required: [true, 'Destination is required'],
        minlength: [2, 'Destination must be at least 2 characters'],
        maxlength: [100, 'Destination must not exceed 100 characters']
    },
    price: {
        type: Number,
        required: [true, 'Price is required'],
        min: [0, 'Price must be a positive number']
    },
    days: {
        type: Number,
        required: [true, 'Number of days is required'],
        min: [1, 'Minimum 1 day is required'],
        max: [365, 'Cannot book more than 365 days']
    },
    totalCost: {
        type: Number,
        required: [true, 'Total cost is required'],
        min: [0, 'Total cost must be a positive number']
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }
}, {
    timestamps: true
});

module.exports = mongoose.model('Booking', bookingSchema);
