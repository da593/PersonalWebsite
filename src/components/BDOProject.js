import React from "react";
import Picture from "../images/BDOWebsite.jpg";

function BDOProject() {
    return (
    <div className="project-card">
        
        <div className="image-container">
            <img className="card-image" src={Picture} />  
        </div>
    
        <div className="project-card-overlay">
            <p className="project-card-company">Black Desert Online</p>
            <p className="project-card-title">Profit Tracker</p>
        </div>
    </div>
      
    );
  }
  
export default BDOProject;