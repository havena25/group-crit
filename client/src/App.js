import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import "./App.css";

// import Apollo hooks and modules
import { ApolloProvider } from "@apollo/react-hooks";
import ApolloClient from "apollo-boost";

// component import
import Header from "./components/Header";
import Footer from "./components/Footer";

// page imports
import Home from "./pages/home";
import Login from "./pages/login";
import NoMatch from "./pages/noMatch";
import SingleArt from "./pages/singleArt";
import Signup from "./pages/signup";

const client = new ApolloClient({
  uri: "/graphql",
});

function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <div>
          <Header />
          <div>
            <Routes>
              <Route exact path="/" component={Home} />
              <Route exact path="/login" component={Login} />
              <Route exact path="/signup" component={Signup} />
              <Route exact path="/case/:id" component={SingleArt} />

              <Route component={NoMatch} />
            </Routes>
          </div>
          <Footer />
        </div>
      </Router>
    </ApolloProvider>
  );
}

export default App;
