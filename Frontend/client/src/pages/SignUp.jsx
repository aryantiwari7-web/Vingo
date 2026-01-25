import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import axios from 'axios'
import { serverUrl } from "../App";

function SignUp() {
  const [role, setRole] = useState("user");
  const [pass, setPass] = useState(true);
  const [fullName, setfullName] = useState("");
  const [email, setemail] = useState("");
  const [mobile, setmobile] = useState("");
  const [password, setpassword] = useState("");
  const navigate = useNavigate();

  const handleSignup = async () => {
    try {
      console.log("Entered"); 
      const result= await axios.post(`${serverUrl}/api/auth/signup`,{
        fullName,email,password,mobile,role
      },{withCredentials:true});
      console.log(result);
      navigate('/signin');
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className="Main-box">
      <h3>Name</h3>
      <input placeholder="Enter Full Name" type="text" onChange={(e) => setfullName(e.target.value)} value={fullName}/>

      <h3>Email</h3>
      <input placeholder="Enter Email" type="email" onChange={(e) => setemail(e.target.value)} value={email}/>

      <h3>Phone Number</h3>
      <input placeholder="Enter Phone Number" type="text" onChange={(e) => setmobile(e.target.value)} value={mobile}/>

      <h3>Password</h3>
      <div className="password-wrapper">
        <input
          type={pass ? "password" : "text"}
          placeholder="Enter Password"
          onChange={(e) => setpassword(e.target.value)}
          value={password}
        />
        {pass ? (
          <FaRegEyeSlash
            className="password-icon"
            onClick={() => setPass(false)}
          />
        ) : (
          <FaRegEye
            className="password-icon"
            onClick={() => setPass(true)}
          />
        )}
      </div>

      <h3>Role</h3>
      <div>
        <label>
          <input
            type="radio"
            name="role"
            value="user"
            checked={role === "user"}
            onChange={(e) => setRole(e.target.value)}
          />
          User
        </label>

        <label>
          <input
            type="radio"
            name="role"
            value="owner"
            checked={role === "owner"}
            onChange={(e) => setRole(e.target.value)}
          />
          Owner
        </label>

        <label>
          <input
            type="radio"
            name="role"
            value="delivery"
            checked={role === "delivery"}
            onChange={(e) => setRole(e.target.value)}
          />
          Delivery Boy
        </label>
      </div>

      <button className="smt_btn" onClick={handleSignup}>Submit</button>

      <button className="google_btn">
        <FcGoogle />
        <span>Signup with Google</span>
      </button>

      <p
        style={{ cursor: "pointer", marginTop: "10px" }}
        onClick={() => navigate("/signin")}
      >
        Already have an account? <span style={{color:"#e64323", cursor:'pointer'}}>Sign In</span>
      </p>
    </div>
  );
}

export default SignUp;
