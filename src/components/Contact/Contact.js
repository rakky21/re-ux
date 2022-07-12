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

    // useEffect(() =>{
    // }, [handleSubmit])

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

  return (
    <div className="contact">
      <h2> Contact </h2>
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
        {!isPending && <button type="Submit" className="btn-primary btn col-4"> Submit</button>}
        {isPending && <button disabled className="btn-primary btn col-4"> Loading </button>}
      </form>
    </div>
  );
}
