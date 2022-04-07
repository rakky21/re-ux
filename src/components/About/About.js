import React from "react";
import "../../../src/index.css";
import Cara from "../../assets/cover/cara.jpg";

function About() {
  return (
    <section className="container">
      <div
        className="row my-2"
        style={{ border: "1px solid", width: "35rem", background: "#F8F8FF" }}
        class="center"
      >
        <img
          src={Cara}
          className="card-img-top"
          alt="Una Foto Aqui"
          style={{ height: "500px", width: "auto" }}
        ></img>
        <div className="card-body">
          <h2 className="card-title" class="cara">
            {" "}
            My Portfolio{" "}
          </h2>
          <p className="card-text my-2">
            This is all that I've accomplished about me.
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;
