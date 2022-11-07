<<<<<<< HEAD
import { useState } from "react";

export default function Contact() {
  const [name, setName] = useState("");
  const [apellido, setApellido] = useState("");
  const [correo, setCorreo] = useState("");
  const [comentario, setComentario] = useState("");
  const [isPending, setIsPending] = useState(false);

  function getPersonas(e) {
    e.preventDefault();
    setIsPending(true);
=======
import React from "react";
import { AiOutlineMail } from "react-icons/ai";

function Contact() {
  return (
    <section id="contact">
      <h2> CONTACT ME </h2>
      <div className="contact">
        <label> Name </label>
        <input></input>
>>>>>>> 2bc258d13c370ffb9b233e0f98b7c4d2943510ee

        <label> Last Name </label>
        <input></input>

<<<<<<< HEAD
    fetch("http://localhost:3001/personas", {
      method: "POST",
      mode: "cors",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(personas),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log("new entry");
        setIsPending(false);
      });
  }
=======
        <label> Email </label>
        <input></input>

        <textarea></textarea>
>>>>>>> 2bc258d13c370ffb9b233e0f98b7c4d2943510ee

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
