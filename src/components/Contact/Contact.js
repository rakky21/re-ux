import React from "react";

function Contact() {
  return (
    <section className="container center" >
      <div className="row" style={{ background: "#F8F8FF" }} >
      <h1 className="my-3"> Freddy Rakky21 </h1>
      <p> Submit to request resume </p>
      <div className="mb-3 col-4">
        <label className="form-label">Email adddress</label>
        <input className="form-control col-6" placeholder="email@example.com" type="email"></input>
      </div>

      <div className="mb-3 col-4">
        <label className="form-label">Email adddress</label>
        <input className="form-control" placeholder="email@example.com" type="email"></input>
      </div>

      <div className="mb-3 col-4">
        <label className="form-label">Email adddress</label>
        <input className="form-control" placeholder="email@example.com" type="email"></input>
      </div>

      {/* <div className="mb-3 col-4">
        <label className="form-label">Email adddress</label>
        <input className="form-control" placeholder="email@example.com" type="email"></input>
      </div> */}

      <div className="mb-3 col-4">
        <label className="form-label">Comment</label>
        <textarea className="form-control" rows="3"></textarea>
      </div>
      </div>
    </section>
  );
}

export default Contact;