const express = require("express");
const { signUP, signIn, signOut, ForgotPassword, sendOtp, VerifyOtp, ResetPass} = require("../controllers/auth.controllers.js");

const app1 = express.Router();
console.log("rought called");
app1.post("/signup", signUP);
app1.post("/signin", signIn);
app1.post("/forgot-page", ForgotPassword);
app1.get("/signout", signOut);
app1.post("/sendOtp", sendOtp);
app1.post("/VeryOtp", VerifyOtp);
app1.post("/ResetPass", ResetPass);

console.log("rought end");
module.exports = app1;
