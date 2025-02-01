const express = require('express');
const { protect } = require('../middleware/authMiddleware');
const { createBooking, getBookings } = require('../controllers/bookingController');
const router = express.Router();

router.post('/bookings', protect, createBooking);
router.get('/getBookings', protect, getBookings);

module.exports = router;
