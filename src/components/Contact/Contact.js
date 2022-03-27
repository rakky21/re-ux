import React from "react";

function Contact() {
  return (
    <section className="container">
      <div  style={{border: "solid", width: "75rem"}}>
      <h1 className="bg-info fluid"> Contact me </h1>

      {/* aline boxes */}
      <div className="input-group mb-3" >
        <span className="input-group-text" > Email </span>
        <input type={"text"}></input>
      </div>

      <div className="input-group mb-3">
        <span className="input-group-text"> Name </span>
        <input type={"text"}></input>
      </div>
      </div>
    </section>
  );
}

export default Contact;
