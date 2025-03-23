const Textbook = require('../models/Textbook');

const addTextbook = async (req, res) => {
    if (req.user.role !== 'admin') return res.status(403).json({ message: 'Access denied' });

    try {
        const { isbn, title, author } = req.body;
        const textbook = new Textbook({ isbn, title, author });
        await textbook.save();
        res.status(201).json(textbook);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const getTextbooks = async (req, res) => {
    try {
        const textbooks = await Textbook.find();
        res.status(200).json(textbooks);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

module.exports = { addTextbook, getTextbooks };
