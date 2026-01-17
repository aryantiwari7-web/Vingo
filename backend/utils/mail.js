const  dotenv = require("dotenv");
dotenv.config();

const nodemailer = require("nodemailer");
const transporter = nodemailer.createTransport({
  service: "Gmail",
  port: 465,
  secure: true, 
  auth: {
    user: process.env.EMAIL,
    pass: process.env.PASS,
  },
});


const sendOtpMail = async (to, otp) => {
  await transporter.sendMail({
    from: process.env.EMAIL,
    to,
    subject: "Reset your password",
    html: `<p>Your OTP for password reset is <b>${otp}</b>. It expires in 5 minutes</p>`
  });
};

module.exports = sendOtpMail;
