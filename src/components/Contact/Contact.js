import { useState } from "react";

export default function Contact() {
  const [name, setName] = useState("");
  const [apellido, setApellido] = useState("");
  const [correo, setCorreo] = useState("");
  const [comentario, setComentario] = useState("");
  const [isPending, setIsPending] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    setIsPending(true);

    const personas = {
      name: name,
      apellido: apellido,
      correo: correo,
      comentario: comentario,
    };

    fetch("http://localhost:3001/personas", {
      method: "POST",
      mode: 'cors',
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(personas),
    }).then(() => {
      console.log("new entry");
      setIsPending(false);
    });
  }

  return (
    <div className="contact">
      <h2 className="title"> Contact Me</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name"> Name</label>
        <input
          id="name"
          required
          placeholder="John"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <label>Last Name</label>
        <input
          required
          placeholder="Smith"
          type="text"
          value={apellido}
          onChange={(e) => setApellido(e.target.value)}
        />
        <label>Email</label>
        <input
          required
          placeholder="Email@email.com"
          type="text"
          value={correo}
          onChange={(e) => setCorreo(e.target.value)}
        />
        <label>Comments</label>
        <textarea
          placeholder="Comment"
          type="text"
          value={comentario}
          onChange={(e) => setComentario(e.target.value)}
        />
        <br />
        {!isPending && (
          <button className="btn-primary btn col-4" onClick={handleSubmit}>
            {" "}
            Submit
          </button>
        )}
        {isPending && (
          <button className="btn-primary btn col-4" onClick={handleSubmit}>
            {" "}
            Loading
          </button>
        )}
      </form>
    </div>
  );
}
