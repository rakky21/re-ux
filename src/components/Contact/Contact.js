import React from "react";

function Contact() {
  return (
    <section className="container my-2">
      <div className="card" style={{ border: "1px solid", width: "75rem", background: "#F8F8FF"}}>
        <h2 className="fluid" style={{ background: "#6495ED" }}>
          Contact me
        </h2>
        {/* aline boxes */}
        <div className="input-group mb-3">
          <span className="input-group-text"> Email </span>
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
