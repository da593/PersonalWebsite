import React from "react";
import Picture from "../../images/ship.jpg";
import ProjectCard from './ProjectCard';



function ASRC() {
    const BDOProps = {
        company: "ASRC Federal",
        title: "Associate Software Developer",
        description: `
        I have the pleasure to work with an agile team in the command and control deparment 
        to maintain a messaging infrastructure for navy ships.
        My responsibilities involved working cross-functionally to patch an issue, 
        develop new features to meet requirements,
        particpating in code reviews, 
        and refactoring legacy code for better reusability and extensibility.
          `,
        picture: Picture,
        skills:["C++", "git", "Clearcase", "Jira", "Bitbucket", "Maven,", "Unix"]
    }

    return (
        <ProjectCard
            {...BDOProps}
        />
    );
  }
  
export default ASRC;