import React from 'react'
import './contact_section.css';

const ContactSection = () => {
  return (
    <section className="contact-section">
      <div className="contact-form">
        <h2>Contact Us</h2>
        <form>
          <input type="text" name="name" placeholder="Your Name" required />
          <input type="email" name="email" placeholder="Your Email" required />
          <textarea name="inquiry" placeholder="Your Inquiry" required></textarea>
          <button type="submit">Submit</button>
        </form>
      </div>
    </section>
  );
};

export default ContactSection;
