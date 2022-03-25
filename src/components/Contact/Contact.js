import React from "react";

function Contact() {
  return (
    <section className="container">
      <h1 className="bg-light col-8" style={{border: ""}}> Contact me </h1>

      {/* aline boxes */}
      <div className="input-group mb-3">
        <span className="input-group-text"> Email </span>
        <input type={"text"}></input>
      </div>

      <div className="input-group mb-3">
        <span className="input-group-text"> Name </span>
        <input type={"text"}></input>
      </div>
    </section>
  );
}

export default Contact;
