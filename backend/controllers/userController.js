const User = require('../models/User');

// Create a new user (only for first-time login)
const createUser = async (req, res) => {
    try {
        const { firebaseID, email } = req.body;
        console.log('Received data:', firebaseID, email);

        let user = await User.findOne({ firebaseID });
        if (!user) {
            user = new User({ firebaseID, email });
            await user.save();
            console.log('User created and saved:', user);
        }

        res.status(200).json(user);
    } catch (error) {
        console.error('Error creating user:', error);
        res.status(500).json({ error: error.message });
    }
};

// Get current user details
const getCurrentUser = async (req, res) => {
    try {
        const user = await User.findOne({ firebaseID: req.user.uid });
        if (!user) return res.status(404).json({ message: 'User not found' });
        res.status(200).json(user);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

module.exports = { createUser, getCurrentUser };
