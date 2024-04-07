const jwt = require('jsonwebtoken'); 

module.exports = (req, res, next) => {
    const token = req.headers.authorization;
    if (!token) {
        return res.status(401).json({ success: false, message: 'Unauthorized' });
    }

    try {
        const decoded = jwt.verify(token, 'your-secret-key'); 
        req.user = decoded;
        next();
    } catch (err) {
        return res.status(401).json({ success: false, message: 'Invalid token' });
    }
};
