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
import Profile from "./pages/Profile";

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
              <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/login" component={Login} />
                <Route exact path="/signup" component={Signup} />
                <Route exact path="/art/:id" component={SingleArt} />
                <Route exact path="/profile/:username?" component={Profile} />
                <Route exact path="/artform" component={ArtForm} />
                <Route component={NoMatch} />
              </Switch>
            </div>
          <Footer />
        </div>
      </Router>
    </ApolloProvider>
  );
}

export default App;
