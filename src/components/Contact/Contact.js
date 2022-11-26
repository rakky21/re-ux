import React, { useRef } from "react";
import { useState } from "react";
import { AiOutlineMail } from "react-icons/ai";

import emailjs from "emailjs-com";

function Contact() {
  const [name, setName] = useState("");
  const [correo, setCorreo] = useState("");
  const [comentario, setComentario] = useState("");

  //clear form after submit
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm(
      "service_i4be4im",
      "template_9nsiyeb",
      form.current,
      "ZzbtA-4C5mnas6mko"
    );
  };
  return (
    <section id="contact" className="contact_section">
      <div className="contact_container">
        <h2 className="border-bottom"> CONTACT </h2>
        <form ref={form} onSubmit={sendEmail} className="contact_form">
          <label> First Name:</label>
          <input
            required
            placeholder=" Name"
            type="text"
            value={name}
            name="name"
            onChange={(e) => setName(e.target.value)}
          />
          <label> Email: </label>
          <input
            required
            placeholder=" Example@email.com"
            type="email"
            value={correo}
            name="correo"
            onChange={(e) => setCorreo(e.target.value)}
          />
          <label> Message</label>
          <textarea
            placeholder=" Message"
            type="text"
            value={comentario}
            name="comentario"
            onChange={(e) => setComentario(e.target.value)}
          />
          <div>
            <button className="btn" type="submit">
              {" "}
              <AiOutlineMail /> Contact Me
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}

export default Contact;
