import React from "react";
import BDOProject from "../components/BDOProject";
import BinaryProject from "../components/BinaryProject";
import PortfolioProject from "../components/PortfolioProject";
import FlappyProject from "../components/FlappyProject";
import Resume from '../images/Resume-DylanAu.pdf';
function Projects() {
    return (
    <div className="content-wrapper">
      <div className="introduction-section">
        <h1>
          Hey, I'm Dylan Au <br/>An Aspiring Software Engineer
        </h1>
        <p className="project-introduction">
        I've developed two websites for gamers and chemical engineer students that quickly solves a popular problem,
        worked on a prediction model with Drexel University's Chemical Engineer Department,
        and I am currently planning my next application.
        </p>
        <a href={Resume} target="_blank" className="download-link" download="Resume-DylanAu.pdf" >Download Resume (PDF)</a>
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