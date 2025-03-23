const admin = require('firebase-admin');

const serviceAccount = require('../config/firebase-admin-sdk.json');
// initialize firebase admin sdk
if (!admin.apps.length) {
    admin.initializeApp({
        credential: admin.credential.cert(serviceAccount),
    });
}

const verifyToken = async(req, res, next) => {
    // Format: Authorization: Bearer <TOKEN>
    const token = req.headers.authorization?.split('Bearer ')[1]; // Extract token  
    if (!token) return res.status(401).json({ message: 'Unauthorized'});

    try {
        const decodedToken = await admin.auth().verifyIdToken(token);
        req.user = decodedToken;
        next();
    } catch (error) {
        console.error(error);
        res.status(403).json({ message: 'Invalid or expired token'});
    }
};

module.exports = verifyToken;
