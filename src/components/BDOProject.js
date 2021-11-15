import React, {useState} from "react";
import Picture from "../images/BDOWebsite.jpg";
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
                <p className="project-card-company">Black Desert Online</p>
                <p className="project-card-title">Profit Tracker</p>
            </div>
        </div>
        <div className="popup-containers" style={{ display: visible ? 'flex' : 'none' }}>
            <div className="project-card-popup">
                    <button className="close-button" style={{float: "right"}} onClick={() => closePopup()}><BsFillXCircleFill /></button>
                    <div className="image-container-popup">
                        <img className="card-image-popup" src={Picture} alt="BDO Tracker Site"/>
                    </div>

                    <div className="project-card-overlay-popup">
                        <p className="project-card-company-popup">Black Desert Online</p>
                        <p className="project-card-title-popup">Profit Tracker</p>
                        <p className="project-card-description-popup">
                            This website helps Black Desert Online players calculate profitability of various popular ingame activities to optimize their daily income.
                            It also tracks the history of sales for all microtransactions 
                            that is listed on a centralized marketplace to help players determine what players are buying with real money and selling on the ingame market. 
                        </p>
                        <a href="https://da593.pythonanywhere.com/" target="_blank" rel="noreferrer" className="project-link">Link to site</a>
                    </div>
                    <div className="project-card-skills-popup">
                        <div className="skill">
                            Python 
                        </div>
                        <div className="skill">
                            Django 
                        </div>
                        <div className="skill">
                            JavaScript 
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