import React, {useState} from "react";
import Picture from "../images/FlappyProject.jpg";
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
                <p className="project-card-company">Drexel University</p>
                <p className="project-card-title">FlappyBlock</p>
            </div>
        </div>
        <div className="popup-containers" style={{ display: visible ? 'flex' : 'none' }}>
            <div className="project-card-popup">
                    <button className="close-button" style={{float: "right"}} onClick={() => closePopup()}><BsFillXCircleFill /></button>
                    <div className="image-container-popup">
                        <img className="card-image-popup" src={Picture} alt="BDO Tracker Site"/>
                    </div>

                    <div className="project-card-overlay-popup">
                        <p className="project-card-company-popup">Drexel University</p>
                        <p className="project-card-title-popup">FlappyBlock</p>
                        <p className="project-card-description-popup">
                        A group of 3 freshman in an engineering course bring you FlappyBlock! 
                        The game features event key actions, score tracker, and high score tracker for multiple played sessions. 
                        By leading this team, we finished this project ahead of the 10 week schedule.
                        
                        </p>
                        <a href="https://github.com/da593/FlappyBlock" target="_blank" rel="noopener noreferrer" className="project-link">Link to code on GitHub</a>
                    </div>
                    <div className="project-card-skills-popup">
                        <div className="skill">
                            MATLAB 
                        </div>
                                         
                    </div>
            </div>
        </div>

            </>
    );
  }
  
export default BDOProject;