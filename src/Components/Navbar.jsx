import React, { useContext, useEffect, useState } from "react";
import Logo from '../assets/logo.jpg';
import {NavLink} from 'react-router-dom'
import style from './Navbar.module.css'
import { HiOutlineBars3 } from "react-icons/hi2"
import axios from "axios";
import { AuthProvider } from "../store/Auth";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);

    const {handleLogout} = useContext(AuthProvider)
    const backendUrl = import.meta.env.VITE_BACKEND_URL;
    const [isAuthenticate, setIsAuthenticate] = useState(false)
    useEffect(()=>{
        const fetchToken = async() => {
          const response = await axios.get(`${backendUrl}/getToken`, { withCredentials: true })
          if(response.data.success){
            setIsAuthenticate(true);
          }
        }
        fetchToken();
      },[])

    
  return (
   <>
   <div className={`${style.nav}`} >
    <div className={`${style.navLogo}`} >
        <NavLink to='/'>
        <img src={Logo} alt='Logo' />
        </NavLink>
        <p>ROHTAS PUBLIC SCHOOL</p>
    </div>

    <ul className={`${style.navLinks} ${toggle ? style.activate :''}`}>
        <li> <NavLink to = "/" className={`${style.link}`}>Home</NavLink></li>
        <li> <NavLink to = "/about" className={`${style.link}`}>about </NavLink></li>
        <li> <NavLink to = "/admission" className={`${style.link}`}>admission</NavLink></li>
        <li> <NavLink to = "/gallery" className={`${style.link}`}>gallery</NavLink></li>
        <li> <NavLink to = "/contact" className={` ${style.link}`}>contact</NavLink></li>
        {!isAuthenticate ? <li><NavLink to = "/admin" className={`${style.link}`}>admin</NavLink></li> :
       <li> <button className={`${style.link}`} 
       onClick={()=> handleLogout()}>Logout</button></li> }
    </ul>

    <div className={`${style.navToggle}`}>
        <HiOutlineBars3 className={`${style.navToggle}`} onClick={()=>setToggle(!toggle)}/>
    </div>
   </div>
   </>
  );
};

export default Navbar;