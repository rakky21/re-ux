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

    const personas = {
      name: name,
      apellido: apellido,
      correo: correo,
      comentario: comentario,
    };

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

  return (
    <div className="contact">
      <div>
        {requistos.map((val) => {
          return <h1> {val.name}</h1>;
        })}
      </div>
      <h2> Contact </h2>
      <form onSubmit={Requisito}>
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
        <div></div>
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
