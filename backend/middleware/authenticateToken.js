const jwt = require('jsonwebtoken');
const User = require('../models/userModel'); // Adjust path based on your project

const authenticateToken = (req, res, next) => {
    const token = req.header('Authorization')?.split(' ')[1]; // Get token from Authorization header

    if (!token) {
        return res.status(401).json({ message: 'Authentication required' });
    }

    jwt.verify(token, process.env.JWT_SECRET, async (err, decoded) => {
        if (err) {
            return res.status(403).json({ message: 'Invalid or expired token' });
        }

        res.status(201).json({message: "Done"});
        // Optionally, attach user data to the request object
        req.user = await User.findById(decoded.id);  // Assuming token contains user ID
        next();
    });
};

module.exports = authenticateToken;
