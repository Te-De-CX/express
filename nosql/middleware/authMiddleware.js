const jwt = require('jsonwebtoken');
const authMiddleware = (req, res, next) => {
    const token = req.header('Authorization');
    if(!token) return res.status(401).json({ message : 'Access denied' });
    try{
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.user = decoded;
        //Attach user info to request 
        next();
        // Continue to the next middleware or route
    } catch (err) {
        res.status(400).json({ message : 'Invalid token' });
    }
}

module.exports = authMiddleware;