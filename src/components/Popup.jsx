import React from 'react';
import {BsGithub} from "react-icons/bs";
import {BsLinkedin} from "react-icons/bs";
import {BsFillXCircleFill} from "react-icons/bs";

const Popup = (props) => {

    return (
        <div className="popup-container" style={{ display: props.openPopup ? 'block' : 'none' }}>
            <div className="popup-content">
                <div className="top-window">
                    <button className="close-button" onClick={() => props.closePopup()}><BsFillXCircleFill /></button>
                </div>
                <div className="popup-header">
                    <p>Contacts</p>
                    <p className="popup-header-content"> <br />questions? Want to hire me? Let me know!</p>
                </div>
                <div className="popup-links">
                    <ul className="popup-list">
                        <li><BsGithub/><a href="https://github.com/da593" target="_blank" rel="noopener noreferrer">&nbsp;My Github</a></li>
                        <li><BsLinkedin/><a href="https://www.linkedin.com/in/dylan-au/" target="_blank" rel="noopener noreferrer">&nbsp;My LinkedIn</a></li>
                    </ul>
                </div>
            </div>
        </div>
        
    )
}

    


    
export default Popup