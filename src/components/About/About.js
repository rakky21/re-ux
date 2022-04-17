import React from "react";
import "../../../src/index.css";
import Cara from "../../assets/cover/cara.jpg";

function About() {
  return (
    <section className="container my-2">
      <div
        className="row"
        style={{width: "35rem", height: '100%', background: "#F8F8FF" }}
        class="center"
      >
        <img
          src={Cara}
          className="card-img-top my-2"
          alt="Una Foto Aqui"
          style={{ height: "500px", width: "auto" }}
        ></img>
        <div className="card-body">
          <h1 className="card-title" class="cara">
            {" "}
            Freddy{" "}
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
