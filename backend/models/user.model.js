const mongoose = require("mongoose");
console.log("User called");
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
        },
        shopName: {
            type: String,
            default: null
        },
        shopCity: {
            type: String,
            default: null
        },
        resetOtp: {
            type: String
        },
        isOtpVerified: {
            type: Boolean,
            default: false
        },
        otpExpires: {
            type: Date
        },
        cartBox: {
            type: [{
                name: String,
                category: String,
                price: Number,
                description: String,
                image: String,
                shopName: String
            }],
            default: []
        }
    },
    { timestamps: true }
);

const User = mongoose.model("User", userSchema);
console.log("User return");
module.exports = User;
