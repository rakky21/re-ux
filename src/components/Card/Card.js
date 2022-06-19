import React from "react";

function Card({ card, key }) {
  return (
    <div className="container">
      <div className="cards">
        <img src={card.img} alt="img" />
        <h2> {card.name}</h2>
        <div> {card.description} </div>
        <div>
          <a
            className="button btn btn-primary col-4"
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
  );
}

export default Card;
