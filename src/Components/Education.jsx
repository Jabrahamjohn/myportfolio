import React from "react";


const Education = () => {
  return (
    <section id="Education">
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
/* style the education section 
<style>
        .education-grid {
          display: grid;
          justify-content: center;
          align-items: center;
        }
    } // Add a closing curly brace here
  } // Add a closing curly brace here
  .education-cell {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 1rem;
    margin: 1rem;
    border: 1px solid #000;
    border-radius: 5px;
    background-color: white;
  }
  .education-cell h3 {
    font-size: 1.5rem;
  }
  .education-cell p {
    font-size: 1rem;
  }
  .education-cell p:last-child {
    margin-bottom: 0;
  }
</style>
*/
