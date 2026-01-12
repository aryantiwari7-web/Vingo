const User=require('../models/user.model.js');
const {  genToken } = require('../utils/token.js');

const signUP=async(req,res)=>{
    try {
        const {fullName,email,role,mobile,password}=req.body();
        const user=await User.findOne({email});
        if(User){
            return res.status(400).json({message:"User already exixt"})
        }
        if(mobile.length<10){
            return res.status(400).json({message:"Enter Vaild Number"})
        }
        if(password.length<6){
            return res.status(400).json({message:"Enter atleast 6 digit password"})
        }

        const hashPassword=await bcrypt.hash(password,10);
        user=await User.create({
            fullName,
            email,
            role,
            password:hashPassword
        })

        const token=genToken(user._id);
        

    } catch (error) {
        
    }
}