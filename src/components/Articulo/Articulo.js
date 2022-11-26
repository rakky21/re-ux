import React from "react";

function Articulo({ expArticulo, nomArticulo }) {
  return (
    <div className="articulo_container">
      <div className="article">
        <h3 className="border-bottom"> {nomArticulo} </h3>
        {expArticulo.map((articulo) => (
          <div key={articulo.id}>
            <h5> {articulo.name}</h5>
            <small src={articulo.simbolo} />
            <div> {articulo.experiencia} </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Articulo;
