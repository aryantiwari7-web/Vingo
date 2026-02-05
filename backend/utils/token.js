const jwt=require("jsonwebtoken")
const dotenv=require("dotenv")
dotenv.config()

console.log("tok called");
const genToken = (userId)=>{
    try {
        console.log("Jwt",process.env.JWT_SECRET);
        const token = jwt.sign({userId},process.env.JWT_SECRET,{expiresIn:"7d"})
        console.log(token)
        return token
    } catch (error) {
        console.log(error);
    }
}
console.log("Tok end");
module.exports = genToken;