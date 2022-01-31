import React from "react";
import Data from '../data/data.json'


function Modal() {
    return (
        <div>
        {Data.map((project, index) => {
            return (
        <div class="modal fade" id="exampleModalCenter">
                <div class="modal-dialog">
                  <div class="modal-content">
                    <div class="modal-header">
                      <h5 class="modal-title">{project.title}</h5>
                      <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                      <span aria-hidden="true">&times;</span>
                      </button>
                    </div>
                    <div class="modal-body">Description</div>
                    <div class="modal-footer">
                      <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                    </div>
                  </div>
                </div>
              </div>
            )})}
        </div>
        )
}

export default Modal;