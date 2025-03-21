const mongoose = require('mongoose');

const CourseTextbookSchema = new mongoose.Schema({
    courseID: { type: mongoose.Schema.Types.ObjectId, ref: 'Course', required: true },
    isbn: { type: mongoose.Schema.Types.ObjectId, ref: 'Course', required: true },
}, {timestamps: true});