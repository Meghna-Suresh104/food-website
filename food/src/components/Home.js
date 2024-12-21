// src/components/Home.js
import React from 'react';
import { Link } from 'react-router-dom';
import Carousel from './Carousel';  // Import the Carousel component
import './Home.css'; // Add styles if needed

const Home = () => {
  // Sample testimonials data (Now with 5 testimonials)
  const testimonials = [
    {
      name: "Monica Geller",
      feedback: "Amazing food! The best I've ever had. Will definitely order again.",
      rating: 5,
    },
    {
      name: "Sherlock Holmes",
      feedback: "Great service and delicious dishes. Highly recommend.",
      rating: 4,
    },
    {
      name: "Claire Dunphy",
      feedback: "A wonderful experience. The delivery was on time, and food was hot and fresh.",
      rating: 5,
    },
    {
      name: "Thrisha Krishnan",
      feedback: "Absolutely love the variety of choices. Always something new to try!",
      rating: 4,
    },
    {
      name: "Andrew Garfield",
      feedback: "The online ordering was seamless, and the food arrived piping hot! Highly satisfied.",
      rating: 5,
    },
  ];

  return (
    <div className="home">
      {/* Home Page Header */}
      <header>
        <h2>Welcome to Our Website</h2>
        <p>Explore delicious food and order your favorites!</p>
      </header>

      {/* Carousel Component */}
      <div>
        <Carousel />  {/* Add the Carousel below the Navbar */}
      </div>

      {/* Testimonial Section */}
      <section className="testimonials">
        <h2>What Our Customers Say</h2>
        <div className="testimonial-cards">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="testimonial-card">
              <p className="feedback">"{testimonial.feedback}"</p>
              <p className="customer-name">- {testimonial.name}</p>
              <div className="rating">
                {"★".repeat(testimonial.rating)}{" "}
                {"☆".repeat(5 - testimonial.rating)}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Landscape Image Section */}
      <section className="landscape-image">
        <img
          src="/images/hotel.jpg"  // Corrected path to access the public folder
          alt="Delicious Food Landscape"
          className="landscape-pic"
        />
      </section>

      {/* Button to navigate to Menu */}
      <div>
        <Link to="/menu">
          <button className="btn">Go to Menu</button>
        </Link>
      </div>
    </div>
  );
};

export default Home;
