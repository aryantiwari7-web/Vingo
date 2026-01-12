const mongoose  = require("mongoose");

const userSchema = new mongoose.Schema({
    fullName:{
        type:String,
        require:true
    },
    email:{
        type:String,
        require:true,
        unique:true
    },
    mobile:{
        type:String,
        require:true
    },
    password:{
        type:String,
    },
    role:{
        type:String,
        required:true,
        enum:["user","owner","deliveryBoy"]
    }
},{ timestamps : true})

const user=mongoose.model("user",userSchema);

export default user;