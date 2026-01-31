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
 <div className="min-h-screen flex justify-center items-center bg-gray-100 px-4">
    {state === 1 && (
  <div className="w-full max-w-md flex flex-col space-y-5 rounded-xl border bg-white p-6 shadow-md">
      <div className="space-y-4">
        <p className="text-orange-500 font-bold text-3xl text-center">
          Forgot Password
        </p>

        <div>
          <h3 className="block text-sm font-medium text-orange-400 mb-1 pt-5">
            Email
          </h3>
          <input
            placeholder="Enter Email"
            type="email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            className="w-full cursor-pointer border rounded-lg px-3 py-2
                       hover:border-orange-400
                       focus:ring-2 focus:ring-orange-400
                       focus:border-orange-600
                       transition outline-none"
          />
        </div>

        <button
          onClick={otpsnd}
          className="w-full rounded-xl bg-orange-600 hover:bg-orange-700
                     focus:bg-orange-800 text-white font-bold py-2 transition"
        >
          Submit
        </button>
      </div>
  </div>
    )}

      {state === 2 && (
      <div className="w-full max-w-md flex flex-col space-y-5 rounded-xl border bg-white p-6 shadow-md">
        <div className="space-y-2">
          <p className="text-orange-500 font-bold text-3xl text-center">Forgot Password</p>

          <h3 className="block text-sm font-medium text-orange-400 mb-1 pt-5">OTP</h3>
          <input
            placeholder="Enter OTP"
            type="text"
            onChange={(e) => setOtp(e.target.value)}
            className="w-full cursor-pointer border rounded-lg px-3 py-2
                       hover:border-orange-400
                       focus:ring-2 focus:ring-orange-400
                       focus:border-orange-600
                       transition outline-none"
            value={otp}
          />

          <button className="w-full rounded-xl bg-orange-600 hover:bg-orange-700
                     focus:bg-orange-800 text-white font-bold py-2 transition" onClick={otpVry}
          >Verify</button>
        </div>
      </div>
      )}
       {state === 3 && (
         <div className="w-full max-w-md flex flex-col space-y-5 rounded-xl border bg-white p-6 shadow-md">
        <div className="space-y-2">
          <p className="text-orange-500 font-bold text-3xl text-center">Forgot Password</p>

          <h3 className="text-orange-500 font-bold text-1xl">New Password</h3>
          <input
            placeholder="Enter new password"
            type="text"
            onChange={(e) => setNewPassword(e.target.value)}
            value={NewPassword}
                        className="w-full cursor-pointer border rounded-lg px-3 py-2
                       hover:border-orange-400
                       focus:ring-2 focus:ring-orange-400
                       focus:border-orange-600
                       transition outline-none"
            />
            <h3 className="text-orange-500 font-bold text-1xl">Confirm Password</h3>
          <input
            placeholder="Confirm password"
            type="text"
            onChange={(e) => setCnfPassword(e.target.value)}
            value={CnfPassword}
                        className="w-full cursor-pointer border rounded-lg px-3 py-2
                       hover:border-orange-400
                       focus:ring-2 focus:ring-orange-400
                       focus:border-orange-600
                       transition outline-none"
          />
    
          <button className="w-full rounded-xl bg-orange-600 hover:bg-orange-700 focus:bg-orange-800 text-white font-bold py-2 transition mt-3" onClick={SetPass}>Submit</button>
          
        </div>
      </div>
      )}
      </div>
    </>
  );
}

export default ForgotPassword;
