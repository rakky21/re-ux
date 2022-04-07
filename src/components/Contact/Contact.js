import React from "react";

function Contact() {
  return (
<<<<<<< HEAD
    <section className="col-6 my-2 " class="form" style={{ border: "1px solid",  }}>

      <div className="my-2">
        <label className="col-4 my-2">First name
          <input className="form-control my-2" placeholder="First name" aria-label="First name"></input></label>

        <label className="col-4 my-2">Last name
        <input className="form-control my-2" placeholder="Last name" aria-label="Last name"></input></label>
  
  <div className="my-2">
        <label className="col-4 form-label my-2">E-mail
        <input className="form-control my-2" placeholder="E-mail" aria-label="E-mail"></input></label>

        <label className="col-4 form-label my-2">Telephone
        <input className="form-control my-2" placeholder="Telephone" aria-label="Telephone"></input></label>
=======
    <section className="container m-2">
     <div className="row my-2" class="contact-form" style={{ border: "1px solid",  background: "#F8F8FF"}}>
      <div className="col my-2">
        <label className="form-label my-2 col-4">First name
          <input className="form-control my-2" style={{type:"text"}} placeholder="First name" aria-label="First name"></input></label>
           <label className="form-label my-2 col-4">Last name
            <input className="form-control my-2" style={{type:"text"}} placeholder="Last name" aria-label="Last name"></input></label>
  
  <div className="col my-2">
        <label className="form-label my-2 col-4">E-mail
        <input className="form-control my-2" style={{type:"text"}} placeholder="E-mail" aria-label="E-mail"></input></label>
        <label className="form-label my-2 col-4">Telephone
        <input className="form-control my-2" style={{type:"text"}} placeholder="Telephone" aria-label="Telephone"></input></label>
>>>>>>> 65c1a1ea259beebacaf3edf0ea111871df72c54f
        </div>
      </div>
      </div>
    </section>
  );
}

export default Contact;


// <div class="contact-form">
// <h3>Contact Us</h3>
// <form>
//   <label for="contact-name">Your Name</label>
//   <input type="text" id="contact-name" placeholder="Your Name" />

//   <label for="contact-message">Message</label>
//   <textarea id="contact-message" placeholder="Message"></textarea>

//   <button type="submit">Submit</button>
// </form>
// </div>