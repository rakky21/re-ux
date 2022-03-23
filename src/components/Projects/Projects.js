import React from "react";

function Projects() {
  return (
    <section className="card">
      {/* <div className="card" style={0}></div> */}
      {/* <img src="" className="" alt=""></img> */}
      {/* one model displays all */}
      {/* open, close and/or open a new tab button */}
      {/* combine portfolio with about me */}
      <div className="modal-dialog" >
        <div className="modal-header" >
          <h5 className="model-little">Names</h5>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>

        <div className="modal-body">
          <p> Body </p>
        </div>

        {/* image here? */}

        {/* footer */}
        <div className="modal-footer">
          <button type="button" className="btn btn-primary">
            Open{" "}
          </button>
          <button type="button" className="btn btn-secondary">
            {" "}
            New Browser{" "}
          </button>
        </div>
      </div>
    </section>
  );
}

export default Projects;