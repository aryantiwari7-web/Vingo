import react, { useContext } from 'react';
import { FaCartArrowDown } from "react-icons/fa";
import { IoMdSearch } from "react-icons/io";
import { FaLocationDot } from "react-icons/fa6";
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { serverUrl } from '../App';
import { AuthContext } from '../hooks/Auth';
import { footer } from './footer.jsx';

const NavBar= () => {
    const {auth, setAuth} = useContext(AuthContext);
    console.log(auth);
    const navigate = new useNavigate();
    const loginPage = async () => {
        await navigate('/signin');
    }
    const logoutPage = async () => {
        await axios.get(`${serverUrl}/api/auth/signout`);
        setAuth(null);
        await navigate('/');
    }
    return (
        <div className='Nav-bar'>
            <div className='heading-location'>
            <div className='heading'>Foodify</div>
            <div className='location-nav'>
            < FaLocationDot/>
            <span>{`${auth?.fullName}`}</span>     
            </div>
            </div>
            <div className='search-login'>
            <div className='Search-bar'>
                <IoMdSearch/>
                <input placeholder='Search here'/>
            </div>
            <div className="account">
            <div className='Cart-logo'> <FaCartArrowDown/> </div>
            { !auth ? 
                    <button onClick={loginPage}>login</button>
                    :
                    <button onClick={logoutPage}>logout</button>
            }
            </div>
            </div>
            <footer/>
        </div>
    )
};

export default NavBar;