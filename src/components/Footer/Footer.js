import React from "react";

function Footer() {
  return (
    <div className="container">
      <footer className="d-flex justify-content-between align-items-center py-3 my-4 border-top">
        <div className="col-md-4 d-flex">
          <a href="https://github.com/rakky21" target="_blank" rel="noreferrer" className="mb-3 me-2">
          ICON
          </a>
          <span className="text-muted">RakGH</span>
        </div>
        <ul className="nav col-md-4 justify-content-end list-unstyled d-flex">
          <li className="ms-3">
            <a className="text-muted" href="/">
              SM
            </a>
          </li>
        </ul>
      </footer>
    </div>
  );
}

export default Footer;