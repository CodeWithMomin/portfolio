import React from "react";


const Contact = () => {
  return (
    <div className="contact-container">
      <h2 className="contact-heading">Contact Me</h2>
      <p className="contact-text">Feel free to reach out to me using the form below.</p>

      <form className="contact-form">
        
        <input type="text" placeholder="Your Name" className="contact-input" required />

        
        <input type="email" placeholder="Your Email" className="contact-input" required />

       
        <textarea placeholder="Your Message" className="contact-textarea" required></textarea>

        <button type="submit" className="contact-button">Send Message</button>
      </form>
    </div>
  );
};

export default Contact;
