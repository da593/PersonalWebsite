import React from 'react';
import { NavLink } from "react-router-dom";

const ProjectLink = () => {
return (
    <li className="navbar-item">
        <NavLink exact to="/" activeClassName="current-page">Projects</NavLink>
    </li>

    
    );
}

export default ProjectLink;