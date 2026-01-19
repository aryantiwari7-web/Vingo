import axios from "axios";
import React ,{useState} from "react";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";
import { serverUrl } from "../App";
import { useNavigate } from "react-router-dom";

function SignIn() {
    const [pass, setPass] = useState(true); 
    const [password, setPassword] = useState(""); 
    const [email, setemail] = useState(""); 
      const navigate = useNavigate();

    const validate = async () =>{
        try {
          await axios.post(`${serverUrl}/api/auth/signin`,{
            email,
            password
          },{withCredentials:true})
          console.log("Pass 1 point");
          // try {
          //   await axios.get(`${serverUrl}/api/user/current`,{withCredentials:true})
          //   navigate('/');
          // } catch (error) {
          //   console.log(error);
          // }
        } catch (error) {
          console.log(error);
        }
    }

    const forpage = async () =>{
        try {
          await navigate("/forgot-page");
        } catch (error) {
          console.log(error);
        }
    }

  return (
    <div className="Main-box">
    
    
      <h3>Email</h3>
      <input placeholder="Enter Email" type="email" onChange={(e)=> setemail(e.target.value)} value={email}/>

      <h3>Password</h3>
            <div className="password-wrapper">
              <input
                type={pass ? "password" : "text"}
                placeholder="Enter Password"
                onChange={(e)=> setPassword(e.target.value)} value={password}
              />
              {pass ? (
                <FaRegEyeSlash
                  className="password-icon"
                  onClick={() => setPass(!pass)}
                />
              ) : (
                <FaRegEye
                  className="password-icon"
                  onClick={() => setPass(!pass)}
                />
              )}
            </div>

            <p className="pass-link"  onClick={forpage}>
              <span>forgot password</span>
            </p>
      
      <button className="smt_btn" onClick={validate}>Submit</button>
      <p
        style={{ cursor: "pointer", marginTop: "10px" }}
        onClick={() => navigate("/signup")}
      >
        Create an account? <span style={{color:"#e64323", cursor:'pointer'}}>SignUp</span>
        </p>
    </div>
  );
}

export default SignIn;
