import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Projects from "./components/Projects.js";

function App() {
  return (
    <div id="grid">
      <nav>
        <ul id="sidenav">
          <li><a href="#about"><i class="bi bi-person"></i></a></li>
          <li><a href="#projects"><i class="bi bi-folder"></i></a></li>
          <li><a href="#contact"><i class="bi bi-send"></i></a></li>
        </ul>
        </nav>
      <h1>Header</h1>
      <main>Main</main>
      
    </div>
  );
}

export default App;
