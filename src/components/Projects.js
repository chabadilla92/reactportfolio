import React from "react";
import Data from '../data/data.json'

function Projects() {
    return (
      <div class="container d-flex">

        {Data.map((project, index) => {
          return (

            <div class="container p-4">
              <button type="button" id={project.id} class="btn btn-primary" data-toggle="modal" data-target="#exampleModalCenter">{project.title}</button>
              

              

            </div>

          )
        })}



        {/*
        {Data.map((project, index) => {
          return (
            <div class="collapse p-4" id={project.id} data-parent="#accordionExample">
                <div class="card card-body" id="projectcards">
                  <span>{project.description}</span>
                  <span id="projecturl"><i class="bi bi-chevron-double-left"></i><a href={project.url}id="projecturls">CLICK ME</a><i class="bi bi-chevron-double-right"></i></span>
                  </div>
            </div>
          )
        })} */}





      </div>
    )
}
  



  export default Projects;