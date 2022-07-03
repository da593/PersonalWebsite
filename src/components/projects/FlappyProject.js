import React, {useState} from "react";
import Picture from "../../images/FlappyProject.jpg";
import ProjectCard from "./ProjectCard";

function FlappyProject() {

    const FlappyProps = {
        company: "Drexel University",
        title: "FlappyBlock",
        description: `A group of 3 freshman in an engineering course bring you FlappyBlock!
        The game features event key actions, score tracker, and high score tracker for multiple played sessions.
        By leading this team, we finished this project ahead of the 10 week schedule.`,
        picture: Picture,
        link: "https://github.com/da593/FlappyBlock",
        skills:["MATLAB"]
    }

    return (
        <ProjectCard {...FlappyProps}/>
    );
  }
  
export default FlappyProject;