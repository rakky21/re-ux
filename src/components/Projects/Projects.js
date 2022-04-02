import React from "react";

function Projects() {
  return (
    <section className="my-2">
      <div className="modal-dialog">
        <div className="modal-content " style={{ background: "#F8F8FF" }}>
          <div className="modal-header">
            <h2 className="modal-title"> Title</h2>
            <button className="btn-close"></button>
          </div>
          <div className="modal-body">
            <p> Body </p>
          </div>
          <div className="modal-footer">
            <button className="button btn btn-primary">Open</button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Projects;




// import React, { useEffect } from "react";
// import { capitalizeFirstLetter } from "../../utils/helpers";

// function Projects(props) {

//   const { projectos = [], setCurrentProject, currentProject } = props;

//   useEffect (() => {
//     document.title = capitalizeFirstLetter(currentProject);
//   }, [currentProject]);

//   return (
//     <section className="my-2">
//       <div className="modal-dialog">
//         <div className="modal-content " style={{ background: "#F8F8FF" }}>
//           <div className="modal-header">
//             <h2 className="modal-title"> Title</h2>
//             <button className="btn-close"></button>
//           </div>
//           <div className="modal-body">
//             <p> Body </p>
//           </div>
//           <div className="modal-footer">
//             <button className="button btn btn-primary">Open</button>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

// export default Projects;
