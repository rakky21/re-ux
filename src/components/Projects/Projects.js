import React from "react";

function Projects() {
  return (
    <section className="container my-2">
      <div className="card" style={{ border: "1px solid", width: "25rem" }}>
        {/* one model displays all */}
        {/* open, close and/or open a new tab button */}
        {/* combine portfolio with about me */}
        <div className="modal-dialog">
          <div className="modal-header bg-light">
            <h2 className="model-little">Names</h2>
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
