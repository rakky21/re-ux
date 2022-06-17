import React from "react";

function Contact() {
  return (
    <section className="leftmenuinnerinner">
      <form className="" style={{ background: "#F8F8FF" }}>
        <h1 className="my-3"> Freddy Rakky21 </h1>
        <p> Submit to request resume </p>

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
