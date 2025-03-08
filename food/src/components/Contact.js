import React from 'react';
import './Contact.css';  
function Contact() {
  return (
    <div className="contact-container">
      <div className="contact-info">
        <h2>Contact Information</h2>
        <p>Address: Sahyadri,Adyar,Mangalore,575003</p>
        <p>Phone: (+91) 123-456-789</p>
        <p>Email: contact@foodfusion.com</p>
        <p>Working Hours: Tue-Sat, 9:00 AM - 10:00 PM</p>
      </div>

      <div className="contact-form">
        <h2>Get in Touch</h2>
        <form>
          <div className="form-group">
            <label>Name:</label>
            <input type="text" placeholder="Your Name" required />
          </div>
          <div className="form-group">
            <label>Email:</label>
            <input type="email" placeholder="Your Email" required />
          </div>
          <div className="form-group">
            <label>Message:</label>
            <textarea placeholder="Your Message" required></textarea>
          </div>
          <button type="submit" className="submit-btn">Submit</button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
