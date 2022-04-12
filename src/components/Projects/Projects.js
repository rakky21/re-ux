import React from "react";
import Toolkit from "../../assets/projects/toolkit.jpg";

// Needs to create a whole new model with each project for?
function Projects() {
  function openFile(e) {
    e.preventDefault();
    console.log("clicked");
  }

  const pictures = [];

  return (
    <section className="my-2">
      <div className="modal-dialog">
        <div className="modal-content " style={{ background: "#F8F8FF" }}>
          <div className="modal-header">
            <h2 className="modal-title"> Title</h2>
            <button className="btn-close"></button>
          </div>
          <div className="modal-body" target="_blank" rel="noreferrer noopener">
            <div>
              <img
                className=""
                src={Toolkit}
                alt="This is the foto"
                style={{ height: "500px", width: "auto" }}
              ></img>
            </div>
          </div>
          <div className="modal-footer">
            <a
              onClick={{ openFile }}
              className="button btn btn-primary"
              href="https://lrivales.github.io/app-toolkit/"
              target="_blank"
              rel="noreferrer noopener"
            >
              Open
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Projects;
