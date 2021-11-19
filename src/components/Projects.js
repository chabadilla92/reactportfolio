import React from "react";
import Data from '../data/data.json'

function Projects() {
    return (
      <div id="projectscomponent">
        {Data.map((project, index) => {
          return (
            <div class="row text-center fbtn">
              <div class="col-md-6">
              <a class="btn btn-primary" data-toggle="collapse" href={project.link} role="button" aria-expanded="false" aria-controls="#collapseExample">{project.title}</a>
              </div>
              <div class="col-md-6">
                <div class="collapse" id={project.id}>
                  <div class="card card-body">{project.description}</div>
                </div>
              </div>
            </div>
          )
        })}
      </div>
    )
}
  



  export default Projects;