import React from "react";
import BDOProject from "../components/projects/BDOProject";
import BinaryProject from "../components/projects/BinaryProject";
import PortfolioProject from "../components/projects/PortfolioProject";
import FlappyProject from "../components/projects/FlappyProject";
import Resume from '../images/Resume-DylanAu.pdf';
import ASRC from "../components/projects/ASRC";

function Projects() {
    return (
    <div className="content-wrapper">
      <div className="introduction-section">
        <h1 className="introduction-name">
          Hey, I'm Dylan Au <br/>A Software Engineer from Philly
        </h1>
        <p className="introduction-background"
        >
        I am currently working in the defense industry, maintaining and building a messaging infrastructure for navy ships. 
        I led and built a prediction model in Python as part of a research team at Drexel University.
        In my free time, I have developed websites and apps to quickly and reliably solve common occurring problems.

        </p>
        <a href={Resume} target="_blank" rel="noopener noreferrer" className="download-link" download="Resume-DylanAu.pdf" >Download Resume (PDF)</a>
      </div>
      <div className="projects-section">
          <h2 id="project-header">Featured Work</h2>
          <div className="grid-system">
            <ASRC/>
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