import React from "react";

function About() {
  return (
   
   <section  className="container">
    <div className="card bg-light" style={{ border: "solid", width: "35rem" }}>
    <img src="" className="card-img-top" alt="Una Foto Aqui"></img>
    <div className="card-body"  >
      <h1 className="card-title">
        {" "}
        My Portfolio{" "}
      </h1>

      <p className="card-text my-2">
        This is all that I've accomplished about me.
      </p>
    </div>
  </div>
  </section>
    );
}

export default About;
