import React from "react";
import About from "../components/About";
import Nav from "../components/Nav";
import Footer from "../components/Footer";

import Contact from "./Contact";
import Experience from "./Experience";
import Projects from "./Projects";

import { useState } from "react";

function Home() {
  const categories = ["HOME","EXPERIENCE", "PROJECTS", "CONTACT"];
  const [currentCategory, setCurrentCategory] = useState(categories[0]);
  const Homes = () => {
    if (currentCategory === "HOME") {
      return <About currentCategory={currentCategory} />;
    }else if (currentCategory === "PROJECTS") {
      return <Projects currentCategory={currentCategory} />;
    } else if (currentCategory === "EXPERIENCE") {
      return <Experience currentCategory={currentCategory} />;
    } else if (currentCategory === "CONTACT") {
      return <Contact currentCategory={currentCategory} />;
    }
  };
  return (
    <main>
      <Nav
        categories={categories}
        currentCategory={currentCategory}
        setCurrentCategory={setCurrentCategory}
      />
      <div className="Home_About">
        <About />
      </div>
      <Homes />
      <footer>
        <Footer />
      </footer>
    </main>
  );
}
export default Home;
