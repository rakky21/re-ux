import React from "react";

function Contact() {
  return (
    <section className="container col-6 g-3 my-2 " class="form" style={{ border: "1px solid",  }}>

      <div className="my-2">
        <label className="col-6 my-2">First name
          <input className="form-control my-2" placeholder="First name" aria-label="First name"></input></label>

        <label className="col-6 my-2">Last name
        <input className="form-control my-2" placeholder="Last name" aria-label="Last name"></input></label>
  
  <div className="my-2">
        <label className="col-6 form-label my-2">E-mail
        <input className="form-control my-2" placeholder="E-mail" aria-label="E-mail"></input></label>

        <label className="col-6 form-label my-2">Telephone
        <input className="form-control my-2" placeholder="Telephone" aria-label="Telephone"></input></label>
        </div>
      </div>
    </section>
  );
}

export default Contact;