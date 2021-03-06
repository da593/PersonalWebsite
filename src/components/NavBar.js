import React from 'react';
import ProfilePic from './ProfilePic';
import Name from './Name';
import ProjectLink from './ProjectsLink';
import AboutLink from './AboutLink';
import ContactsButton from './ContactsButton';

const NavBar = () => {
return (
    
    <div className="navbar">
        <div className="navbar-justify-left">
            <ProfilePic/>
            <ul className="navbar-list">
                <Name/>
            </ul>
        </div>
        <div className="navbar-justify-right">
            <ul className="navbar-list">
                <ProjectLink/>
                <AboutLink/>
                <ContactsButton/>
            </ul>
        </div>
    </div>
    
    );
}

export default NavBar;