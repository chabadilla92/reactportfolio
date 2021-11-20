import React from "react";


function About() {
    return (
      <div id="aboutcomponent">
          <h1 id="aboutmeheader">ABOUT</h1>
      <section id="skills">
          <h3 id="tech">Technologies used <i class="bi bi-arrow-up-right"></i></h3>
          <ul id="skillslist">
              <li>HTML</li>
              <li>CSS</li>
              <li>React</li>
              <li>Bootstrap</li>
              <li>JavaScript</li>
              <li>Python</li>
              <li>Gatsby</li>
              <li>Django</li>
              <li>GraphQL</li>
          </ul>
      </section>
      <section id="description">
          <p>Born in the Philippines and raised in the SF Bay Area. I create full stack web applications.</p>
      </section>
      </div>
    );
  }
  
  export default About;