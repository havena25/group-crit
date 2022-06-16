import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import "./App.css";

// import Apollo hooks and modules
import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";

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
import ArtForm from "./pages/artForm";

const client = new ApolloClient({
  request: (operation) => {
    const token = localStorage.getItem("id_token");

    operation.setContext({
      headers: {
        authorization: token ? `Bearer ${token}` : "",
      },
    });
  },
  uri: "/graphql",
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <div>
          <Header />
          <div>
            <Routes>
              <Route exact path="/" element={<Home />} />
              <Route exact path="/login" element={<Login />} />
              <Route exact path="/signup" element={<Signup />} />
              <Route exact path="/art/:id" element={<SingleArt />} />
              <Route exact path="/profile/:username?" element={<Profile />} />
              <Route exact path="/artform" element={<ArtForm />} />
              <Route element={<NoMatch />} />
            </Routes>
          </div>
          <Footer />
        </div>
      </Router>
    </ApolloProvider>
  );
}

export default App;
