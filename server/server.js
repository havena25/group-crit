const express = require("express"); // import express
const path = require("path"); // import path (to access file and directory paths)

const app = express();

const PORT = process.env.PORT || 3001;

app.use(express.urlencoded({ extended: true })); // parse incoming string or array data
app.use(express.json()); // parse incoming JSON data

const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: ({ req }) => req.headers
});

// connect to server
app.listen(PORT, () => {
  console.log(`API server now on port ${PORT}!`);
});
