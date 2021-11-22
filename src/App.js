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
          <li id="home"><a href="#homesection"><i class="bi bi-house-door"></i></a></li>
          <li id="about"><a href="#aboutsection"><i class="bi bi-person"></i></a></li>
          <li id="projects"><a href="#projectsection"><i class="bi bi-folder"></i></a></li>
          <li id="contact"><a href="#contactsection"><i class="bi bi-envelope"></i>

</a></li>
        </ul>
        </nav>
      <div id="homesection">
        <h1 id="name">ChRis Abadilla</h1>
        <h2 id="subheading">Full Stack Developer | Web Developer</h2>
      </div>

      <main>
        {/* <h3 id="scroll">SCROLL&nbsp;<i id="arrows" class="bi bi-arrow-right"></i></h3> */}
        <div id="backgroundimg"></div>
        <h3 id="scroll1">scroll&nbsp;<i id="arrows" class="bi bi-arrow-right"></i></h3>
      </main>
      
      <section id="aboutsection">
        
        <About /></section>
      <section id="projectsection"><Projects /></section>
      <section id="contactsection"><Contact /></section>

    </div>
  );
}

export default App;
