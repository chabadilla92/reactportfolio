import React from "react";
import Data from '../data/data.json';


function Projects() {

  
  
  return (
      <div id="projectcontainer" class="d-flex justify-content-between">
        {Data.map((project, index) => {
          return (
            <div class="card" id={project.id}>
              <card>
                <div class="projecttitle"><a href={project.url}>{project.title}</a>
                </div>
                <p>{project.description}</p>
              </card>
            </div>
          )
        })}
      </div>

    )
}
  



  export default Projects;