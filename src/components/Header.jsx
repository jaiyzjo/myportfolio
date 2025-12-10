import React, {useState} from "react";
import "./Header.css";

export default function Header(){
  const [open,setOpen] = useState(false);
  return (
    <header className="site-header">
      <div className="container header-inner">
        <div className="brand">jaiyzjo</div>

        <nav className={`nav ${open ? "open":""}`}>
          <a href="#home">Home</a>
          <a href="#services">Services</a>
          <a href="#portfolio">Portfolio</a>
          <a href="#about">About</a>
          <a href="#contact" className="cta">Let’s Talk</a>
        </nav>

        <button className="hamburger" onClick={()=>setOpen(!open)} aria-label="menu">☰</button>
      </div>
    </header>
  );
}
