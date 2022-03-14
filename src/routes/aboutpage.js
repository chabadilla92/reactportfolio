import React from 'react';
import Nav from '../components/Nav.js';
import Footer from '../components/Footer.js';


export default function AboutPage() {
    return (
        <div id="aboutpagebox" class="container-fluid">
            <div id="row1" class="row">
                <div id="aboutmediv">
                    <ul id="aboutmeul">
                        <li><a href="/"><i class="bi bi-circle"></i></a></li>
                    </ul>
                </div>
            </div>
            <div id="row2" class="row">
                <div id="aboutmeheader">
                    <h2>Chris Abadilla</h2>
                    <p>Currently based in San Jose, CA.</p>
                </div>
            </div>
            <div id="row3" class="row">
                <div id="col1" class="col-sm-4">
                    <div class="row p-5 text-sm-end"><h3>I am a  <i class="bi bi-arrow-right"></i></h3></div>
                </div>
                <div id="col2" class="col-sm-6 offset-sm-1">
                    <div class="row p-5"><p>Web Developer / Full Stack Application Engineer working in San Jose, CA. I am currently working on a number of freelancing projects as well as looking for full time opportunities. </p></div>
                </div>
            </div>
            <div id="row4" class="row">
                <div id="col1" class="col-sm-4">
                    <div class="row p-5 text-sm-end"><h3>Skills <i class="bi bi-arrow-right"></i></h3></div>
                </div>
                <div id="col2" class="col-sm-6 offset-sm-1">
                    <div class="row p-5"><p>HTML, CSS, JavaScript, ReactJS, Bootstrap, Gatsby, Python, MongoDB, Linux, AWS</p></div>
                </div>
            </div>
            <div id="row5" class="row">
                <div id="col1" class="col-sm-4">
                    <div class="row p-5 text-sm-end"><h3>Education <i class="bi bi-arrow-right"></i></h3></div>
                </div>
                <div id="col2" class="col-sm-6 offset-sm-1">
                    <div class="row p-5">
                        <p>B.A. from California State University: Northridge </p>
                        <p>Software Engineering Immersive Bootcamp Graduate from General Assembly</p>
                    </div>
                </div>
            </div>
            <div id="row6" class="row">
                <div id="col1" class="col-sm-4">
                    <div class="row p-5 text-sm-end"><h3>E-mail <i class="bi bi-arrow-right"></i></h3></div>
                </div>
                <div id="col2" class="col-sm-6 offset-sm-1">
                    <div class="row p-5"><p>ch.abadilla92@gmail.com</p></div>
                </div>
            </div>
            

        </div>
    );
}