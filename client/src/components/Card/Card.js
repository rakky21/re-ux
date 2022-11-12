import React from "react";

function Card({ projectCards, titulos }) {
  return (
    <section>
      <h2>{titulos}</h2>
      {projectCards.map((card) => (
        <div className="card-body" key={card.id}>
          <div className="card col" style={{ width: "18rem" }}>
            <img
              src={card.img}
              className="card-img"
              alt="Group Project Example"
            />
            <h3 className="card-title">{card.name}</h3>
            <h6 className="card-text">{card.description}</h6>
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
        </div>
      ))}
    </section>
  );
}

export default Card;
