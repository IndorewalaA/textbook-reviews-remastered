const Review = require('../models/Review');

const addReview = async (req, res) => {
    try {
        const { courseID, isbn, rating, reviewText } = req.body;
        const review = new Review({
            userID: req.user.uid,
            courseID,
            isbn,
            rating,
            reviewText
        });
        await review.save();
        res.status(201).json(review);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const getReviews = async (req, res) => {
    try {
        const { isbn } = req.params;
        const reviews = await Review.find({ isbn }).populate('userID', 'email');
        res.status(200).json(reviews);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

module.exports = { addReview, getReviews };
