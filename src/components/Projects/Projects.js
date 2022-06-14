import React from "react";
import Card from "../Card/Card.js";
import toolkit from "../../assets/projects/toolkit.jpg";
import tunebook from "../../assets/projects/tunebook.jpg";
import famigos from "../../assets/projects/Famigos.jpg";

function Projects() {
  const cards = [
    {
      id: "1",
      img: toolkit,
      name: "Toolkit",
      description: "First project",
      href: "https://lrivales.github.io/app-toolkit/",
    },
    {
      id: "2",
      img: tunebook,
      name: "Tunebook",
      description: "First Second",
    },
    {
      img: famigos,
      name: "FourAmigos",
      description: "Third project",
    },
  ];

  const projectList = cards.map((card) => <Card key={card.id} card={card} />);
  return <div> {projectList}</div>;
}

export default Projects;
