import React,{useState} from 'react';
import profilePic from "../images/profilePic.jpg";
import Popup from './Popup';
import { useMediaQuery } from 'react-responsive'
import { NavLink } from "react-router-dom";
import {BsBorderWidth,BsXLg} from 'react-icons/bs'

const NavBar = () => {   
    const isDesktop = useMediaQuery({ minWidth: 801 } );
    const [openMenu,setMenu] = useState(false);
    const [openPopup,setPopup] = useState(false);
    
    const closePopup = () => {
        setPopup(false);
        
    }

    const managePopup = () => setPopup(!openPopup);

    return (
        
        <nav>
            <ul className="menu">
                <div className="border flex">
                    <div className="flex">
                        <li><img className="profilePic" src={profilePic} alt="Profile Pic"/></li>
                        <li><p className="name">Dylan Au</p></li>
                    </div>
                    <div className="flex-right">
                        <li><button className="hamburger-icon" style= {{ visibility: isDesktop ? "hidden" : "visible"}} onClick={() => setMenu(!openMenu)}>{openMenu ? <BsXLg/> : <BsBorderWidth/>}</button></li>
                    </div>
                </div>
                <div className="break" style= {{visibility: isDesktop || openMenu ? "visible" :"hidden" ,opacity: isDesktop || openMenu ? "1" : "0", maxHeight: isDesktop || openMenu ? "15%" : "0px"}}>
                    <li className="nav-item"> <NavLink exact to="/" activeClassName="current-page">Projects</NavLink> </li>
                    <li className="nav-item"> <NavLink exact to="/about" activeClassName="current-page">About Me</NavLink> </li>
                    <li className="nav-item"> <button id="contact-button" onClick={() => setPopup(true)}>Contact Me</button> </li>
                </div>
            </ul>
            <Popup openPopup={openPopup} closePopup={closePopup}/>
        </nav>
        
        );
}

export default NavBar;