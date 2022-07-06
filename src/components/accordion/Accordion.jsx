import React, {useState,useEffect} from 'react';
import ProjectLink from '../ProjectsLink';
import AboutLink from '../AboutLink';
import ContactsButton from '../ContactsButton';
import {BsBorderWidth} from 'react-icons/bs'

const Accordion = (props) => {
    const [openMenu,setMenu] = useState(false);

    React.useEffect(() => {
        setMenu(props.isDesktop);
    }, [props.isDesktop])

    return (
    <div style= {props.isDesktop ? {visibility:'hidden'} : {visibility:'visible'}}>
        <ul><BsBorderWidth  onClick={() => setMenu(!openMenu)}/></ul>
        <ul style= {openMenu && !props.isDesktop ? {visibility:'visible'} : {visibility:'hidden'}}>
            <ProjectLink/>
            <AboutLink/>
            <ContactsButton/>
        </ul>
    </div>

    )
}

export default Accordion