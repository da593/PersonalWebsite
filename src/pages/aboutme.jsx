import React from "react";
import Resume from '../images/Resume-DylanAu.pdf';

function About() {
/**
 * This renders an item in the table of contents list.
 * scrollIntoView is used to ensure that when a user clicks on an item, it will smoothly scroll.
 */
 const Headings = ({ headings, activeId }) => (
  <ul>
    {headings.map((heading) => (
      <li key={heading.id}>
        <a
          href={`#${heading.id}`}
          onClick={(e) => {
            e.preventDefault();
            document.querySelector(`#${heading.id}`).scrollIntoView({
              behavior: "smooth"
            });
          }}
        >
          {heading.title}
        </a>
      </li>
    ))}
  </ul>
);

/**
 * Dynamically generates the table of contents list, using any H2s and H3s it can find in the main text
 */
const useHeadingsData = () => {
  const [nestedHeadings, setNestedHeadings] = React.useState([]);

  React.useEffect(() => {
    const headingElements = Array.from(
      document.querySelectorAll("h1")
    );
      
    // Created a list of headings, with H3s nested
    const newNestedHeadings = getNestedHeadings(headingElements);
    setNestedHeadings(newNestedHeadings);
  }, []);

  return { nestedHeadings };
};

const getNestedHeadings = (headingElements) => {
  const nestedHeadings = [];

  headingElements.forEach((heading) => {
    const { innerText: title, id } = heading;
    nestedHeadings.push({ id, title, items: [] });
  });

  return nestedHeadings;
};

/**
 * Renders the table of contents.
 */
const TableOfContents = () => {
  
  const { nestedHeadings } = useHeadingsData();
  
  return (
    <nav aria-label="Table of contents" className="TableOfContents">
      <Headings headings={nestedHeadings}/>
    </nav>
  );
};
  
  return (
    <div>
      <TableOfContents/>
      <div className="section-wrapper">
        <div className="section" id="introduction-about">
          <h1 className="section-header" id="introduction-section">Introduction</h1>
          <p className="introduction-description">
            Hello! I am Dylan Au from Upper Darby, PA. I am currently looking to work as a software engineer. I recently graduated from Drexel University with a Bachelors in Chemical Engineering.
            At Drexel, I worked as a lab assistant which was great hands-on experience working at a plant. However it made me realize that I love problem-solving, I am comfortable at a computer,
            and computers are great at solving problems.
            <br />
            <br />
            This has led me to take a majority of the software engineer minor curriculum.
            With this knowledge, I developed various websites and helped my chemical engineer department build a Python script which are outlined below!
          </p>
          <a href={Resume} target="_blank" rel="noopener noreferrer" className="download-link" download="Resume-DylanAu.pdf" >Download Resume (PDF)</a>
        </div>
      </div>

      <div className="section-wrapper">
        <div className="section">
          <h1 className="section-header" id="skills-section">Skills</h1>
          <h2 className="list-header">Technical Skills</h2>
          <h2 className="list-header">Non-technical Skills</h2>
          <ul className="skills-list">
            <li>Academic experience with Java and Python</li>
            <li>Professional experience working with user-requirements</li>
            <li>Web development using JavaScript, HTML, CSS, and React</li>
            <li>Took courses related to software architecture, Unix, and data structures</li>
            <li>Knowledge of SQL queries and relational databases</li>
          </ul>
          <ul className="skills-list">
            <li>Leadership, planning, and proactivity skills developed and utilize throughout my academic career through group projects, homework assignments, and clubs</li>
            <li>Self-motivation to succeed and perservere starting with 3 years of indoor and outdoor track and desire to become a software engineer by building various web applications </li>
          </ul>
        </div>
      </div>
      
      <div className="section-wrapper">
        <div className="section">
          <h1 className="section-header" id="work-section">Work Experience</h1>
          <div className="job-description">
          <h3>Drexel University <span className="work-period">January 2020 - May 2021</span></h3>
          <h3>Script Developer</h3>
          <ul className="job-list">
            <li>Implemented a stock-driven dynamic material flow assessment to predict future waste production from solar panels</li>
            <li>Created unit tests cases to test and debug the complex algorithm to ensure it meets the model’s requirements</li>
            <li> Wrote a supporting information document tailored to a non-technical audience or researchers, guiding them on the 
            algorithm and how to run the model in Juypter Notebook.</li>
          </ul>
          </div>
          <div className="job-description">
          <h3>Philadelphia Water Department<span className="work-period">October 2018 - March 2019</span></h3>
          <h3>Laboratory Assistant Co-op</h3>
          <ul className="job-list">
            <li>Communicated and collaborated effectively with lab technicians to complete timely tasks with limited equipment.</li>
            <li>Took ownership of chain of custody sheets for industrial waste test samples entering the plant. </li>
          </ul>
          </div>
        </div>
      </div>

      <div className="section-wrapper">
        <div className="section">
          <h1 className="section-header" id="project-section">Projects</h1>
          <div className="job-description">
          <h3>BDO Tracker <span className="work-period">August 2021 – September 2021</span></h3>
          <h3>Web Developer (Django, HTML, CSS JavaScript, MySQL) </h3>
          <ul className="job-list">
            <li>Built a website to help users optimize their daily income by tracking the most profitable items for various activities</li>
            <li> Provided users updated item information by producing a scheduled python script that updates the database every 16 
              minutes from a POST API request</li>
          </ul>
          </div>
          <div className="job-description">
          <h3>Binary Distillation Solver<span className="work-period">October 2021 – October 2021</span></h3>
          <h3>Web Developer (HTML, CSS JavaScript, React) </h3>
          <ul className="job-list">
            <li>Built an interactive website that solves for the number of stages required for a binary distillation column</li>
            <li> Implemented input validation, tooltips, and alerts to guide users alongside a dynamic graph to demonstrate the McCabe-Thiele method</li>
          </ul>
          </div>
          <div className="job-description">
          <h3>Interactive Calculator<span className="work-period">February 2021 – February 2021</span></h3>
          <h3>Software Engineer (Java)</h3>
          <ul className="job-list">
            <li>Designed and implemented an interactive calculator with a GUI using Java AWT package</li>
            <li>Utilized a client-server model, visitor pattern, state pattern, and model-view-controller architecture to optimize 
                performance, manageability, and quality of the code</li>
          </ul>
          </div>
          <div className="job-description">
          <h3>FlappyBlock<span className="work-period">January 2018 - March 2018</span></h3>
          <h3>Project Manager and Lead Developer (MATLAB)   </h3>
          <ul className="job-list">
            <li> A MATLAB side-scrolling game with keyboard input, scoreboard, and collision detection inspired by FlappyBird</li>
            <li> Organized and lead team meetings discussing project milestones and deadlines</li>
          </ul>
          </div>
        </div>
      </div>
      <div className="section-wrapper">
        <div className="section">
          <h1 className="section-header" id="other-section">Other</h1>
          <ul className="other-list">
              <li>Volunteered around the Greater Philadelphia Area helping with big events such as the Special Olympics and Philadelphia Marathon</li>
              <li>3 years of indoor and outdoor track doing mid-distance events (200m,400m, and 800m) </li>
              <li>Love playing games and watching basketball highlights!</li>
              
          </ul>
        </div>
      </div>
      
    </div>

  );
}

export default About;