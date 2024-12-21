// src/components/About.js
import React from 'react';
import './About.css';  // Link to the CSS file for styling

const About = () => {
  // Array of team members with updated roles
  const teamMembers = [
    { id: 1, name: 'Meghna', role: 'Lead Developer', image: '/images/profile.png' },
    { id: 2, name: 'Disha', role: 'Digital Marketing Specialist', image: '/images/profile.png' },
    { id: 3, name: 'Nidhi', role: 'Operations Coordinator', image: '/images/profile.png' },
    { id: 4, name: 'Sangini', role: 'Customer Service Lead', image: '/images/profile.png' },
    { id: 5, name: 'Sannidhi', role: 'Front of House Manager', image: '/images/profile.png' },
  ];

  return (
    <div className="about-container">
      <h2>About Us</h2>
      <p>
        Welcome to Fusion Station, where culinary innovation meets authentic flavors. At Fusion Station, we take pride in offering a unique dining experience, combining the finest ingredients from around the world. Our menu features a fusion of global cuisines, from classic Indian curries to delicious sushi rolls and mouth-watering pizzas. Whether you're in the mood for a hearty meal or a quick snack, we have something for everyone. Our passionate chefs craft each dish with precision and love, ensuring every bite delivers a burst of flavor. With a cozy atmosphere and exceptional customer service, we aim to create memorable moments for you and your loved ones. Join us at Fusion Station, and let us take your taste buds on a journey like no other!
      </p>

      <div className="timeline-container">
        <h3>Our Business Journey</h3>
        <ul className="timeline">
          <li>
            <div className="timeline-year">Oct 2024</div>
            <div className="timeline-content">
              <h4>Company Founded</h4>
              <p>Our company was founded with a mission to provide the most excellent dishes to our customers.</p>
            </div>
          </li>
          <li>
            <div className="timeline-year">Nov 2024</div>
            <div className="timeline-content">
              <h4>First Major Milestone</h4>
              <p>We reached our first major milestone of serving 1,000 customers.</p>
            </div>
          </li>
          <li>
            <div className="timeline-year">Dec 2024</div>
            <div className="timeline-content">
              <h4>Global Recognition</h4>
              <p>Earned global recognition as a leader in our field through social media marketing.</p>
            </div>
          </li>
        </ul>
      </div>

      <div className="team-container">
        <h3>Meet Our Team</h3>
        <div className="team-profiles">
          {teamMembers.map((member) => (
            <div key={member.id} className="team-member">
              <img src={member.image} alt={member.name} className="team-image" />
              <div className="team-details">
                <h4>{member.name}</h4>
                <p>{member.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;
