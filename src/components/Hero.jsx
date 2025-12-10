import React from "react";
import "./Hero.css";

export default function Hero(){
  return (
    <section id="home" className="section hero-section">
      <div className="container hero-grid">

        <div className="hero-left">
          <p className="eyebrow">Hi I am Rey Joseph Bagtas</p>
          <h1 className="h1">UI & UX <br/> Designer</h1>
          <p className="lead">
            With a passion for clean, intuitive and effective design — I create digital products that enhance user engagement and leave a lasting impression.
          </p>

          <div className="hero-actions" style={{marginTop:20}}>
            <a href="#contact" className="btn-primary">Contact Us</a>
            <a href="#portfolio" className="btn-outline" style={{marginLeft:12}}>Portfolio</a>
          </div>
        </div>

        <div className="hero-right">
          <div className="hero-card">
            <div className="badge"></div>

            {/* Updated image path */}
           <img src="/hero-photo.jpg" alt="hero" />


            <div className="social-floating">
              <a href="#" className="social"></a>
              <a href="#" className="social"></a>
              <a href="#" className="social"></a>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
