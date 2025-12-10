import React from "react";
import "./Projects.css";

function Projects() {
  const projectList = [
    {
      title: "Portfolio Website",
      desc: "A modern personal portfolio built using React.",
      link: "#",
    },
    {
      title: "Landing Page Design",
      desc: "Responsive landing page with clean UI/UX.",
      link: "#",
    },
    {
      title: "Mini Web App",
      desc: "Simple interactive web app using JavaScript.",
      link: "#",
    },
  ];

  return (
    <section className="projects" id="projects">
      <h2 className="section-title">Projects</h2>
      <div className="project-container">
        {projectList.map((project, index) => (
          <div className="project-card" key={index}>
            <h3>{project.title}</h3>
            <p>{project.desc}</p>
            <a href={project.link} className="project-btn">View Project</a>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
