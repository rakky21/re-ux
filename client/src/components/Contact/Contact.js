import React from "react";
import { AiOutlineMail } from "react-icons/ai";

function Contact() {
  return (
    <section id="contact">
      <h2> CONTACT ME </h2>
      <div className="contact">
        <label> Name </label>
        <input></input>

        <label> Last Name </label>
        <input></input>

        <label> Email </label>
        <input></input>

        <textarea></textarea>

        <div>
          {" "}
          <a className="btn" href="email">
            <AiOutlineMail size="2rem" /> Contact Me{" "}
          </a>
        </div>
      </div>
    </section>
  );
}

export default Contact;
