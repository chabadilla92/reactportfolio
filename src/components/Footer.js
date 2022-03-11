import React from "react";
import { NavLink } from 'react-router-dom';


function Footer() {
    
    
    
    return (
        <div>
        <ul id="footerdiv">
            <li class="about"><NavLink to="/"><span><i class="bi bi-person-circle"></i></span></NavLink></li>
            <li class="blog"><NavLink to="/"><span><i class="bi bi-journal-code"></i></span></NavLink></li>
            <li><a href="https://www.linkedin.com/in/christopher-abadilla/"><i class="bi bi-linkedin"></i></a></li>
            <li><a href="https://github.com/chabadilla92"><i class="bi bi-github"></i></a></li>
            <li class="email"><a><span><i class="bi bi-envelope-check"></i></span></a></li>
        </ul>
        </div>
    )
}

export default Footer;