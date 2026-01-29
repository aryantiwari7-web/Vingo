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
        const loc=await getCityFromCoords(latitude,longitude);
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
}, []); 

    return (
        <div className='Nav-bar'>
            <div className='heading-location'>
                <div className='heading'>Foodify</div>

                <div className='location-nav' style={{cursor:'pointer'}}>
                    <FaLocationDot />
                    <span>{location}</span>
                </div>
            </div>

            <div className='search-login'>
                <div className='Search-bar'>
                    <IoMdSearch />
                    <input placeholder='Search here' />
                </div>

                <div className="account">
                    <div className='Cart-logo'>
                        <FaCartArrowDown />
                    </div>
                    { auth && auth.role==="owner" &&
                        <button onClick={addItemPage}>Add Item</button>
                    }

                    {!auth ?
                        <button onClick={loginPage}>Login</button>
                        :
                        <button onClick={logoutPage}>Logout</button>
                    }
                </div>
            </div>
        </div>
    );
};

export default NavBar;
