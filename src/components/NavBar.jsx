import React,{useState} from 'react';
import { useMediaQuery } from 'react-responsive'
import { NavLink } from "react-router-dom";
import {BsBorderWidth,BsXLg} from 'react-icons/bs'
import {BsLinkedin,BsGithub} from "react-icons/bs";
const NavBar = () => {   
    const isDesktop = useMediaQuery({ minWidth: 801 } );
    const [openMenu,setMenu] = useState(false);
    const picSrc = "images/profilePic.jpg";

    return (
        
        <nav>
            <ul className="menu">
                <div className="border flex">
                    <div className="flex">
                        <li><NavLink exact to="/"><img className="profilePic" src={picSrc} alt="Profile Pic"/></NavLink></li>
                        <li><NavLink  exact to="/" className="name">Dylan Au</NavLink></li>
                    </div>
                    <div className="flex-right">
                        <li><button className="hamburger-icon" style= {{ visibility: isDesktop ? "hidden" : "visible"}} onClick={() => setMenu(!openMenu)}>{openMenu ? <BsXLg/> : <BsBorderWidth/>}</button></li>
                    </div>
                </div>
                <div className="menu-links" style= {{visibility: isDesktop || openMenu ? "visible" :"hidden" ,opacity: isDesktop || openMenu ? "1" : "0", maxHeight: isDesktop || openMenu ? "15%" : "0px"}}>
                    <li><NavLink exact to="/" activeClassName="current-page">Projects</NavLink></li>
                    <li><NavLink exact to="/ContactForm" id="form-button">Contact Me</NavLink></li>
                    <div>
                        <li><a href="https://github.com/da593" target="_blank" rel="noopener noreferrer"><BsGithub/></a></li>
                        <li></li><a href="https://www.linkedin.com/in/dylan-au/" target="_blank" rel="noopener noreferrer"><BsLinkedin/></a>
                    </div>
                </div>
            </ul>
            
        </nav>
        
        );
}

export default NavBar;