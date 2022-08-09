import React from "react";

function Card ({projectCards, titulos}) {

  return (
    <div className="flex">
      <h2>{titulos}</h2>
      {projectCards.map((card) => (
        <div className="cards" key={card.id}>
          <img src={card.img} alt="Group Project Example"/>
          <h3>{card.name}</h3>
          <p>{card.description}</p>
          <div>
            <a
              className="btn btn-primary col-4"
              href={card.href}
              target="_blank"
              rel="noreferrer noopener"
            >
              {" "}
              Open{" "}
            </a>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Card;
