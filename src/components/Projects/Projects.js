import React, { useState } from "react";
// import React from "react";
import Toolkit from "../../assets/projects/toolkit.jpg";
import Tunebook from "../../assets/projects/tunebook.jpg";

// Needs to create a whole new model with each project for?
function Projects() {
  function openFile(e) {
    e.preventDefault();
    console.log("clicked");
  }

  const [cards] = useState([
    {
      name: "Toolkit",
      href: "https://lrivales.github.io/app-toolkit/",
      description: "This is the first group project",
    },
    {
      name: "2",
      href: "/",
      description: "This is the second group project",
    },
    {
      name: "3",
      href: "/",
      description: "This is the third group project",
    },
  ]);

  return (
    <section className="container">
      <div className="row">
        <div className="my-2 card" style={{ width: "18rem" }}>
          <img className="card-img-top" src={Toolkit} alt={cards.name}></img>
          <a
            onClick={{ openFile }}
            className="button btn btn-primary col-4"
            href="https://lrivales.github.io/app-toolkit/"
            target="_blank"
            rel="noreferrer noopener"
          >
            Open
          </a>
        </div>

        <div className="my-2 card" style={{ width: "18rem" }}>
          <img className="card-img-top" src={Tunebook} alt={cards.name}></img>
          <a
            onClick={{ openFile }}
            className="button btn btn-primary col-4"
            href="https://lrivales.github.io/app-toolkit/"
            target="_blank"
            rel="noreferrer noopener"
          >
            Open
          </a>
        </div>

        <div className="my-2 card" style={{ width: "18rem" }}>
          <img className="card-img-top" src={Tunebook} alt={cards.name}></img>
          <a
            onClick={{ openFile }}
            className="button btn btn-primary col-4"
            href="https://lrivales.github.io/app-toolkit/"
            target="_blank"
            rel="noreferrer noopener"
          >
            Open
          </a>
        </div>

      </div>
      <div className="row">
        <div className="my-2 card" style={{ width: "18rem" }}>
          <img className="card-img-top" src={Toolkit} alt={cards.name}></img>
          <a
            onClick={{ openFile }}
            className="button btn btn-primary col-4"
            href="https://lrivales.github.io/app-toolkit/"
            target="_blank"
            rel="noreferrer noopener"
          >
            Open
          </a>
        </div>

        <div className="my-2 card" style={{ width: "18rem" }}>
          <img className="card-img-top" src={Tunebook} alt={cards.name}></img>
          <a
            onClick={{ openFile }}
            className="button btn btn-primary col-4"
            href="https://lrivales.github.io/app-toolkit/"
            target="_blank"
            rel="noreferrer noopener"
          >
            Open
          </a>
        </div>
        
        <div className="my-2 card" style={{ width: "18rem" }}>
          <img className="card-img-top" src={Tunebook} alt={cards.name}></img>
          <a
            onClick={{ openFile }}
            className="button btn btn-primary col-4"
            href="https://lrivales.github.io/app-toolkit/"
            target="_blank"
            rel="noreferrer noopener"
          >
            Open
          </a>
        </div>

      </div>
    </section>
  );
}

export default Projects;