import React, {useState} from "react";
import {BsFillXCircleFill} from "react-icons/bs";

//Layout and style for each project card.
function ProjectCard(props) {
    const [visible,setVisibility] = useState(false);
    const closePopup = () => {
        setVisibility(false)
    }

    return (
    <>
        <div className="project-card" onClick={() => setVisibility(true)}>

            <div className="image-container">
                <img className="card-image" src={props.picture} alt="BDO Tracker Site"/>
            </div>

            <div className="project-card-overlay">
                <p className="project-card-company">{props.company}</p>
                <p className="project-card-title">{props.title}</p>
            </div>
        </div>
        <div className="popup-containers" style={{ display: visible ? 'flex' : 'none' }}>
            <div className="project-card-popup">
                    <button className="close-button" style={{float: "right"}} onClick={() => closePopup()}><BsFillXCircleFill /></button>
                    <div className="image-container-popup">
                        <img className="card-image-popup" src={props.picture} alt="BDO Tracker Site"/>
                    </div>

                    <div className="project-card-overlay-popup">
                    <p className="project-card-company-popup">{props.company}</p>
                        <p className="project-card-title-popup">{props.title}</p>
                        <p className="project-card-description-popup">{props.description}</p>
                        <a href={props.link} target="_blank" rel="noopener noreferrer" className="project-link">Link to Demonstration</a>
                    </div>
                    <div className="project-card-skills-popup">
                        {props.skills.map((child,index) => (<div className="skill" key={index}>{child}</div>))}                       
                    </div>
            </div>
        </div>

            </>
    );
  }
  
export default ProjectCard;