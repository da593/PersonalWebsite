import React from "react";
import Picture from "../../images/BDOWebsite.jpg";
import ProjectCard from './ProjectCard';



function BDOProject() {
    const BDOProps = {
        company: "Black Desert Online",
        title: "Profit Tracker",
        description: `This website helps Black Desert Online players calculate profitability of various popular ingame activities to optimize their daily income.
        It also tracks the history of sales for all microtransactions that is listed on a centralized marketplace
        to help players determine what players are buying with real money and selling on the ingame market.`,
        picture: Picture,
        link: "https://bdotracker.netlify.app/",
        skills:["Python", "Django", "React", "JavaScript", "HTML", "CSS", "MySQL"]
    }

    return (
        <ProjectCard
            {...BDOProps}
        />
    );
  }
  
export default BDOProject;