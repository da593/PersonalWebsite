import React from "react";
import Picture from "../../images/binaryWebsite.jpg";
import ProjectCard from './ProjectCard';


function BinaryProject() {
    const BinaryProps = {
        company: "McCabe-Thiele",
        title: "Binary Distillation Solver",
        description: `This website quickly performs the McCabe-Thiele graphical method to determine the number of stages required for a binary distillation solver.
        With built-in validation, users will always get their answer and are guided with tooltips and notifications to help solve their problem.`,
        picture: Picture,
        link: "https://da593.github.io/ReactBinary/",
        skills:["JavaScript", "React", "HTML", "CSS"]
    }

    return (
        <ProjectCard {...BinaryProps}/>
    );
  }
  
export default BinaryProject;