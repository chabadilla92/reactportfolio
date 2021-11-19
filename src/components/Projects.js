import React from "react";
import Data from '../data/data.json'

function Projects() {
    return (
      <div class="container" id="accordionExample">
        {Data.map((project, index) => {
          return (

            <div class="text-center p-3" id={project.row}>
              <a class="btn btn-lg" data-toggle="collapse" href={project.link} id="button" role="button" aria-expanded="false" aria-controls="#collapseExample">{project.title}
              </a>
            </div>

          )
        })}

        {Data.map((project, index) => {
          return (
            <div class="collapse p-4" id={project.id} data-parent="#accordionExample">
                <div class="card card-body" id="projectcards">{project.description}</div>
            </div>
          )
        })}

      </div>
    )
}
  



  export default Projects;