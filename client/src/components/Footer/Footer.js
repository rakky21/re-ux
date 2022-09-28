import React from "react";

function Footer() {
  return (
    <footer className="footer">
      <ul>
        <a className="text-muted " href="/">
          &copy;{new Date().getFullYear()} Cribas Development
        </a>
        <br />
        All Rights Reserved
      </ul>
    </footer>
  );
}

export default Footer;
