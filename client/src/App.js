import React, { useState } from "react";

import Nav from "./components/Nav/Nav";
import About from "./components/About/About";
import Projects from "./components/Projects/Projects";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";

function App() {

  const categories =
    ['about Me', 'projects', 'contact']

  const [currentCategory, setCurrentCategory] = useState(categories[0])

  const showPage = () => {
    if (currentCategory === 'about Me') {
      return <About currentCategory={currentCategory}/>
    }
    else if (currentCategory === 'projects'){
      return <Projects currentCategory={currentCategory}/>
    }
    else if (currentCategory === 'contact'){
      return <Contact currentCategory={currentCategory}/>
    }
  }

  return (
    <div>
      <Nav
        categories={categories}
        currentCategory={currentCategory}
        setCurrentCategory={setCurrentCategory}/>

      <main>
        {showPage()}
      </main>
      <footer><Footer/></footer>
    </div>)
}

export default App;