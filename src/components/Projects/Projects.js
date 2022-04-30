import React, { useState } from "react";
// import React from "react";
import Toolkit from "../../assets/projects/Toolkit.jpg";
import Tunebook from "../../assets/projects/Tunebook.jpg";

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
        <div className="col-4">
          <div className="my-2 card" style={{ width: "18rem" }}>
            <img
              className="card-img-top center"
              src={Toolkit}
              alt={cards.name}
            ></img>
            <p className="center"> This is the first group project</p>
            <div className="center">
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
        </div>
      </div>
    </section>
  );
}

export default Projects;
