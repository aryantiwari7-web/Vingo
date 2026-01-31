const express = require("express");
const { signUP, signIn, signOut, ForgotPassword, sendOtp, VerifyOtp, ResetPass, item, addItem,showItem, allShop} = require("../controllers/auth.controllers.js");

const app1 = express.Router();
console.log("rought called");
app1.post("/signup", signUP);
app1.post("/signin", signIn);
app1.post("/forgot-page", ForgotPassword);
app1.get("/signout", signOut);
app1.post("/sendOtp", sendOtp);
app1.post("/VeryOtp", VerifyOtp);
app1.post("/ResetPass", ResetPass);
app1.post("/addItem", addItem);
app1.post("/item/:name", item);
app1.post("/item/showItem/:itemId", showItem);
app1.post("/allShop", allShop);

console.log("rought end");
module.exports = app1;
