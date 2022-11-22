import React from "react";

function Footer() {
  return (
    <footer className="footer">
      <a className="text-muted " href="/">
        &copy;{new Date().getFullYear()} Cribas Development
      </a>
      <br />
      All Rights Reserved
    </footer>
  );
}

export default Footer;
