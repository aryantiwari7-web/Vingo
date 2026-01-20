const express = require("express");

const GetCurrentUser = require("../controllers/userController.js");
const IsAuth = require("../middlewares/isAuth.js");

const app2 = express.Router();


app2.get("/current",IsAuth, GetCurrentUser);


module.exports = app2;
