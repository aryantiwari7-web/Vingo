import React, { useContext, useEffect, useState } from 'react';
import { FaCartArrowDown } from "react-icons/fa";
import { IoMdSearch } from "react-icons/io";
import { FaLocationDot } from "react-icons/fa6";
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { serverUrl } from '../App';
import { AuthContext } from '../hooks/Auth';

const NavBar = () => {
    const { auth, setAuth } = useContext(AuthContext);
    const navigate = useNavigate();


    const loginPage = () => {
        navigate('/signin');
    };
    const addItemPage = () => {
        navigate('/addItem');
    };
    const cartPage = () => {
        navigate('/cartPage');
    };

    const logoutPage = async () => {
        await axios.get(`${serverUrl}/api/auth/signout`);
        setAuth(null);
        navigate('/');
    };
    const [location, setLocation] = useState("Your Location");

    const getCityFromCoords = async (lat, lng) => {
        try {
            const res = await fetch(
                `https://nominatim.openstreetmap.org/reverse?format=json&lat=${lat}&lon=${lng}`
            );
            const data = await res.json();

            const city =
                data.address.city ||
                data.address.town ||
                data.address.village ||
                "Unknown location";

            return city;
        } catch (error) {
            console.log(error);
            return "Location not found";
        }
    };


    const getLocation = async (position) => {
        const { latitude, longitude } = position.coords;
        const loc = await getCityFromCoords(latitude, longitude);
        setLocation(loc);
    };

    const notGetLocation = () => {
        setLocation("Enable location 📍");
    };

   useEffect(() => {
    const fetchLocation = () => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
                getLocation,
                notGetLocation
            );
        } else {
            setLocation("Geolocation not supported");
        }
    };

    fetchLocation();
}, [getLocation, notGetLocation, setLocation]);


    return (
        <div className="w-full bg-white/80 backdrop-blur-md shadow-md sticky top-0 z-50 ">
            <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">

                <div className="flex items-center gap-6">
                    <div
                        className="text-2xl font-extrabold text-orange-500 cursor-pointer"
                        onClick={() => navigate('/')}
                    >
                        Foodify
                    </div>

                    <div className="hidden sm:flex items-center gap-1 text-sm text-gray-600 cursor-pointer">
                        <FaLocationDot className="text-orange-500" />
                        <span className="font-medium">{location}</span>
                    </div>
                </div>

                <div className="hidden md:flex flex-1 justify-center px-6">
                    <div className="flex items-center w-full max-w-md bg-gray-100 rounded-full px-4 py-2 focus-within:ring-2 focus-within:ring-orange-400">
                        <IoMdSearch className="text-gray-500 text-lg" />
                        <input
                            placeholder="Search here"
                            className="bg-transparent outline-none px-2 w-full text-sm"
                        />
                    </div>
                </div>

                
                <div className="flex items-center gap-4">
                    <div className="relative cursor-pointer text-gray-700 hover:text-orange-500 transition">
                        <FaCartArrowDown className="text-xl" onClick={cartPage}/>
                    </div>

                    {auth && auth.role === "owner" && (
                        <button
                            onClick={addItemPage}
                            className="hidden sm:block bg-orange-100 text-orange-600 px-3 py-1.5 rounded-lg text-sm font-semibold hover:bg-orange-200 transition"
                        >
                            Add Item
                        </button>
                    )}

                    {!auth ? (
                        <button
                            onClick={loginPage}
                            className="bg-orange-500 text-white px-4 py-1.5 rounded-lg text-sm font-semibold hover:bg-orange-600 hover:scale-110 transition"
                        >
                            Login
                        </button>
                    ) : (
                        <button
                            onClick={logoutPage}
                            className="bg-orange-500 text-white px-4 py-1.5 rounded-lg text-sm font-semibold hover:bg-orange-600 hover:scale-110 transition"          >
                            Logout
                        </button>
                    )}
                </div>
            </div>

            {/* Mobile Search */}
            <div className="md:hidden px-4 pb-3">
                <div className="flex items-center bg-gray-100 rounded-full px-4 py-2 focus-within:ring-2 focus-within:ring-orange-400">
                    <IoMdSearch className="text-gray-500 text-lg" />
                    <input
                        placeholder="Search here"
                        className="bg-transparent outline-none px-2 w-full text-sm"
                    />
                </div>
            </div>
        </div>
    );
};

export default NavBar;
