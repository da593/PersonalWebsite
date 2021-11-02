import React from "react";
import BDOProject from "../components/BDOProject";
import BinaryProject from "../components/BinaryProject";
import PortfolioProject from "../components/PortfolioProject";
import FlappyProject from "../components/FlappyProject";

function Projects() {
    return (
    <div className="content-wrapper">
      <div className="introduction-section">
        <h1>
          Hey, I'm Dylan Au <br/>An Aspiring Software Engineer
        </h1>
        <p className="project-introduction">
        I’ve developed features for millions of users on the Fordpass iOS team, worked on mission planning tools for another planet at NASA, and am currently building Ford’s machine learning platform.
        </p>
        <a href='../images/Resume-DylanAu.pdf' download className="download-link">Download Resume (PDF)</a>
      </div>
      <div className="projects-section">
          <h2 id="project-header">Featured Work</h2>
          <div className="grid-system">
            <div>
              <BDOProject/>
            </div>
            <div>
              <BinaryProject/>
            </div>
            <div>
              <PortfolioProject/>
            </div>
            <div>
              <FlappyProject/>
            </div>
          </div>
         
      </div>
    </div>
      
    );
  }
  
export default Projects;