import React from "react";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";

function Footer() {
  return (
    <div className="container">
      <footer className="d-flex justify-content-between align-items-center py-3 my-4 border-top">
        <div className="col-md-4 d-flex">
          <ul>
            <a
              href="https://github.com/rakky21"
              target="_blank"
              rel="noreferrer"
              className="mb-3 me-2"
            >
              <FaGithub size="2em" title="GitHub" />
            </a>

            <a
              href="https://www.linkedin.com/in/freddy-cribas-038713177/"
              target="_blank"
              rel="noreferrer"
              className="mb-3 me-2"
            >
              <FaLinkedinIn size="2em" title="LinkedIn" />
            </a>
          </ul>
        </div>

        <div className="nav col-md-4 justify-content-end list-unstyled d-flex">
          <div>
            <a className="text-muted" href="/">
              © Cribas Development. All Rights Reserved
              </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
