import React from "react";
import "./Admission.css";
import { NavLink } from "react-router-dom";

const Admission = () => {
  return (
    <div className="admission-page">
      {/* Hero Section */}
      <section className="admission-hero">
        <h1>Admission Process</h1>
        <p>Join our family and give your child the best education experience.</p>
      </section>

      {/* Admission Steps */}
      <section className="admission-steps">
        <h2>How to Apply</h2>
        <ol>
          <li>Fill out the admission form below or visit our school office.</li>
          <li>Submit required documents (Birth Certificate, ID Proof, etc.).</li>
          <li>Pay the admission fee to confirm your enrollment.</li>
        </ol>
      </section>

      <div className="quiz-test"> 
            <NavLink to="/quiz" className="quiz">Start a Quiz</NavLink>
      </div>

      {/* Admission Inquiry Form */}
      <section className="admission-form-section">
        <h2>Admission Inquiry Form</h2>
        <form className="admission-form">
          <input type="text" placeholder="Child's Full Name" required />
          <input type="text" placeholder="Parent/Guardian Name" required />
          <input type="email" placeholder="Parent's Email" required />
          <input type="text" placeholder="Contact Number" required />
          <textarea placeholder="Your Message or Questions" rows="5"></textarea>
          <button type="submit" className="btn-primary">Submit Inquiry</button>
        </form>
      </section>

      {/* Footer */}
      <footer className="admission-footer">
        <p>© 2024 Rohtas Public School. All Rights Reserved.</p>
      </footer>
    </div>
  );
};

export default Admission;
