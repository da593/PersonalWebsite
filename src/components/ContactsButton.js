import React,{useState} from 'react';
import {BsFillEnvelopeFill} from "react-icons/bs";
import {BsGithub} from "react-icons/bs";
import {BsLinkedin} from "react-icons/bs";
import {BsFillXCircleFill} from "react-icons/bs";

const ContactsButton = ( a = {} ) => {
    const [visible,setVisibility] = useState(false);
    const [copySuccess, setCopySuccess] = useState("");
    
    function copyEmail() {
        navigator.clipboard.writeText("dylanau99@gmail.com");
        setCopySuccess("Copied!")
      }

    const closePopup = () => {
        setVisibility(false)
        setCopySuccess("")
    }
    return (
        <>
            <li className="navbar-item"><button id="contact-button" onClick={() => setVisibility(true)}>Contact Me</button></li>
            <div className="popup-container" style={{ display: visible ? 'block' : 'none' }}>
                    <div className="popup-content">
                        <div className="top-window">
                            <button className="close-button" onClick={() => closePopup()}><BsFillXCircleFill /></button>
                        </div>
                        <div className="popup-header">
                            <p>Contacts</p>
                            <p className="popup-header-content"> <br />questions? Want to hire me? Let me know!</p>
                        </div>
                        <div className="popup-links">
                            <ul className="popup-list">
                                <li><BsFillEnvelopeFill/>
                                    <button id="copy-email" className="copy-button" onClick={copyEmail}>&nbsp;dylanau99@gmail.com
                                    </button>
                                    {copySuccess}
                                </li>
                                <li><BsGithub/><a href="https://github.com/da593" target="_blank" rel="noopener noreferrer">&nbsp;My Github</a></li>
                                <li><BsLinkedin/><a href="https://www.linkedin.com/in/dylan-au/" target="_blank" rel="noopener noreferrer">&nbsp;My LinkedIn</a></li>
                            </ul>
                        </div>
                    </div>
            </div>
        </>
    )
}

    


    
export default ContactsButton