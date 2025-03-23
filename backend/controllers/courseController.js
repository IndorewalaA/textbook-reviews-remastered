const Course = require('../models/Course');

const addCourse = async (req, res) => {
    if (req.user.role !== 'admin') return res.status(403).json({ message: 'Access denied' });
    try {
        const { courseID, name, professors } = req.body;
        const course = new Course({ courseID, name, professors });
        await course.save();
        res.status(201).json(course);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const getCourses = async (req, res) => {
    try {
        const courses = await Course.find();
        res.status(200).json(courses);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

module.exports = { addCourse, getCourses };
