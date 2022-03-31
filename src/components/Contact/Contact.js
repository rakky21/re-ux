import React from "react";

function Contact() {
  return (
    <section className="container">
    <div className="card row g-3 my-3 " class="form" style={{ border: "1px solid",  background: "#F8F8FF"}}>
      <div className="my-2 col">
        <label className="col-4 form-label my-2">First name
          <input className="form-control my-2" style={{type:"text"}} placeholder="First name" aria-label="First name"></input></label>

        <label className="col-4 form-label my-2">Last name
        <input className="form-control my-2" style={{type:"text"}} placeholder="Last name" aria-label="Last name"></input></label>
  
  <div className="my-2">
        <label className="col-4 form-label my-2">E-mail
        <input className="form-control my-2" style={{type:"text"}} placeholder="E-mail" aria-label="E-mail"></input></label>

        <label className="col-4 form-label my-2">Telephone
        <input className="form-control my-2" style={{type:"text"}} placeholder="Telephone" aria-label="Telephone"></input></label>
        </div>
      </div>
      </div>
    </section>
  );
}

export default Contact;