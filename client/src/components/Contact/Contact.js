import React, { useState } from "react";
import axios from "axios";

export default function Contact() {
  const [name, setName] = useState("");
  const [apellido, setApellido] = useState("");
  const [correo, setCorreo] = useState("");
  const [comentario, setComentario] = useState("");
  const [isPending, setIsPending] = useState(false);

  // const [personas, setPersonas] = useState(null);

  const getPersonas = (e) => {
    e.preventDefault();
    setIsPending(true);
    axios
      .post("http://localhost:3001/personas")
      .then((res) => {
        console.log(res);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div className="contact">
      <h2> Contact </h2>
      <form onSubmit={getPersonas}>
        <label> First Name:</label>
        <input
          required
          placeholder="John"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <label> Last Name</label>
        <input
          required
          placeholder="Smith"
          type="text"
          value={apellido}
          onChange={(e) => setApellido(e.target.value)}
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
        ></textarea>
        <div>
          
        </div>
        {/* <br/> */}
        {!isPending && (
          <button className="btn-primary btn col-4"> Submit</button>
        )}
        {isPending && (
          <button disabled className="btn-primary btn col-4">
            {" "}
            Loading{" "}
          </button>
        )}
      </form>
    </div>
  );
}
