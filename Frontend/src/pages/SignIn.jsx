import axios from "axios";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";
import { serverUrl } from "../App";
import { useNavigate } from "react-router-dom";
import '../index.css';

import { AuthContext } from "../hooks/Auth.jsx";
import { CartContext } from "../hooks/Cart.jsx";
import { useContext, useState } from "react";

function SignIn() {
  const [pass, setPass] = useState(true);
  const [password, setPassword] = useState("");
  const [email, setemail] = useState("");
  const { setAuth } = useContext(AuthContext);
  const { setCart} = useContext(CartContext);

  const navigate = useNavigate();

  const validate = async () => {
    try {
      console.log("Pass 1 point");
      await axios.post(`${serverUrl}/api/auth/signin`, {
        email,
        password
      }, { withCredentials: true })

      console.log("Pass 2 point");

      try {
        console.log("current call")
        const user = await axios.get(`${serverUrl}/api/user/current`, { withCredentials: true })
        console.log("current back");
        
        setAuth(user.data);
        setCart(user.data.cartBox);
        
        navigate('/');

      } catch (error) {
        console.log(error);
      }
    } catch (error) {
      console.log(error);
    }
  }

  const forpage = async () => {
    try {
      await navigate("/forgot-page");
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col justify-center items-center px-4">
      <div className="max-w-md w-full bg-white rounded-xl shadow-lg p-8 space-y-6">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-[#ff6b00]">Welcome Back</h2>
          <p className="text-[#ff6b00] mt-2">Sign in to your account</p>
        </div>
        
        <div className="space-y-4">
          <div>
            <label className="block text-orange-500 text-sm font-bold mb-2">
              Email
            </label>
            <input 
              className="w-full px-4 py-3 border border-gray-400 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none transition hover:border-orange-400 "
              placeholder="Enter Email" 
              type="email" 
              onChange={(e) => setemail(e.target.value)} 
              value={email} 
            />
          </div>

          <div>
            <label className="block text-orange-500 text-sm font-bold mb-2">
              Password
            </label>
            <div className="relative">
              <input
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none transition pr-12 hover:border-orange-400"
                type={pass ? "password" : "text"}
                placeholder="Enter Password"
                onChange={(e) => setPassword(e.target.value)} 
                value={password}
              />
              <div className="absolute inset-y-0 right-0 flex items-center pr-3">
                {pass ? (
                  <FaRegEyeSlash
                    className="text-orange-400 hover:text-orange-600 cursor-pointer transition"
                    onClick={() => setPass(!pass)}
                  />
                ) : (
                  <FaRegEye
                    className="text-orange-400 hover:text-orange-600 cursor-pointer transition"
                    onClick={() => setPass(!pass)}
                  />
                )}
              </div>
            </div>
          </div>

          <div className="flex justify-end">
            <p 
              className="text-orange-400 hover:text-orange-800 text-sm font-medium cursor-pointer transition"
              onClick={forpage}
            >
              Forgot password?
            </p>
          </div>

          <button 
            className="w-full bg-orange-500 hover:bg-orange-700 text-white font-semibold py-3 px-4 rounded-lg transition duration-200"
            onClick={validate}
          >
            Submit
          </button>
        </div>

        <div className="text-center pt-4 border-t border-gray-200">
          <p className="text-gray-600">
            Create an account?{" "}
            <span 
              className="text-orange-400 hover:text-orange-700 font-medium cursor-pointer transition"
              onClick={() => navigate("/signup")}
            >
              SignUp
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default SignIn;