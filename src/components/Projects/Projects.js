import React from "react";
import tunebook from "../../assets/projects/tunebook.jpg";
import toolkit from "../../assets/projects/toolkit.jpg";
import famigos from "../../assets/projects/4amigos.jpg";

// for loop for each item on the list create a "div"
function Projects() {
  const [cards] = [
    {
      name: "Displayone",
      href: "https://lrivales.github.io/app-toolkit/",
      description: "First",
      img: toolkit,
    },
    {
      name: "2display",
      href: "https://lrivales.github.io/app-toolkit/",
      description: "Second",
      img: tunebook,
    },
    {
      name: "3third",
      href: "https://lrivales.github.io/app-toolkit/",
      description:"Third",
      img: famigos,
    }
  ];

  return (
    <div className="container"> 
    <div className="card" style={{ width: "18rem" }}>
      <img src={cards.img} alt="img" />
      <div className="center">
      <div>{cards.name}</div>
      <a href={cards.href} target="_blank" rel="noreferrer noopener" className="button"> Open </a>
      </div>
      </div>
    </div>
  );
}

export default Projects;
