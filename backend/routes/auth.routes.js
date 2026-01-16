const express = require("express");
const { signUP, signIn, signOut, ForgotPassword } = require("../controllers/auth.controllers.js");

const app1 = express.Router();
console.log("rought called");
app1.post("/signup", signUP);
app1.post("/signin", signIn);
app1.post("/forgot-page", ForgotPassword);
app1.get("/signout", signOut);

console.log("rought end");
module.exports = app1;
