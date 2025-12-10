import React from "react";
import "./Services.css";

export default function Services(){
  const items = [
    {title:"UI/UX Design", desc:"User-centered designs that are visually engaging and functionally seamless."},
    {title:"Web Design", desc:"Responsive websites with modern UI and accessibility in mind."},
    {title:"App Design", desc:"Mobile-first experiences optimized for conversion and delight."},
    {title:"Graphic Design", desc:"Branding and marketing visuals with clean aesthetics."}
  ];
  return (
    <section id="services" className="section services-section">
      <div className="container">
        <h2 className="h2" style={{textAlign:"center"}}>My Design Services</h2>
        <p className="muted center" style={{maxWidth:800, margin:"10px auto 30px"}}>Crafting visually engaging interfaces that are both intuitive and user-centered.</p>

        <div className="services-grid">
          {items.map((it,i)=>(
            <div className="service-card" key={i}>
              <div className="service-icon">🔷</div>
              <h3>{it.title}</h3>
              <p className="muted">{it.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
