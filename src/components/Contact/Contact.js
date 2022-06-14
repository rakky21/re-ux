import React from "react";

function Contact() {
  return (
    <section className="container" >
   
      <h2 className="my-3"> Contact </h2>
  
        <form className="col-4"> 

        <label>Name</label>
        <input placeholder="Name" type="text" id="name"></input>

        <label>Email</label>
        <input placeholder="email@e.com" type="email" id="email"></input>
   
        <label>Message</label>
        <textarea placeholder="Message" type="text" id="message"></textarea>
        <input type="submit"></input>

      </form>
   
    </section>
  );
}

export default Contact;