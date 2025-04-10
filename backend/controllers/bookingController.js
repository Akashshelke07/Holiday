const Booking = require('../models/bookingModel');

const createBooking = async (req, res) => {
    try {
        const {
            fullname, contact, email, destination,
            price, days, totalCost
        } = req.body;

        if (!fullname || !contact || !email || !destination || !price || !days || !totalCost)
            return res.status(400).json({ message: 'All fields are required' });

        const booking = await Booking.create({
            fullname, contact, email, destination,
            price, days, totalCost, user: req.user.id
        });

        res.status(201).json({ message: 'Booking successfully created', booking });
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
