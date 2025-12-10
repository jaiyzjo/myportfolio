import React from "react";
import "./About.css";

export default function About(){
  return (
    <section id="about" className="section about-section">
      <div className="container about-grid">
        
        <div className="about-left">
          <div className="avatar-wrapper">
            {/* Updated image */}
            <img src="/about.jpg" alt="me" />
          </div>
        </div>

        <div className="about-right">
          <h2 className="h2">About Me</h2>
          <p className="muted">
            Passionate UI/UX Designer with a creative approach to crafting intuitive and engaging user experiences.
          </p>

          <div className="skill-list" style={{marginTop:20}}>
            <Skill label="UX" pct="95" color="#ef4444" />
            <Skill label="Website Design" pct="90" color="#fb923c" />
            <Skill label="App Design" pct="75" color="#94a3b8" />
            <Skill label="Graphic Design" pct="85" color="#1e3a8a" />
          </div>
        </div>
        
      </div>
    </section>
  );
}

/* small internal skill component */
function Skill({label,pct,color}){
  return (
    <div className="skill-row">
      <div className="skill-label">{label}</div>
      <div className="skill-bar">
        <div className="skill-fill" style={{width:pct, background:color}}></div>
      </div>
    </div>
  );
}
