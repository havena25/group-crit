const express = require("express"); // import express
const path = require("path"); // import path (to access file and directory paths)
const { authMiddleware } = require("./utils/auth");

// apollo Server
const { ApolloServer } = require("apollo-server-express");

// typeDefs and resolvers
const { typeDefs, resolvers } = require("./schemas");
const db = require("./config/connection");

const app = express();

const PORT = process.env.PORT || 3001;

// create a new Apollo Server and pass in our schema data
const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: authMiddleware,
});

// integrate the Apollo server with express application as middleware
server.applyMiddleware({ app });

app.use(express.urlencoded({ extended: true })); // parse incoming string or array data
app.use(express.json()); // parse incoming JSON data

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "../client/build")));
}
// NEED TO CREATE BUILD FILE
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../client/build/index.html"));
});
// connect to server
db.once("open", () => {
  app.listen(PORT, () => {
    console.log(`API server running on port ${PORT}!`);
    console.log(`Use GraphQL at http://localhost:${PORT}${server.graphqlPath}`);
  });
});
