import React from "react";
import "./About.css";

const About = () => {
  return (
    <div className="about-page">
      {/* Hero Section */}
      <section className="about-hero">
        <h1>About Rohtas Public School</h1>
        <p>Empowering young minds since ESTD. 2020</p>
      </section>

      {/* Vision and Mission Section */}
      <section className="vision-mission">
        <div className="vision">
          <h2>Our Vision</h2>
          <p>
            To nurture a community of lifelong learners who are confident,
            compassionate, and creative thinkers, ready to face the challenges
            of the future.
          </p>
        </div>
        <div className="mission">
          <h2>Our Mission</h2>
          <p>
            At Rohtas Public School, we are committed to delivering a
            well-rounded education that balances academics, co-curricular
            activities, and values, ensuring holistic development for every
            child.
          </p>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="core-values">
        <h2>Our Core Values</h2>
        <div className="values-grid">
          <div className="value-card">
            <h3>Integrity</h3>
            <p>We believe in honesty, fairness, and strong moral principles.</p>
          </div>
          <div className="value-card">
            <h3>Excellence</h3>
            <p>
              Striving for the highest standards in academics and extracurriculars.
            </p>
          </div>
          <div className="value-card">
            <h3>Respect</h3>
            <p>
              Fostering mutual respect among students, teachers, and the community.
            </p>
          </div>
          <div className="value-card">
            <h3>Innovation</h3>
            <p>
              Encouraging creative thinking and the use of technology to enhance
              learning.
            </p>
          </div>
        </div>
      </section>

      {/* Footer Section */}
      <footer className="about-footer">
        <p>© 2024 Rohtas Public School. All Rights Reserved.</p>
      </footer>
    </div>
  );
};

export default About;
