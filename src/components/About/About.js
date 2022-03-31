import React from "react";
import Cara from "../../assets/cover/cara.jpg";

function About() {
  return (
    <section className="container">
      <div
        className="card row my-2"
        style={{ border: "1px solid", width: "35rem", background: "#F8F8FF" }}
      >
        <img
          src={Cara}
          className="card-img-top my-2"
          alt="Una Foto Aqui"
          style={{ height: "500px", width: "auto" }}
        ></img>

        <div className="card-body">
          <h2 className="card-title"> My Portfolio </h2>
          <p className="card-text my-2">
            This is all that I've accomplished about me.
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;
