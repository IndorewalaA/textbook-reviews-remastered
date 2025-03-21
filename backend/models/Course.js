const mongoose = require('mongoose');

const CourseSchema = new mongoose.Schema({
    courseID: { type: String, required: true, unique: true },
    name: {type: String, required: true},
    professors: [{type: String}],
}, {timestamps: true});

module.exports = mongoose.model('Course', CourseSchema);