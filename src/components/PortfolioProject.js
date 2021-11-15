import React, {useState} from "react";
import Picture from "../images/PortfolioWebsite.jpg";
import {BsFillXCircleFill} from "react-icons/bs";


function BDOProject() {
    const [visible,setVisibility] = useState(false);
    const closePopup = () => {
        setVisibility(false)
    }


    return (
    <>
        <div className="project-card" onClick={() => setVisibility(true)}>

            <div className="image-container">
                <img className="card-image" src={Picture} alt="BDO Tracker Site"/>
            </div>

            <div className="project-card-overlay">
                <p className="project-card-company">Dylan Au</p>
                <p className="project-card-title">Personal Portfolio</p>
            </div>
        </div>
        <div className="popup-containers" style={{ display: visible ? 'flex' : 'none' }}>
            <div className="project-card-popup">
                    <button className="close-button" style={{float: "right"}} onClick={() => closePopup()}><BsFillXCircleFill /></button>
                    <div className="image-container-popup">
                        <img className="card-image-popup" src={Picture} alt="BDO Tracker Site"/>
                    </div>

                    <div className="project-card-overlay-popup">
                        <p className="project-card-company-popup">Dylan Au</p>
                        <p className="project-card-title-popup">Personal Portfolio</p>
                        <p className="project-card-description-popup">
                            This website demonstrates everything about me! 
                            It showcases the skills I have developed and the projects that I have worked on and I am proud to share with you.
                        </p>
                        <a href="https://dylanau.netlify.app" target="_blank" rel="noreferrer" className="project-link">Link to site</a>
                        <span id="clever-text"><br/>(but you are already here)</span>
                    </div>
                    <div className="project-card-skills-popup">
                        <div className="skill">
                            JavaScript 
                        </div>
                        <div className="skill">
                            React 
                        </div>
                        <div className="skill">
                             HTML
                        </div>   
                        <div className="skill">
                            CSS 
                        </div>                   
                    </div>
            </div>
        </div>

            </>
    );
  }
  
export default BDOProject;