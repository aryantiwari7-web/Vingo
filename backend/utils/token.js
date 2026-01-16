const jwt=require("jsonwebtoken")
console.log("tok called");
const genToken = async (userId)=>{
    try {
        const token = await jwt.sign({userId},process.env.JWT_SECRET,{expiresIn:"7d"})
        return token
    } catch (error) {
        console.log(error);
    }
}
console.log("Tok end");
module.exports = genToken;