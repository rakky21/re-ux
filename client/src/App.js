import React, { useState } from "react";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from "@apollo/client";
import { setContext } from "@apollo/client/link/context";

import Nav from "./components/Nav/Nav";
import About from "./components/About/About";
import Projects from "./components/Projects/Projects";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";

const httpLink = createHttpLink({
  uri: "/graphql",
});

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem("id_token");

  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : "",
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

function App() {
  const categories = ["about Me", "projects", "contact"];
  const [currentCategory, setCurrentCategory] = useState(categories[0]);

  const showPage = () => {
    if (currentCategory === "about Me") {
      return <About currentCategory={currentCategory} />;
    } else if (currentCategory === "projects") {
      return <Projects currentCategory={currentCategory} />;
    } else if (currentCategory === "contact") {
      return <Contact currentCategory={currentCategory} />;
    }
  };

  return (
    // <ApolloClient client={client}>
      <div>
        <Nav
          categories={categories}
          currentCategory={currentCategory}
          setCurrentCategory={setCurrentCategory}
        />

        <main>{showPage()}</main>
        <footer>
          <Footer />
        </footer>
      </div>
    // </ApolloClient>
  );
}

export default App;
