import React from "react";

function Footer() {
  return (
    <footer className="footer">
      <a className=" " href="/">
        &copy; 2021 - {new Date().getFullYear()} Cribas Development
      </a>
      <br />
      All Rights Reserved
    </footer>
  );
}

export default Footer;
