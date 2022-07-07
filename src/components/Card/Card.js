// import React from "react";

// function Card({ card, key }) {
//   return (
//     <div className="container">
//       <div className="cards">
//         <img src={card.img} alt="img" />
//         <h2> {card.name}</h2>
//         <div> {card.description} </div>
//         <div>
//           <a
//             className="button btn btn-primary col-4"
//             href={card.href}
//             target="_blank"
//             rel="noreferrer noopener"
//           >
//             {" "}
//             Open{" "}
//           </a>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Card;

import React from "react";

function Cards(props) {
  const cards = props.cards;
  
  function handleClick(e) {
    e.preventDefault();
  }

  return (
    <div className="cards" onSubmit={handleClick}>
      <h2>Group projects </h2>
      {cards.map((cards) => (
        <div>
          <h3>{cards.name}</h3>
          <img src={cards.img}/>
          <div>{cards.description}</div>
          <div>
            <a
              className="button btn btn-primary col-4"
              href={cards.href}
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

export default Cards;
