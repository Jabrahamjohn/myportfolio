import React from "react";


const Education = () => {
  return (
    <section id="Education">
      <h2>Education</h2>
      <div className="education-grid">
          <div className="education-cell">
          <h3>Bsc.Mathematics &Computer Science</h3>
          <p>Technical University of Mombasa</p>
          <p>2020 - 2024</p>
          </div>
          <div className="education-cell">
          <h3>Software Engineering</h3>
          <p>Alx-Africa & Holberton University</p>
          <p>2023 - 2024</p>
          </div>
          <div className="education-cell">
          <h3>CyberSecurity</h3>
          <p>Cisco Networking Academy & Ingressive for Good</p>
          <p>2022 - 2023</p>
          </div>
          <div className="education-cell">
          <h3>Health Information Systems</h3>
          <p>Nairobi University & Kenya Ministry of Health Virtual Academy</p>
          <p>2022 - 2023</p>
          </div>
      </div>        
      </section>
     
  );
};

export default Education;