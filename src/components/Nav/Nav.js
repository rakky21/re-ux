import React from "react";

function Nav() {
    const categories =
    ['portfolio', 'about me', 'projects', 'contact']
    
    
    
      return (
        <div >
          <ul className="nav" style={{background:"grey"}}>
    
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">Portfolio</a>
            </li>
    
            <li className="nav-item">
              <a className="nav-link" href='#'>About me</a>
            </li>
    
            <li className="nav-item">
              <a className="nav-link" href='#'>Projects</a>
            </li>
    
            <li className="nav-item">
              <a className="nav-link" href='#'>Contact</a>
            </li>
    
          </ul>
        </div>
      );
}

export default Nav;