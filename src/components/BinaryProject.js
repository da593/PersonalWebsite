import React from "react";
import Picture from "../images/binaryWebsite.jpg";

function BDOProject() {
    return (
    <div className="project-card">
        
        <div className="image-container">
            <img className="card-image" src={Picture} />  
        </div>
    
        <div className="project-card-overlay">
            <p className="project-card-company">McCabe-Thiele</p>
            <p className="project-card-title">Binary Distillation Solver</p>
        </div>
    </div>
      
    );
  }
  
export default BDOProject;