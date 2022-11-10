import React from "react";

function Articulo({ expArticulo, nomArticulo }) {
  return (
    <div className="article">
      <h2 className=" border-bottom"> {nomArticulo} </h2>
      {expArticulo.map((articulo) => (
        <div key={articulo.id}>
          <h5> {articulo.name}</h5>
          <small src={articulo.simbolo} />
          <div> {articulo.experiencia} </div>
        </div>
      ))}
    </div>
  );
}

export default Articulo;
