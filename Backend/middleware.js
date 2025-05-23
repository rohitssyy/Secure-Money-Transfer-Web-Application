const jwt = require("jsonwebtoken")
const dotenv = require("dotenv")
dotenv.config(); 


const JWT_SECRET  = process.env.JWT_SECRET
console.log(JWT_SECRET)


const authMiddleware = (req, res, next) => {

    
    const authHeader = req.headers.authorization
    console.log(authHeader)

    if (!authHeader || !authHeader.startsWith("Bearer")) {
        return res.status(403).json({ error: " Error something went wrong with headers/tokens" });
    }

    const token = authHeader.split(' ')[1]

    try {
        const decoded = jwt.verify(token, JWT_SECRET);

        req.userId = decoded.userId
        next();
    

        
    } catch (err) {
        return res.status(403).json({ Error: "Error Something went wrong with tokens" });
    }

}
module.exports = {authMiddleware}