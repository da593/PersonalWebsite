import React from 'react';
import { NavLink } from "react-router-dom";

const AboutLink = () => {
return (
    <li className="navbar-item">
        <NavLink exact to="/about" activeClassName="current-page">About Me</NavLink>
    </li>

    
    );
}

export default AboutLink;