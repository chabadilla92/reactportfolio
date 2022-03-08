import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Nav from "./components/Nav.js";
import Footer from "./components/Footer.js"
import React from "react";
import HScroll from "./components/HScroll";






function App() {
  return (
    <div class="p-0" id="grid">
      <section id="navsection" class="container-fluid"><Nav /></section>
      <div class="horizontal-scroll-wrapper">
        <HScroll />
      </div>
      <section id="footersection" class="container-fluid"><Footer /></section>
    </div>
  );
}





export default App;
