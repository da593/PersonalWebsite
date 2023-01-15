import React, {useState} from "react";
import {BsFillXSquareFill} from "react-icons/bs";

//Layout and style for each project card.
function ProjectCard(props) {
    const [visible,setVisibility] = useState(false);
    const closePopup = () => {
        setVisibility(false)
    }

    return (
    <>
        <div className="project-card" onClick={() => setVisibility(true)}>
            <img className="project-image" src={props.picture} alt="Failed to load image" aria-hidden="true"/>

            <div className="project-description">
                <p className="project-card-company">{props.company}</p>
                <p className="project-card-title">{props.title}</p>
            </div>
        </div>
        <div className="popup-containers" style={{ display: visible ? 'flex' : 'none' }}>
            <div className="project-card-popup">
                <span>
                    <button className="close-button" onClick={() => closePopup()}><BsFillXSquareFill /></button>
                </span>
                <img className="card-image-popup" src={props.picture} alt="Failed to load image" aria-hidden="true"/>
                
                <div className="project-card-overlay-popup">
                    <p className="project-card-company-popup">{props.company}</p>
                    <p className="project-card-title-popup">{props.title}</p>
                    <p className="project-card-description-popup">{props.description}</p>
                    {props.link ? <a href={props.link} target="_blank" rel="noopener noreferrer" className="project-link">Link to Demonstration </a> : null}
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