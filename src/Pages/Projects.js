import React from "react";
import Card from "../components/Card";

const {
  toolkit,
  tunebook,
  famigos,
  tempora,
} = require("../assets/projects/ListadeFotos.js");

import { useState } from "react";

function Projects() {
  const [cards, setCards] = useState([
    {
      id: 1,
      img: toolkit,
      name: "Toolkit",
      description:
        "In this projects, as a group, we decided on what would work best as a tool that could assist us on a daily basis.",
      href: "https://lrivales.github.io/app-toolkit/",
      group: "Group",
    },
    {
      id: 2,
      img: tunebook,
      name: "Tunebook",
      description: "First Second",
      href: "https://lrivales.github.io/app-toolkit/",
      group: "Group",
    },
    {
      id: 3,
      img: famigos,
      name: "FourAmigos",
      description: "Third project",
      href: "https://lrivales.github.io/app-toolkit/",
      group: "Group",
    },
    {
      id: 4,
      img: tunebook,
      name: "Starsmaid",
      description: "This is the fourh project",
      href: "https://lrivales.github.io/app-toolkit/",
      group: "Others",
    },
    {
      id: 5,
      img: tempora,
      name: "Weather",
      description: "This app will display the weather of your desired city",
      href: "https://rakky21.github.io/tempora/",
      group: "Snippits",
    },
    {
      id: 6,
      img: tempora,
      name: "BudgetTracker",
      description: "TBD",
      href: "https://rakky21.github.io/tempora/",
      group: "Snippits",
    },
    {
      id: 7,
      img: tempora,
      name: "Run Buddy",
      description: "Work done during the bootcamp",
      href: "https://rakky21.github.io/run-buddy/",
      group: "Others",
    },
    {
      id: 8,
      img: tempora,
      name: "Run Buddy",
      description: "Work done during the bootcamp",
      href: "https://rakky21.github.io/run-buddy/",
      group: "Group",
    },
  ]);

  return (
    <section id="projects" className="projects_list">
      {/* <Card projectCards={cards} key={setCards} titulos="Group Projects" /> */}
      <Card
        projectCards={cards.filter((card) => card.group === "Group")}
        key={setCards.id}
        titulos="GROUP PROJECTS"
      />
      <Card
        projectCards={cards.filter((card) => card.group === "Snippits")}
        key={setCards.id}
        titulos="SNIPPETS"
      />
    </section>
  );
}

export default Projects;
