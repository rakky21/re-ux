import React, { useState } from "react";

import Nav from "./components/Nav/Nav";
import About from "./components/About/About";
import Projects from "./components/Projects/Projects";
import Contact from "./components/Contact/Contact";

function App() {

  const categories =
    ['about Me', 'projects', 'contact']

  const [currentCategory, setCurrentCategory] = useState(categories[0])

  const showPage = () => {
    if (currentCategory === 'about Me') {
      return <About currentCategory={currentCategory}></About>
    }
    else if (currentCategory === 'projects'){
      return <Projects currentCategory={currentCategory}></Projects>
    }
    else if (currentCategory === 'contact'){
      return <Contact currentCategory={currentCategory}></Contact>
    }
  }

  return (
    <div>
      <Nav
        categories={categories}
        currentCategory={currentCategory}
        setCurrentCategory={setCurrentCategory}>
      </Nav>

      <main>
        {showPage()}
      </main>
    </div>)
}

export default App;