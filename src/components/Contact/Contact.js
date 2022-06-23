import React, { useState } from "react";

export default function Contact() {
  const [name, setName] = useState("");
  const [apellido, setApellido] = useState("");
  const [correo, setCorreo] = useState("");

  return (
    <form className="contact">
      <h1> Contact </h1>
      <div>
        <label> First Name:</label>
        <input
          placeholder="John"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <label> Last Name</label>
        <input
          placeholder="Smith"
          type="text"
          value={apellido}
          onChange={(e) => setApellido(e.target.value)}
        />
        <label> Email </label>
        <input
          placeholder="email@email.com"
          type="text"
          value={correo}
          onChange={(e) => setCorreo(e.target.value)}
        />
        <label> Comment</label>
        <textarea placeholder="Comment"></textarea>
      </div>
      <button type="Submit"> Submit</button>
      <p> {name}</p>
    </form>
  );
}
