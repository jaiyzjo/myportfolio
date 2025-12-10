// Footer.jsx
import React from "react";
import "./Footer.css";

export default function Footer(){
  return (
    <footer className="site-footer">
      <div className="container footer-inner">
        <div className="brand">jaiyzjo</div>
        <div className="socials">
          <a href="#">Instagram</a>
          <a href="#">Facebook</a>
          <a href="#">GitHub</a>
        </div>
      </div>
      <div style={{textAlign:"center",padding:"16px 0",color:"#94a3b8",fontSize:13}}>© {new Date().getFullYear()} jaiyzjo — Aspiring Web Developer</div>
    </footer>
  );
}
