const Booking = require('../models/bookingModel');

// const createBooking = async (req, res) => {
//     const { destination, date, guests } = req.body;
//     if (!destination || !date || !guests) return res.status(400).json({ message: 'All fields are required' });

//     const booking = await Booking.create({ user: req.user.id, destination, date, guests });
//     res.status(201).json(booking);
// };
// const Booking = require('../models/Booking'); // Adjust the import based on your project structure

const createBooking = async (req, res) => {
    try {
        const {
            fullname,
            contact,
            email,
            destination,
            price,
            days,
            totalCost
        } = req.body;

        // Check if all required fields are provided
        if (!fullname || !contact || !email || (!destination && !customDestination) || !price || !days) {
            return res.status(400).json({ message: 'All fields are required' });
        }

        // Create a new booking entry
        const booking = await Booking.create({
            fullname,
            contact,
            email,
            destination,
            price,
            days,
            totalCost,
            // Assuming you have a user field from authentication (optional)
            // user: req.user.id, 
        });

        res.status(201).json({
            message: 'Booking successfully created',
            booking
        });
    } catch (error) {
        console.error('Error creating booking:', error);
        res.status(500).json({ message: 'Server error' });
    }
};

const getBookings = async (req, res) => {
    const bookings = await Booking.find({ user: req.user.id });
    res.json(bookings);
};

module.exports = { createBooking, getBookings };
