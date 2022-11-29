import React from "react";
import Cara from "../../assets/cover/cara.jpg";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";


//FIX THE FACE!!!
function About() {
  return (
    <section className="about_section">
      <div className="card-body card_body">
        <img
          src={Cara}
          className="card-img my-2"
          alt="Una Foto Aqui"
          style={{ height: "300px", width: "auto" }}
        />
          <h1 className="card-title border-bottom about_title"> Freddy </h1>
          <p className="card-text my-2">
            I'm a Full-Stack Developer.{" "}
            <br />
            I have work experience in React, Javascript, CSS, HTML, back &
            front-end development. <br />
            These are some personal and group projects done during and after the bootcamp</p>
          <a
            href="https://github.com/rakky21"
            target="_blank"
            rel="noreferrer"
            className="mb-3 me-2 emoticons"
          >
            <FaGithub size="2em" title="GitHub" />
          </a>
          <a
            href="https://www.linkedin.com/in/freddy-cribas-038713177/"
            target="_blank"
            rel="noreferrer"
            className="mb-3 me-2 emoticons"
          >
            <FaLinkedinIn size="2em" title="LinkedIn" />
            <br />
          </a>
      </div>
    </section>
  );
}

export default About;
