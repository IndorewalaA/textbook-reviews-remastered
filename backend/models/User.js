const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    firebaseID: { type: String, required: true, unique: true },
    email: { type: String, required: true, unique: true },
    role: { type: String, enum: ['admin', 'user'], default: 'user' },
}, {timestamps: true});

module.exports = mongoose.model('User', UserSchema);
