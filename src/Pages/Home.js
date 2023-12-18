import React from "react";
import About from "../components/About/index";
import Nav from "../components/Nav";
import Footer from "../components/Footer";

import Projects from "./Projects";

import { useState } from "react";

function Home() {
  const categories = ["HOME", "PROJECTS"];
  const [currentCategory, setCurrentCategory] = useState(categories[0]);
  const Homes = () => {
    if (currentCategory === "HOME") {
      return <About currentCategory={currentCategory} />;
    } else if (currentCategory === "PROJECTS") {
      return <Projects currentCategory={currentCategory} />;
    }
  };
  return (
    <main>
      <Nav
        categories={categories}
        currentCategory={currentCategory}
        setCurrentCategory={setCurrentCategory}
      />
      <Homes />
      <Footer />
    </main>
  );
}
export default Home;
