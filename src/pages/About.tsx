import React from 'react';
import '../Styles/About.css'; 

const AboutUs: React.FC = () => {
  return (
    <div className="about-container">
      <h2 className="about-title">About SCHOOLAR</h2>
      <p className="about-text">
        Our <strong>Intern Management System</strong> is a modern and user-friendly solution 
        designed to simplify the administration of Enterprise.
      </p>
      <p className="about-text">
        With this platform, administrators can efficiently manage interns, supervisor, internship, 
        fields of study, and academic levels in a centralized manner.
      </p>
      <p className="about-text">
        The application provides a clean and secure interface for each role (Intern, Supervisor, Administrator), 
        with role-based authentication for secure access.
      </p>
      <p className="about-text">
        Why <strong>SCHOOLAR</strong> ?.
      </p>
    </div>
  );
};

export default AboutUs;