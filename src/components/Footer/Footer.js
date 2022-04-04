import React from "react";

function Footer() {
  return (

      <footer className="container ">
          <div className="py-3 my-4 justify-content-between border-top d-flex" class="center"></div>
        <div className="col-md-4 d-flex">
            <a href="/" className="mb-3 me-2">Icon</a>
            <span className="text-muted">Rakky26Github</span>
        </div>
        <ul className="nav col-md-4 justify-content-end list-unstyled d-flex">
          <li className="ms-3">
            <a className="text-muted" href="/">SM</a>
          </li>
        </ul>
      </footer>
    
  );
}

export default Footer;
