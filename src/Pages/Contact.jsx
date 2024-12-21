import React from "react";
import "./Contact.css";

const Contact = () => {
  return (
    <div className="contact-page">
      {/* Contact Hero Section */}
      <section className="contact-hero">
        <h1>Contact Us</h1>
        <p>We’re here to help and answer any questions you may have.</p>
      </section>

      {/* Contact Details Section */}
      <section className="contact-details">
        <h2>Get in Touch</h2>
        <div className="details-grid">
          <div className="detail-card">
            <h3>Address</h3>
            <p>Moresara, Sasaram, Rohtas, Bihar, India, 821115</p>
          </div>
          <div className="detail-card">
            <h3>Phone</h3>
            <p>+91 9334029676</p>
          </div>
          <div className="detail-card">
            <h3>Email</h3>
            <p>rpsm046@gmail.com</p>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="contact-form-section">
        <h2>Send Us a Message</h2>
        <form className="contact-form">
          <input type="text" placeholder="Your Name" required />
          <input type="email" placeholder="Your Email" required />
          <textarea placeholder="Your Message" rows="5" required></textarea>
          <button type="submit" className="btn-primary">Send Message</button>
        </form>
      </section>

      {/* Footer Section */}
      <footer className="contact-footer">
        <p>© 2024 Rohtas Public School. All Rights Reserved.</p>
      </footer>
    </div>
  );
};

export default Contact;
