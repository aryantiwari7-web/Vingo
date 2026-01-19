import react from 'react';
import { FaCartArrowDown } from "react-icons/fa";
import { IoMdSearch } from "react-icons/io";
import { FaLocationDot } from "react-icons/fa6";
import { useNavigate } from 'react-router-dom';

const NavBar= ({user}) => {
    const navigate = new useNavigate();
    const loginPage = async () => {
        await navigate('/signin');
    }
    return (
        <div className='Nav-bar'>
            <div className='heading-location'>
            <div className='heading'>Foodify</div>
            <div className='location-nav'>
            < FaLocationDot/>
            <spam>{user}</spam>     
            </div>
            </div>
            <div className='search-login'>
            <div className='Search-bar'>
                <IoMdSearch/>
                <input placeholder='Search here'/>
            </div>
            <div className="account">
            <div className='Cart-logo'> <FaCartArrowDown/> </div>
            { !user ? 
                    <button onClick={loginPage}>login</button>
                    :
                    <button onClick={loginPage}>userfound</button>
            }
            </div>
            </div>
        </div>
    )
};

export default NavBar;