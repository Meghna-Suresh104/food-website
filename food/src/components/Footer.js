// src/components/Footer.js
import React from 'react';
import './Footer.css';  // Import the footer styling

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h4>About Us</h4>
          <p>We offer a global dining experience, featuring flavors from around the world, including Italian, Mexican, Indian, and more. Each dish is crafted with authentic ingredients and culinary traditions to bring you the best of international cuisine..</p>
        </div>
        <div className="footer-section">
          <h4>Quick Links</h4>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/menu">Menu</a></li>
            <li><a href="/cart">Cart</a></li>
            <li><a href="/contact">Contact</a></li>
            <li><a href="/about">About</a></li>
            <li><a href="/auth">Login/Sign Up</a></li>
            
          </ul>
        </div>
        <div className="footer-section">
          <h4>Contact</h4>
          <p>Email: support@foodfusion.com</p>
          <p>Phone: +1 234 567 890</p>
          <p>IG:@foodfusion</p>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2024 FoodService. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
