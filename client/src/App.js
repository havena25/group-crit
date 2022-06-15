import React from "react";
import "./App.css";

// import Apollo hooks and modules
import { ApolloProvider } from "@apollo/react-hooks";
import ApolloClient from "apollo-boost";

// component import
import Header from "./components/Header";
import Footer from "./components/Footer";

// page imports
import Home from "./pages/Home";

const client = new ApolloClient({
  uri: "/graphql",
});

function App() {
  return (
    <ApolloProvider client={client}>
      <div>
        <Header />
        <div>
          <Home />
        </div>
        <Footer />
      </div>
    </ApolloProvider>
  );
}

export default App;
