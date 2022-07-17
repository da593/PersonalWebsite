import React,{useState} from 'react';
import profilePic from "../images/profilePic.jpg";
import Popup from './Popup';
import { useMediaQuery } from 'react-responsive'
import { NavLink } from "react-router-dom";
import {BsBorderWidth,BsXLg} from 'react-icons/bs'

const NavBar = () => {   
    const isDesktop = useMediaQuery({ minWidth: 801 } );
    const [openMenu,setMenu] = useState(false);


    return (
        
        <nav>
            <ul className="menu">
                <div className="border flex">
                    <div className="flex">
                        <li><NavLink exact to="/"><img className="profilePic" src={profilePic} alt="Profile Pic"/></NavLink></li>
                        <li><NavLink  exact to="/" className="name">Dylan Au</NavLink></li>
                    </div>
                    <div className="flex-right">
                        <li><button className="hamburger-icon" style= {{ visibility: isDesktop ? "hidden" : "visible"}} onClick={() => setMenu(!openMenu)}>{openMenu ? <BsXLg/> : <BsBorderWidth/>}</button></li>
                    </div>
                </div>
                <div className="break" style= {{visibility: isDesktop || openMenu ? "visible" :"hidden" ,opacity: isDesktop || openMenu ? "1" : "0", maxHeight: isDesktop || openMenu ? "15%" : "0px"}}>
                    <li className="nav-item"> <NavLink exact to="/" activeClassName="current-page">Projects</NavLink> </li>
                    <li className="nav-item"> <NavLink exact to="/about" activeClassName="current-page">About Me</NavLink> </li>
                    <li className="nav-item"> <Popup/> </li>
                </div>
            </ul>
            
        </nav>
        
        );
}

export default NavBar;