require('dotenv').config()
const jwt = require('jsonwebtoken');

const authMiddleware = async (req, res, next) => {
    const header = req.headers.authorization;

    if (!header || !header.startsWith("Bearer")) {
        return res.status(401).json({ message: "Unauthorized" });
    }

    const token = header.slice(7);

    try {
        const payload = jwt.verify(token, process.env.JWT_SECRET)
        req.user = { id: payload.sub };
        return next();
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
}

module.exports = { authMiddleware };