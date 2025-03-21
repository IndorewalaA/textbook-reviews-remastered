const mongoose = require('mongoose');

const ReviewSchema = new mongoose.Schema({
    userID: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true }, 
    courseID: { type: mongoose.Schema.Types.ObjectId, ref: 'Course', required: true },
    isbn: { type: mongoose.Schema.Types.ObjectId, ref: 'Textbook', required: true }, 
    rating: { type: Double, required: true, min: 1, max: 5},
    likes: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }],
    reviewText: { type: String, required: true },
    reviewDate: { type: Date, default: Date.now }
}, {timestamps: true });

ReviewSchema.index({ userID: 1, courseID: 1, isbn: 1}, { unique : true });

module.exports = mongoose.model('Review', ReviewSchema);