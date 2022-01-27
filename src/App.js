import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Nav from "./components/Nav.js";
import Home from "./components/Home.js";
import Projects from "./components/Projects.js";
import About from "./components/About.js";
import Contact from "./components/Contact.js"

function App() {
  return (
    <div id="grid">
      <section id="navsection"><Nav /></section>

      <div class="outer-wrapper">
        <div class="wrapper">
          <section id="homesection"><Home /></section>
          <section id="projectsection"><Projects /></section>
        </div>
      </div>


    </div>
    
  );
}

export default App;
