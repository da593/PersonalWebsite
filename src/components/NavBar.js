import React from 'react';
import ProfilePic from './ProfilePic';
import Name from './Name';
import ProjectLink from './ProjectsLink';
import AboutLink from './AboutLink';
import ContactsButton from './ContactsButton';
import Accordion from './accordion/Accordion';
import { useMediaQuery } from 'react-responsive'

const NavBar = () => {   
    const isDesktop = useMediaQuery({ minWidth: 1200 } );

    return (
        
        <div className="navbar">
            <div className="navbar-justify-left">
                <ProfilePic/>
                <ul className="navbar-list">
                    <Name/>
                </ul>
            </div>
            <Accordion isDesktop={isDesktop}/>
            <div className="navbar-justify-right" style={isDesktop ? {visibility:'visible'} : {visibility:'hidden'}}>
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