import React from "react";
import Cara from "../../assets/cover/cara.jpg";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";

function About() {
  return (
    <section className="container">
      <div className="about">
        <img
          src={Cara}
          className="card-img my-2"
          alt="Una Foto Aqui"
          style={{ height: "300px", width: "auto" }}
        />
        <div className="card-body">
          <h1 className="card-title border-bottom"> Freddy </h1>
          <p className="card-text my-2">
            I'm Freddy and this is my Portfolio <br /> These are the group and
            personal projects.
          </p>
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
            <br />
          </a>
        </div>
      </div>
    </section>
  );
}

export default About;