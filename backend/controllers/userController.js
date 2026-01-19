const User = require("../models/user.model.js");

const getCurrentuser = async (req,res) => {
    try {
        const id=res.userID;
        if(!id){
            return res.status(400).json({message:"Id not found in getCurentUser"});
        }
        const user = User.findById(id);
        if(!user){
            return res.status(400).json({message:"User not found in getCurentUser"});
        }
        return res.status(200).json(user);
    } catch (error) {
        return res.status(400).json({message:`getCurentUser error:${error}`});
    }
}

module.exports = getCurrentuser;