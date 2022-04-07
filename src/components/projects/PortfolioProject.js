import React, {useState} from "react";
import Picture from "../../images/PortfolioWebsite.jpg";

import ProjectCard from "./ProjectCard";


function PortfolioProject() {

    const PortfolioProps = {
        company: "Dylan Au",
        title: "Personal Portfolio",
        description: "This website demonstrates everything about me!" + " " +
        "It showcases the skills I have developed and the projects that I have worked on and I am proud to share with you.",
        picture: Picture,
        link: "https://dylanau.netlify.app",
        skills:["React", "HTML", "CSS"]
    }

    return (
        <ProjectCard {...PortfolioProps}/>
    );
  }
  
export default PortfolioProject;