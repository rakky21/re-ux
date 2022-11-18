import React from "react";
import { useState } from "react";
import { AiOutlineMail, AiOutlineLoading3Quarters } from "react-icons/ai";

function Contact() {
  const [name, setName] = useState("");
  const [apellido, setApellido] = useState("");
  const [correo, setCorreo] = useState("");
  const [comentario, setComentario] = useState("");
  const [isPending, setIsPending] = useState(false);

  const handleRequisito = (e) => {
    e.preventDefault();
    setIsPending(true);
  };
  return (
    <section id="contact" className="contact">
      <h2 className=" border-bottom"> Contact </h2>
        <form className="container" onSubmit={handleRequisito}>
          <label> First Name:</label>
          <input
            required
            placeholder="John"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <label> Email </label>
          <input
            required
            placeholder="email@email.com"
            type="text"
            value={correo}
            onChange={(e) => setCorreo(e.target.value)}
          />
          <label> Comment</label>
          <textarea
            placeholder="Comment"
            typeof="text"
            value={comentario}
            onChange={(e) => setComentario(e.target.value)}
          />
          <div>
            {!isPending && (
              <button className="btn" typeof="submit">
                {" "}
                <AiOutlineMail /> Contact Me
              </button>
            )}
            {isPending && (
              <div disabled className="btn">
                <AiOutlineLoading3Quarters /> Loading{" "}
              </div>
            )}
          </div>
        </form>
    </section>
  );
}

export default Contact;


