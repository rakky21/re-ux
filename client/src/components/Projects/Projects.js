import React from "react";
import Card from "../Card/Card.js";
import toolkit from "../../assets/projects/toolkit.jpg";
import tunebook from "../../assets/projects/tunebook.jpg";
import famigos from "../../assets/projects/Famigos.jpg";
import { useState } from "react";

function Projects() {
  const [cards, setCards] = useState([
    {
      id:"1",
      img: toolkit,
      name: "Toolkit",
      description: "First project",
      href: "https://lrivales.github.io/app-toolkit/",
      group:"Group",
    },
    {
      id: "2",
      img: tunebook,
      name: "Tunebook",
      description: "First Second",
      href: "https://lrivales.github.io/app-toolkit/",
      group:"Group",
    },
    {
      id: "3",
      img: famigos,
      name: "FourAmigos",
      description: "Third project",
      href: "https://lrivales.github.io/app-toolkit/",
      group:"Group",
    },
    {
      id: "4",
      img: tunebook,
      name: "Starsmaid",
      description: "This is the fourh project",
      href: "https://lrivales.github.io/app-toolkit/",
      group:"Others",
    },
  ]);

  return (
    <div className="projects">
      {/* <Card projectCards={cards} key={setCards} titulos="Group Projects" /> */}
      <Card projectCards={cards.filter((card) => card.group === "Group")} key={setCards.id} titulos="Group Projects" />
      <Card projectCards={cards.filter((card) => card.group === "Others")} key={setCards.id} titulos="Other Projects" />
    </div>
  );
}

export default Projects;
