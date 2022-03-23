import React from "react";

function About() {
  return (
    <section className="card" style={{ border: "solid", width: "18rem" }}>
    <img src="" className="card-img-top" alt="Una Foto Aqui"></img>
    <div className="card-body" style={{ background: "blue"}} >
      <h1 className="card-title" style={{ background: "grey"}}>
        {" "}
        My Portfolio{" "}
      </h1>

      <p className="card-text my-2">
        This is all that I've accomplished about me.
      </p>
    </div>
  </section>
    );
}

export default About;
