import React from "react";

function Card({ card, key }) {
  return (
        <div className="columns">
    <div className="container">

      <div className="card my-2" style={{ width: "18rem" }}>
        <img src={card.img} alt="img" />
        <div className="center">
          {" "}
          {card.name}
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
      </div>
    </div>
  );
}

export default Card;
