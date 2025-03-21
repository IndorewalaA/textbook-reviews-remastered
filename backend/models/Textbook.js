const mongoose = require('mongoose');

const TextbookSchema = new mongoose.Schema({
    isbn: { type: String, required: true, unique: true },
    title: { type: String, required: true },
    authors: [{type: String, required: true}], 
}, {timestamps: true});

module.exports = mongoose.model('Textbook', TextbookSchema);