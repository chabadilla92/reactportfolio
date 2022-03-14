import React from 'react';
import Nav from '../components/Nav.js';
import Footer from '../components/Footer.js';

export default function BlogPage() {
    return (
        <div class="p-0 container-fluid" id="grid">
            <section id="navsection"><Nav /></section>
            <div class="horizontal-scroll-wrapper">
                <h2>Blog Page</h2>
            </div>
            <section id="footersection"><Footer /></section>
        </div>
    )
}