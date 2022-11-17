import React from "react";
import About from "../About/About";
import Projects from "../Projects/Projects";
import Nav from "../Nav/Nav";
import Contact from "../Contact/Contact";
import Footer from "../Footer/Footer";
import Experience from "../Experience/Experience";
import { useState } from "react";

function Home() {
  const categories = ["Home", "experience", "projects", "contact"];
  const [currentCategory, setCurrentCategory] = useState(categories[0]);
  const Homes = () => {
    if (currentCategory === "Home") {
      return "/";
    } else if (currentCategory === "projects") {
      return <Projects currentCategory={currentCategory} />;
    } else if (currentCategory === "experience") {
      return <Experience currentCategory={currentCategory} />;
    } else if (currentCategory === "contact") {
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
      <div>
        <About />
      </div>
      <div>
        <Homes />
      </div>
      <footer>
        <Footer />
      </footer>
    </main>
  );
}
export default Home;
