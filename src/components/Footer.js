import React from "react";

function Footer() {
    
    
    
    return (
        <div id="footerdiv">
        <ul id="left">
            <li class="about"><a href="#" data-replace="Get to know me!"><span><i class="bi bi-person-circle"></i></span></a></li>
            <li class="blog"><a href="#" data-replace="Check out my blog!"><span><i class="bi bi-journal-code"></i></span></a></li>
        </ul>
        <ul id="right">
            <li><a href="https://www.linkedin.com/in/christopher-abadilla/"><i class="bi bi-linkedin"></i></a></li>
            <li><a href="https://github.com/chabadilla92"><i class="bi bi-github"></i></a></li>
            <li class="email"><a data-replace="chabadilla92@gmail.com"><span><i class="bi bi-envelope-check"></i>
</span></a></li>
        </ul>
        </div>
    )
}

export default Footer;