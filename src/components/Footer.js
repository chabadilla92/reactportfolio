import React from "react";
import { Link } from 'react-router-dom';


function Footer() {
    
    
    
    return (
        <div>
        <ul id="footerdiv">
            <li class="about"><Link to="/about"><i class="bi bi-person-circle"></i></Link></li>
            <li class="blog"><Link to="/blog"><i class="bi bi-journal-code"></i></Link></li>
            <li><a href="https://www.linkedin.com/in/christopher-abadilla/"><i class="bi bi-linkedin"></i></a></li>
            <li><a href="https://github.com/chabadilla92"><i class="bi bi-github"></i></a></li>

        </ul>
        </div>
    )
}

export default Footer;