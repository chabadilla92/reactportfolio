import React from "react";
import Data from '../data/data.json'

function Projects() {
    return (
      <div>
      {Data.map((project, index) => {
        return <h1>{project.title}</h1>
      })}
      </div>
    );
  }
  
  export default Projects;