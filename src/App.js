import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Projects from "./components/Projects.js";
import About from "./components/About.js";
import Contact from "./components/Contact.js"

function App() {
  return (
    <div id="grid">
      <nav>
        <ul id="sidenav">
          <li id="about"><a href="#about"><i class="bi bi-person"></i></a></li>
          <li id="projects"><a href="#projects"><i class="bi bi-folder"></i></a></li>
          <li id="contact"><a href="#contact"><i class="bi bi-send"></i></a></li>
        </ul>
        </nav>
      <div>
        <h1 id="name">ChRis Abadilla</h1>
        <h2 id="subheading">Full Stack Developer | Web Developer</h2>
      </div>

      <main>
        <div id="backgroundimg"></div>
      </main>
      
      <section id="aboutsection">
        
        <About /></section>
      <section id="projectsection"><Projects /></section>
      <section id="contactsection"><Contact /></section>

    </div>
  );
}

export default App;
