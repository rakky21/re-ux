import React from "react";
import About from "../components/About/About";
import Projects from "../components/Projects/Projects";
import Contact from "../components/Contact/Contact";

export default Home = () => {
  return (
    <div className="container">
      <About />
      <Projects />
      <Contact />
    </div>
  );
};
