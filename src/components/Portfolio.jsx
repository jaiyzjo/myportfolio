import React from "react";
import "./Portfolio.css";

const works = [
  {
    title: "Branding & Graphics",
    img: "veracity.jpg",
    link: "https://www.canva.com/M/MAGiEj42gVk"
  },
  {
    title: "Responsive App UI",
    img: "beacon.jpg",
    link: "https://www.figma.com/design/xmb3edsBHe1OPJT63zb2fN/BEACON?node-id=183-174&p=f&t=OU6lUeE0crqMsF5S-0"
  },
{
    title: "Branding & Graphics",
    img: "/airmax.jpg",
    link: "https://www.figma.com/design/954qe0XVvW6KSH4pMQJuek/Untitled?node-id=0-1&p=f&t=6QnK2F3oCk7EtPBw-0"
  },
];

export default function Portfolio() { return ( <section id="portfolio" className="section portfolio-section"> <div className="container"> <h2 className="h2" style={{ textAlign: "center" }}>My Portfolio</h2> <p className="muted center" style={{ maxWidth: 700, margin: "8px auto 26px" }}> Explore a collection of my UI/UX design projects. </p> <div className="portfolio-filters center" style={{ marginBottom: 20 }}> <button className="filter active">All</button> <button className="filter">UI/UX</button> <button className="filter">Website Design</button> <button className="filter">App Design</button> </div> <div className="portfolio-grid"> {works.map((w, i) => ( <div className="project-card" key={i}> {w.link ? ( <a href={w.link} target="_blank" rel="noopener noreferrer"> <img src={w.img} alt={w.title} /> </a> ) : ( <img src={w.img} alt={w.title} /> )} <div className="project-info"> <div className="project-tag">Design</div> <h3>{w.title}</h3> </div> </div> ))} </div> </div> </section> ); }