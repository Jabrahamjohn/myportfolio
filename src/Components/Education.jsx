import React from "react";

/* add an education section to your portfolio site.*/
const Education = () => {
  return (
    <section className="padding" id="education">
      <div className="education-grid" style={{ backgroundColor: "white", padding: "2rem" }}>
        <h2>Education</h2>
        <div>
          <h3>Bsc.Mathematics &Computer Science</h3>
          <p>Technical University of Mombasa</p>
          <p>2020 - 2024</p>
        </div>
        <div>
          <h3>Software Engineering</h3>
          <p>Alx-Africa & Holberton University</p>
          <p>2023 - 2024</p>
        </div>
        <div>
            <h3>CyberSecurity</h3>
            <p>Cisco Networking Academy & Ingressive for Good</p>
            <p>2022 - 2023</p>
        </div>
        <div>
            <h3>Health Information Systems</h3>
            <p>Nairobi University & Kenya Ministry of Health Virtual Academy</p>
            <p>2022 - 2023</p>
        </div>
      </div>
    </section>
  );
};

export default Education;