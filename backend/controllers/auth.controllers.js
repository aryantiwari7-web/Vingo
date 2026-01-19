const User = require('../models/user.model.js');
const bcrypt = require("bcryptjs");
const  genToken  = require('../utils/token.js');
const sendOtpMail = require('../utils/mail.js')
console.log("Auth call");
const signUP = async (req, res) => {
    try {
        console.log("Ya i am in");
        const { fullName, email, role, mobile, password } = req.body;
        let user = await User.findOne({ email });
        if (user) {
            return res.status(400).json({ message: "User already exists" });
        }
        
        if (mobile.length < 10) {
            return res.status(400).json({ message: "Enter valid mobile number" });
        }
        
        if (password.length < 6) {
            return res.status(400).json({ message: "Password must be at least 6 characters" });
        }
        
        const hashPassword = await bcrypt.hash(password, 10);
        
        user = await User.create({
            fullName,
            email,
            role,
            mobile,
            password: hashPassword
        });

        const token = genToken(user._id);
        res.cookie("token", token, {
            secure: false,
            sameSite: "strict",
            maxAge: 7 * 24 * 60 * 60 * 1000,
            httpOnly: true
        });

        return res.status(201).json(user);

    } catch (error) {
        return res.status(500).json({ message: `SignUp error ${error.message}` });
    }
};
const signIn = async (req, res) => {
    try {
        const { email, password } = req.body;
        console.log("backend Signin");

        const user = await User.findOne({ email });
        if (!user) {
            return res.status(401).json({ message: "Invalid email or password" });
        }
        console.log("User in");
        
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(402).json({ message: "Invalid email or password" });
        }
        
        console.log("Pass in");
        const token = await genToken(user._id); 

        res.cookie("token", token, {
            httpOnly: true,
            secure: false,
            sameSite: "lax",
            maxAge: 7 * 24 * 60 * 60 * 1000
        });

        console.log("backend Signin go");

        return res.status(200).json({
            message: "User logged in",
            user: {
                id: user._id,
                email: user.email
            }
        });

    } catch (error) {
        return res.status(500).json({
            message: `Signin error: ${error.message}`
        });
    }
};


const signOut = async (req, res) => {
    try {
        res.clearCookie("token");
        return res.status(200).json({ message: "User logged out" });
    } catch (error) {
        return res.status(500).json({ message: `SignOut error ${error.message}` });
    }
};

const ForgotPassword = async (req,res) =>{
    try {
        res.status(200).json({message : "You are on forgot backend"});
    } catch (error) {
        console.log(error);
    }
}
console.log("Auth End");

const sendOtp = async (req,res) => {
    try {
        const {email} = req.body;
        const user= await User.findOne({email});
        if(!user){
             return res.status(404).json({ message: "User not found" });
        }
        const otp=Math.floor(1000+ Math.random()*9000).toString();
        user.resetOtp=otp;
        user.otpExpires=Date.now()+5*60*1000;
        user.isOtpVerified=false;

        await user.save();
        await sendOtpMail(email,otp);

        return res.status(200).json({message:'OTP send successfully'});
    } catch (error) {
        return res.status(400).json({message:`OTP send error ${error}`});
    }
}
const VerifyOtp = async (req, res) => {
  try {
    const { email, otp } = req.body;

    const user = await User.findOne({ email });
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    if (user.otpExpires < Date.now()) {
      return res.status(410).json({ message: "OTP expired" });
    }

    if (user.resetOtp !== String(otp)) {
      return res.status(400).json({ message: "Invalid OTP" });
    }

    user.isOtpVerified = true;
    user.resetOtp = undefined;
    user.otpExpires = undefined;

    await user.save();

    return res.status(200).json({ message: "OTP verified successfully" });

  } catch (error) {
    return res.status(500).json({ message: "OTP verification failed", error });
  }
};
const ResetPass = async (req, res) => {
  try {
    const { email, NewPassword } = req.body;

    const user = await User.findOne({ email });
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    if (!user.isOtpVerified) {
      return res.status(410).json({ message: "OTP Not set" });
    }

   const hashPassword = await bcrypt.hash(NewPassword, 10);

    user.password=hashPassword;

    await user.save();

    return res.status(200).json({ message: "password change successfully" });

  } catch (error) {
    return res.status(500).json({ message: "Password Chnage failed", error });
  }
};


module.exports = { signUP, signIn, signOut, ForgotPassword, sendOtp, VerifyOtp, ResetPass};
