import React ,{useState} from "react";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";

function SignIn() {
    const [pass, setPass] = useState(true); 

  return (
    <div className="Main-box">
    
    
      <h3>Email</h3>
      <input placeholder="Enter Email" type="email" />

      <h3>Password</h3>
            <div className="password-wrapper">
              <input
                type={pass ? "password" : "text"}
                placeholder="Enter Password"
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
      
      <button className="smt_btn">Submit</button>
    </div>
  );
}

export default SignIn;
