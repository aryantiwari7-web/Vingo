const mongoose = require("mongoose");
console.log("Uesr called");
const userSchema = new mongoose.Schema(
{
    fullName: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    mobile: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    role: {
        type: String,
        required: true,
        enum: ["user", "owner", "deliveryBoy"]
    }
},
{ timestamps: true }
);

const User = mongoose.model("User", userSchema);
console.log("User return");
module.exports = User;
