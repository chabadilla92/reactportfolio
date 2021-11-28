import React from "react";
import Data from '../data/data.json'

function Projects() {
    return (
      <div class="container" id="accordionExample">
        <h1 id="projectsheader">PROJECTS</h1>
        {Data.map((project, index) => {
          return (

            <div class="text-center p-1" id={project.row}>
              <a class="btn btn-sm" data-toggle="collapse" href={project.link} id="button" role="button" aria-expanded="false" aria-controls="#collapseExample">{project.title}
              </a>
            </div>

          )
        })}

        {Data.map((project, index) => {
          return (
            <div class="collapse p-4" id={project.id} data-parent="#accordionExample">
                <div class="card card-body" id="projectcards">
                  <span>{project.description}</span>
                  <span id="projecturl"><i class="bi bi-chevron-double-left"></i><a href={project.url}id="projecturls">CLICK ME</a><i class="bi bi-chevron-double-right"></i></span>
                  </div>
            </div>
          )
        })}
        <h3 id="scroll2">scroll&nbsp;<i id="arrows" class="bi bi-arrow-right"></i></h3>

      </div>
    )
}
  



  export default Projects;