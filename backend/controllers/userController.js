const User = require('../models/User');

// Create a new user (only for first-time login)
const createUser = async (req, res) => {
    try {
        const { firebaseId, email } = req.body;
        let user = await User.findOne({ firebaseId });
        if (!user) {
            user = new User({ firebaseId, email });
            await user.save();
        }
        res.status(200).json(user);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Get current user details
const getCurrentUser = async (req, res) => {
    try {
        const user = await User.findOne({ firebaseId: req.user.uid });
        if (!user) return res.status(404).json({ message: 'User not found' });
        res.status(200).json(user);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

module.exports = { createUser, getCurrentUser };
