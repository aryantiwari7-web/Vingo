const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");
dotenv.config();

const isAuth = async (req, res, next) => {
    try {
        const token = req.cookies.token;
        if (!token) {
            return res.status(400).json({ message: "token not found or user not login" });
        }
        const decode = jwt.verify(token, process.env.JWT_SECTRET);
        if (!decode) {
            return res.status(400).json({ message: "token not verify"});
        }
        console.log(decode);
        
        req.userID=decode.userID;
        next();

    } catch (error) {
        return res.status(500).json({ message: "isAuth Error"});
    }
}

module.exports = isAuth;