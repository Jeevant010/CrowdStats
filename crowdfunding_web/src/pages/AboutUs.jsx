import React from 'react';
import './AboutUs.css';

const AboutUs = () => {
  return (
    <div className="about-container">
      <h1>About Us</h1>
      <p>
        Welcome to CrowdStats, a platform dedicated to supporting innovative projects and ideas through crowdfunding.
        Our mission is to empower creators and communities by providing a transparent and engaging space to raise funds.
      </p>
      <p>
        We believe in the power of collaboration and the impact of collective effort. Join us in making a difference!
      </p>
      <section className="team-section">
        <h2>Our Team</h2>
        <div className="team-members">
          <div className="team-member">
            <h3>Jeevant & Deepesh</h3>
            <p>Founder & CEO</p>
          </div>
          <div className="team-member">
            <h3>Jeevant Sharma</h3>
            <p>Lead Developer</p>
          </div>
          <div className="team-member">
            <h3>Deepesh Dangi</h3>
            <p>Community Manager</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
