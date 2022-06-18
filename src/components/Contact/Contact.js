import React, { useState } from "react";
// setState?

export default function Contact() {
  const [name, setName] = useState("");
  const [apellido, setApellido] = useState("");
  const [correo, setCorreo] = useState("");

  return (
    <section className="container">
      <div className="contact">
        <h1> Contact</h1>
        <div>
          <label> First Name:</label>
          <input
            placeholder="John"
            type="text"
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div>
          <label> Last Name:</label>
          <input
            placeholder="Smith"
            type="text"
            value={apellido}
            onChange={(e) => setApellido(e.target.value)}
          />
        </div>
        <div>
          <label> Email adddress:</label>
          <input
            placeholder="email@example.com"
            type="email"
            value={correo}
            onChange={(e) => setCorreo(e.target.value)}
          />
        </div>
        <div>
          <label> Comment:</label>
          <textarea required placeholder="Comment" rows="3"></textarea>
        </div>
        <input
          type="submit"
          value="submit"
          className="button btn btn-primary col-4"
        />
      </div>
    </section>
  );
}
