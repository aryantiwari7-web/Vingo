import React, { useState } from "react";
import { serverUrl } from "../App";
import axios from 'axios'
import { useNavigate } from "react-router-dom";


function ForgotPassword() {
  const navigate = useNavigate();
  const [state, setState] = useState(1);
  const [email, setEmail] = useState("");
  const [otp, setOtp] = useState("");
  const [NewPassword, setNewPassword] = useState("");
  const [CnfPassword, setCnfPassword] = useState("");

  const otpsnd =async ()=>{
        try {
          const result=await axios.post(`${serverUrl}/api/auth/sendOtp`,{
            email
          },{withCredentials:true});
          setState(2);
          console.log(result);
        } catch (error) {
          console.log(error);
        }
  }
  const otpVry =async ()=>{
        try {
          const result=await axios.post(`${serverUrl}/api/auth/VeryOtp`,{
            email,otp
          },{withCredentials:true});
          setState(3);
          console.log(result);
        } catch (error) {
          console.log(error);
        }
  }
  const SetPass =async ()=>{
        try {
          if(NewPassword !== CnfPassword){
            console.log("Make noth the pass equal");
          }
          const result=await axios.post(`${serverUrl}/api/auth/ResetPass`,{
            email,NewPassword
          },{withCredentials:true});
          navigate("/signin");

          console.log(result);
        } catch (error) {
          console.log(error);
        }
  }

  return (
    <>
      {state === 1 && (
        <div className="frt-page">
          <p className="frt-heading">Forgot Password</p>

          <h3>Email</h3>
          <input
            placeholder="Enter Email"
            type="email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />

          <button className="smt_btn" onClick={otpsnd}>Submit</button>
        </div>
      )}
      {state === 2 && (
        <div className="frt-page">
          <p className="frt-heading">Forgot Password</p>

          <h3>OTP</h3>
          <input
            placeholder="Enter OTP"
            type="text"
            onChange={(e) => setOtp(e.target.value)}
            value={otp}
          />

          <button className="smt_btn" onClick={otpVry}>Verify</button>
        </div>
      )}
       {state === 3 && (
        <div className="frt-page">
          <p className="frt-heading">Forgot Password</p>

          <h3>New Password</h3>
          <input
            placeholder="Enter new password"
            type="text"
            onChange={(e) => setNewPassword(e.target.value)}
            value={NewPassword}
            />
            <h3>Confirm Password</h3>
          <input
            placeholder="Confirm password"
            type="text"
            onChange={(e) => setCnfPassword(e.target.value)}
            value={CnfPassword}
          />
    
          <button className="smt_btn"onClick={SetPass}>Submit</button>
          
        </div>
      )}
    </>
  );
}

export default ForgotPassword;
