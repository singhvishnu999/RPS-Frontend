import React from "react";
import "./Main.css";
import { NavLink } from "react-router-dom";

const Main = () => {
  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-text">
          <h1>Welcome to Rohtas Public School</h1>
          <p>Empowering young minds since ESTD. 2020</p>
          <NavLink to="/chat" className="btn-primary">
            Learn More
          </NavLink>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="about">
        <h2>About Us</h2>
        <p>
          At Rohtas Public School, we believe in fostering a love for learning
          while preparing students for the challenges of tomorrow. Our primary
          school is dedicated to providing quality education with a focus on
          holistic development.
        </p>
      </section>

      {/* Features Section */}
      <section className="features">
        <h2>Why Choose Us?</h2>
        <div className="features-grid">
          <div className="feature-card">
            <h3>Experienced Faculty</h3>
            <p>Learn from highly skilled and experienced teachers.</p>
          </div>
          <div className="feature-card">
            <h3>Modern Infrastructure</h3>
            <p>Smart classrooms and a child-friendly environment.</p>
          </div>
          <div className="feature-card">
            <h3>Holistic Development</h3>
            <p>Focus on academics, sports, and co-curricular activities.</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <p>© 2024 Rohtas Public School. All Rights Reserved.</p>
      </footer>
    </div>
  );
};

export default Main;
