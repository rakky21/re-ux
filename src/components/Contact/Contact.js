// import { useState, useEffect } from "react";
import { useState } from "react";

export default function Contact() {
  const [name, setName] = useState("");
  const [apellido, setApellido] = useState("");
  const [correo, setCorreo] = useState("");
  const [comentario, setComentario] = useState("");
  const [isPending, setIsPending] = useState(false);
  // const [personas, setPersonas] = useState();

  function handleSubmit(e) {
    e.preventDefault();
    setIsPending(true);

    const personas = {
      name: name,
      apellido: apellido,
      correo: correo,
      comentario: comentario,
    };
    console.log(personas);
  }

  // useEffect(() => {
  //   fetch("http://localhost:3001/personas")
  //     .then((res) => {
  //       return res.json();
  //     })
  //     .then((data) => {
  //       setPersonas(data);
  //       setIsPending(false)
  //     });
  // }, []);

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

// import React, { useState, useEffect } from "react";

// export default function Contact() {
//   const [name, setName] = useState("");
//   const [apellido, setApellido] = useState("");
//   const [correo, setCorreo] = useState("");
//   const [comentario, setComentario] = useState("");
//   // const [message, setMessage] = useState('');
//   const [isPending, setIsPending] = useState(false);
//   const [personas, setPersonas] = useState('');
//   // prevent from making duplicates

//   // const handleSubmit = (e) => {
//   //   e.preventDefault();
//   //   setIsPending(true);
//   // };

// // setIsPending(true);
// useEffect(() => {
//   fetch("http://localhost:3001/personas")
//     .then((res) => {
//       console.log("running");
//       return res.json();
//     })
//     .then((data) => {
//       setPersonas(data);
//     });
// }, []);

//   useEffect(() => {
//     fetch("http://localhost:3001/personas")
//     .then(res => {
//       setIsPending();
//       return res.json();
//     })
//     .then(data=> {
//       setPersonas(data);
//     })
//   }, [])

//   return (
//     <div className="contact">
//       <h2> Contact </h2>
//       <form onSubmit={personas}>
//       {/* <form> */}
//         <label> First Name:</label>
//         <input
//           required
//           placeholder="John"
//           type="text"
//           value={name}
//           onChange={(e) => setName(e.target.value)}
//         />
//         <label> Last Name</label>
//         <input
//           required
//           placeholder="Smith"
//           type="text"
//           value={apellido}
//           onChange={(e) => setApellido(e.target.value)}
//         />
//         <label> Email </label>
//         <input
//           required
//           placeholder="email@email.com"
//           type="text"
//           value={correo}
//           onChange={(e) => setCorreo(e.target.value)}
//         />
//         <label> Comment</label>
//         <textarea
//           placeholder="Comment"
//           typeof="text"
//           value={comentario}
//           onChange={(e) => setComentario(e.target.value)}
//         ></textarea>
//         {/* <p> {name}</p> */}

//         {/* <div className="message">{message ? <p>{message}</p> : null}</div> */}

//         {!isPending && (
//           <button type="Submit" className="btn-primary btn col-4">
//             {" "}
//             Submit
//           </button>
//         )}
//         {isPending && (
//           <button disabled className="btn-primary btn col-4">
//             {" "}
//             Loading{" "}
//           </button>
//         )}
//       </form>
//     </div>
//   );
// }
