import React, { useState } from "react";

import Portfolio from "./components/Portfolio/Portfolio";
import Nav from "./components/Nav/Nav";
import About from "./components/About/About"

function App() {

  const categories =
    ['portfolio', 'about me', 'projects', 'contact']

  const [currentCategory, setCurrentCategory] = useState(categories[0])

  const showPage = () => {
    if (currentCategory === 'portfolio') {
      return <Portfolio currentCategory={currentCategory}></Portfolio>
    }
    else if (currentCategory === 'about') {
      return <About currentCategory={currentCategory}></About>
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