import React from "react";

function Contact() {
  return (
    <section className="container">
      <div className="contact">
        <h1 className="my-3"> Contact</h1>

        <div className="mb-3 col-4">
          <label className="form-label">Email adddress</label>
          <input className="form-control" placeholder="email@example.com" type="email"></input>
        </div>

        <div className="mb-3 col-4">
          <label className="form-label">Email adddress</label>
          <input className="form-control" placeholder="email@example.com" type="email"></input>
        </div>

        <div className="mb-3 col-4">
          <label className="form-label">Comment</label>
          <textarea className="form-control" rows="3"></textarea>
        </div>
        
      </div>
    </section>
  );
}

export default Contact;
