const express = require("express");

const app = express();

const PORT = process.env.PORT || 3001;

app.get("/api/", (req, res) => {
  res.send("Hello!");
});

// connect to server
app.listen(PORT, () => {
  console.log(`API server now on port ${PORT}!`);
});
