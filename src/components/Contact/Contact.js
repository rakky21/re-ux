import React, { useState } from "react";
// import { useHistory } from "react-router-dom";

export default function Contact() {
  const [name, setName] = useState("");
  const [apellido, setApellido] = useState("");
  const [correo, setCorreo] = useState("");
  const [comentario, setComentario] = useState("");
  const [isPending, setIsPending] = useState(false);
  // const history = useHistory();

  // prevent from making duplicates
  const handleSubmit = (e) => {
    e.preventDefault();
    const intPer = { name, apellido, correo, comentario };

    setIsPending(true);

    fetch("http://localhost:3000/?", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(intPer),
    }).then(() => {
      console.log("New request submitted");
      setIsPending(false);
    });
  };

  // setIsPending(true);

  return (
    <div className="contact">
      <h1> Contact </h1>
      <form onSubmit={handleSubmit}>
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
        <p> {name}</p>
        {!isPending && <button type="Submit"> Submit</button>}
        {isPending && <button disabled> Loading </button>}
      </form>
    </div>
  );
}
