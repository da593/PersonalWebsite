import React, {useState} from "react";
import Picture from "../images/binaryWebsite.jpg";
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
                <p className="project-card-company">McCabe-Thiele</p>
                <p className="project-card-title">Binary Distillation Solver</p>
            </div>
        </div>
        <div className="popup-containers" style={{ display: visible ? 'flex' : 'none' }}>
            <div className="project-card-popup">
                    <button className="close-button" style={{float: "right"}} onClick={() => closePopup()}><BsFillXCircleFill /></button>
                    <div className="image-container-popup">
                        <img className="card-image-popup" src={Picture} alt="BDO Tracker Site"/>
                    </div>

                    <div className="project-card-overlay-popup">
                        <p className="project-card-company-popup">McCabe-Thiele</p>
                        <p className="project-card-title-popup">Binary Distillation Solver</p>
                        <p className="project-card-description-popup">
                            This website quickly performs the McCabe-Thiele graphical method to determine the number of stages required for a binary distillation solver. 
                            With built-in validation, users will always get their answer and are guided with tooltips and notifications to help solve their problem.
                        </p>
                        <a href="https://da593.github.io/ReactBinary/" target="_blank" rel="noopener noreferrer" className="project-link">Link to site</a>
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