import React from "react";

function Card({ projectCards, titulos }) {
  return (
    <section className="container">
      <div className="container_card">
        <h2 className="border-bottom">{titulos}</h2>
        <div>
          {projectCards.map((card) => (
            <div className="card-body" key={card.id}>
              <div className="card col" style={{ width: "18rem" }}>
                <img
                  src={card.img}
                  className="card-img"
                  alt="Group Project Example"
                />
                <h3 className="card-title">{card.name}</h3>
                <small className="card-text">{card.description}</small>
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
        </div>
      </div>
    </section>
  );
}

export default Card;
