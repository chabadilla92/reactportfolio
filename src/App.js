import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Nav from "./components/Nav.js";
import Main from "./components/Main.js";
import Projects from "./components/Projects.js";


function App() {
  return (
    <div id="grid">
      <section id="navsection"><Nav /></section>

      <div class="outer-wrapper">
        <div class="wrapper">
          <section id="homesection"><Main /></section>
          <section id="projectsection"><Projects /></section>
        </div>
      </div>
      <div class="modal" id="exampleModalCenter">
                <div class="modal-dialog">
                  <div class="modal-content">
                    <div class="modal-header">
                      <h5 class="modal-title">Modal title</h5>
                      <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                      <span aria-hidden="true">&times;</span>
                      </button>
                    </div>
                    <div class="modal-body">...</div>
                    <div class="modal-footer">
                      <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                      <button type="button" class="btn btn-primary">Save changes</button>
                    </div>
                  </div>
                </div>
              </div>

    </div>
    
  );
}

export default App;
