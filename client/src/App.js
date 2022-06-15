import React from "react";
import "./App.css";

// import { ApolloProvider } from "@apollo/react-hooks";
// import ApolloClient from "apollo-boost";

// page imports
import Home from "./pages/home";
import Login from "./pages/login";

// component import
// import Nav from "./components/Nav";
import Header from "./components/Header";

function App() {
  return (
    <div>
      <main>
        <Header />
      </main>
    </div>
  );
}

export default App;
