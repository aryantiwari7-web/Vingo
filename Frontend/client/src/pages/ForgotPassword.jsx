import React, { useState } from "react";

function ForgotPassword() {
  const [state, setState] = useState(3);
  const [email, setEmail] = useState("");
  const [otp, setOtp] = useState("");
  const [NewPassword, setNewPassword] = useState("");
  const [CnfPassword, setCnfPassword] = useState("");

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

          <button className="smt_btn">Submit</button>
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

          <button className="smt_btn">Verify</button>
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

          <button className="smt_btn">Submit</button>
        </div>
      )}
    </>
  );
}

export default ForgotPassword;
