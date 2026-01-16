const User = require('../models/user.model.js');
const bcrypt = require("bcryptjs");
const  genToken  = require('../utils/token.js');
console.log("Auth call");
const signUP = async (req, res) => {
    try {
        console.log("Ya i am in");
        const { fullName, email, role, mobile, password } = req.body;
        let user = await User.findOne({ email });
        console.log(fullName);
        if (user) {
            return res.status(400).json({ message: "User already exists" });
        }
        console.log(mobile);
        
        if (mobile.length < 10) {
            return res.status(400).json({ message: "Enter valid mobile number" });
        }
        console.log(password);
        
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
        console.log("All Done");

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

        let user = await User.findOne({ email });
        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }

        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(401).json({ message: "Invalid password" });
        }

        const token = genToken(user._id);
        res.cookie("token", token, {
            secure: false,
            sameSite: "strict",
            maxAge: 7 * 24 * 60 * 60 * 1000,
            httpOnly: true
        });

        return res.status(200).json({ message: "User logged in" });

    } catch (error) {
        return res.status(500).json({ message: `SignIn error ${error.message}` });
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
console.log("Auth End");

module.exports = { signUP, signIn, signOut };
