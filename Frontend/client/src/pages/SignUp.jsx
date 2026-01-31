import React, { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import axios from 'axios'
import { serverUrl } from "../App";
import { AuthContext, AuthProvider } from "../hooks/Auth";

function SignUp() {
  const [role, setRole] = useState("user");
  const [pass, setPass] = useState(true);
  const [fullName, setfullName] = useState("");
  const [email, setemail] = useState("");
  const [mobile, setmobile] = useState("");
  const [password, setpassword] = useState("");
  const [shopName, setShopName] = useState("");
  const [shopLocation, setShopLocation] = useState("");
  const {auth,setAuth}=useContext(AuthContext);

  const navigate = useNavigate();

  useEffect(() => {
  if (role !== "owner") {
    setShopName(""); 
  }
}, [role]);

  const handleSignup = async () => {
    try {
      const result= await axios.post(`${serverUrl}/api/auth/signup`,{
        fullName,email,password,mobile,role,shopName,shopLocation
      },{withCredentials:true});
      console.log(result);
      setAuth({fullName,email,password,mobile,role,shopName,shopLocation});
      navigate('/signin');
    } catch (error) {
      console.log(error);
    }
  }

  return (
  <div className="min-h-screen bg-gray-100 flex items-center justify-center px-4">
    <div className="w-full max-w-md bg-white rounded-xl shadow-lg p-6 space-y-4">

      <h2 className="text-3xl font-bold text-center text-orange-500">
        Create Account
      </h2>

      {/* Full Name */}
      <div>
        <label className="w-full text-sm font-medium text-orange-400 mb-1">
          Full Name
        </label>
        <input
          type="text"
          placeholder="Enter full name"
          value={fullName}
          onChange={(e) => setfullName(e.target.value)}
          className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400 focus:border-orange-400 hover:border-orange-400"
        />
      </div>

      {/* Email */}
      <div>
        <label className="block text-sm font-medium text-orange-400 mb-1">
          Email
        </label>
        <input
          type="email"
          placeholder="Enter email"
          value={email}
          onChange={(e) => setemail(e.target.value)}
          className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400  focus:ring-orange-400 focus:border-orange-400 hover:border-orange-400"
        />
      </div>

      {/* Mobile */}
      <div>
        <label className="block text-sm font-medium text-orange-400 mb-1">
          Phone Number
        </label>
        <input
          type="text"
          placeholder="Enter phone number"
          value={mobile}
          onChange={(e) => setmobile(e.target.value)}
          className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400  focus:ring-orange-400 focus:border-orange-400 hover:border-orange-400"
        />
      </div>

      {/* Password */}
      <div>
        <label className="block text-sm font-medium text-orange-400 mb-1">
          Password
        </label>
        <div className="relative">
          <input
            type={pass ? "password" : "text"}
            placeholder="Enter password"
            value={password}
            onChange={(e) => setpassword(e.target.value)}
            className="w-full px-3 py-2 border rounded-lg pr-10 focus:outline-none focus:ring-2 focus:ring-orange-400  focus:ring-orange-400 focus:border-orange-400 hover:border-orange-400"
          />
          <span
            className="absolute right-3 top-1/2 -translate-y-1/2 text-orange-400 cursor-pointer hover:text-orange-600"
            onClick={() => setPass(!pass)}
          >
            {pass ? <FaRegEyeSlash /> : <FaRegEye />}
          </span>
        </div>
      </div>

      {/* Role */}
      <div>
        <label className="block text-sm font-medium text-orange-400 mb-2">
          Role
        </label>
        <div className="flex gap-4 text-sm text-orange-400">
          {["user", "owner", "delivery"].map((r) => (
            <label key={r} className="flex items-center gap-1 cursor-pointer ">
              <input
                type="radio"
                name="role"
                value={r}
                checked={role === r}
                onChange={(e) => setRole(e.target.value)}
                className="accent-orange-600"
              />
              {r.charAt(0).toUpperCase() + r.slice(1)}
            </label>
          ))}
        </div>
      </div>

      {/* Owner fields */}
      {role === "owner" && (
        <>
          <div>
            <label className="block text-sm font-medium text-orange-400 mb-1">
              Shop Name
            </label>
            <input
              type="text"
              placeholder="Enter shop name"
              value={shopName}
              onChange={(e) => setShopName(e.target.value)}
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400  focus:ring-orange-400 focus:border-orange-400 hover:border-orange-400"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-orange-400 mb-1">
              Shop Location
            </label>
            <input
              type="text"
              placeholder="Enter shop location"
              value={shopLocation}
              onChange={(e) => setShopLocation(e.target.value)}
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400  focus:ring-orange-400 focus:border-orange-400 hover:border-orange-400"
            />
          </div>
        </>
      )}

      {/* Submit */}
      <button
        onClick={handleSignup}
        className="w-full bg-orange-500 hover:bg-orange-600 text-white py-2 rounded-lg font-semibold transition"
      >
        Sign Up
      </button>

      {/* Redirect */}
      <p className="text-center text-sm text-gray-600">
        Already have an account?{" "}
        <span
          onClick={() => navigate("/signin")}
          className="text-orange-500 cursor-pointer font-medium hover:text-orange-600"
        >
          Sign In
        </span>
      </p>
    </div>
  </div>
);
}

export default SignUp;
