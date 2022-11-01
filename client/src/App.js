import React, { useState } from "react";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  HttpLink,
  createHttpLink,
} from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
import { onError } from "@apollo/client/link/error";

import Nav from "./components/Nav/Nav";
import About from "./components/About/About";
import Projects from "./components/Projects/Projects";
import Footer from "./components/Footer/Footer";
import Home from "./pages/Home";

const errorLink = onError(({ graphqlErrors, networkError }) => {
  if (graphqlErrors) {
    graphqlErrors.map(({ message, location, path }) => {
      alert(`Graphql error ${message}`);
    });
  }
});
const httpLink = createHttpLink([
  errorLink,
  new HttpLink({
    uri: "https://localhost:3001/graphql",
  }),
]);

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
  return (
    <ApolloProvider client={client}>
      <Home />
    </ApolloProvider>
  );
}
export default App;

// function App() {
//   const categories = ["about Me", "projects", "contact"];
//   const [currentCategory, setCurrentCategory] = useState(categories[0]);

//   const showPage = () => {
//     if (currentCategory === "about Me") {
//       return <About currentCategory={currentCategory} />;
//     } else if (currentCategory === "projects") {
//       return <Projects currentCategory={currentCategory} />;
//     } else if (currentCategory === "contact") {
//       return <Contact currentCategory={currentCategory} />;
//     }
//   };

//   return (
//     <div>
//       <Nav
//         categories={categories}
//         currentCategory={currentCategory}
//         setCurrentCategory={setCurrentCategory}
//       />

//       <main>{showPage()}</main>
//       <footer>
//         <Footer />
//       </footer>
//     </div>
//   );
// }

// export default App;
