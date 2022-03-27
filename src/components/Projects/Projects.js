import React from "react";

function Projects() {
  return (
    <section className="container"> 
      <div className="card bg-light" style={{ border: "solid", width: "25rem"}}>
      {/* one model displays all */}
      {/* open, close and/or open a new tab button */}
      {/* combine portfolio with about me */}
      <div className="modal-dialog" >
        <div className="modal-header bg-light" style={{}}>
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
      </div>
    </section>
  );
}

export default Projects;