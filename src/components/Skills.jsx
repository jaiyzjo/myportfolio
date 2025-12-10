import React from "react";
import "./Skills.css";

function Skills() {
  const skills = [
    "HTML / CSS",
    "JavaScript (ES6+)",
    "React.js",
    "Responsive Design",
    "Git & GitHub"
  ];

  return (
    <section className="skills" id="skills">
      <h2 className="section-title">Skills</h2>
      <div className="skills-list">
        {skills.map((skill, index) => (
          <div className="skill-item" key={index}>
            {skill}
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;
