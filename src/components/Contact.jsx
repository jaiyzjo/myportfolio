import React, { useRef, useState } from "react";
import emailjs from "emailjs-com";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./Contact.css";


const SERVICE_ID = "service_04jj9vf";
const TEMPLATE_ID = "template_wtk474o";
const PUBLIC_KEY = "Tlf6aqWy-cMar3gCy";

export default function Contact(){
  const formRef = useRef(null);
  const [sending, setSending] = useState(false);

  const onSubmit = (e)=>{
    e.preventDefault();
    setSending(true);

    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, formRef.current, PUBLIC_KEY)
      .then(()=> {
        toast.success("Message sent ✓");
        formRef.current.reset();
        setSending(false);
      })
      .catch((err)=>{
        console.error(err);
        toast.error("Failed to send. Try again.");
        setSending(false);
      });
  };

  return (
    <section id="contact" className="section contact-section">
      <div className="container" style={{maxWidth:720}}>
        <h2 className="h2" style={{textAlign:"center"}}>Contact Me</h2>
        <p className="muted center" style={{marginBottom:20}}>Have a project in mind? Send a message — I’ll get back to you.</p>

        <form ref={formRef} onSubmit={onSubmit} className="contact-form">
          <input type="text" name="name" placeholder="Full Name" required />
          <input type="email" name="email" placeholder="Email Address" required />
          <textarea name="message" placeholder="Your Message" rows="6" required></textarea>
          <button type="submit" className="btn-primary" disabled={sending}>
            {sending ? "Sending..." : "Send Message"}
          </button>
        </form>
      </div>

      <ToastContainer position="top-center" autoClose={3500} theme="colored" />
    </section>
  );
}
