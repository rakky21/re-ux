import React from "react";

function Card({ projectCards, titulos }) {
  return (
    <section>
      <h2>{titulos}</h2>
      {projectCards.map((card) => (
        <div className="cards" key={card.id}>
          <img src={card.img} alt="Group Project Example" />
          <h3>{card.name}</h3>
          <h6>{card.description}</h6>
          <div>
            <a
              className="btn"
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
    </section>
  );
}

export default Card;
