import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Nav from "./components/Nav.js";
import Main from "./components/Main.js";
import Projects from "./components/Projects.js";
import Footer from "./components/Footer.js"


function App() {
  
  
  
  return (
    <div class="container-fluid p-0" id="grid">
      <section id="navsection"><Nav /></section>

      {/* <div class="scrolling-wrapper">
        <section id="mainsection"><Main /></section>
        <section id="projectsection"><Projects /></section>
      </div> */}

      <div class="horizontal-scroll-wrapper">

        <div id="mainsection"><Main /></div>
        <div id="projectsection"><Projects /></div>

      </div>


      <section id="footersection"><Footer /></section>
      
    </div>
    
  );
}

export default App;
