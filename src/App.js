import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Nav from "./components/Nav.js";
import Main from "./components/Main.js";
import Projects from "./components/Projects.js";
import Footer from "./components/Footer.js"
import jQuery from "jquery";
import $ from "jquery";

function App() {

  
  
  return (
    <div class="p-0" id="grid">
      <section id="navsection" class="container-fluid"><Nav /></section>

      {/* <div class="scrolling-wrapper">
        <section id="mainsection"><Main /></section>
        <section id="projectsection"><Projects /></section>
      </div> */}

      <div class="horizontal-scroll-wrapper">
        <div class="horizontal-scroll-wrapper-inner">
          <div id="mainsection"><Main /></div>
          <div id="projectsection"><Projects /></div>
        </div>

      </div>


      <section id="footersection" class="container-fluid"><Footer /></section>
      
    </div>
    
  );
}

export default App;
