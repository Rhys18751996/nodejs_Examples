const express = require('express');
var app = express();
const port = 3000;

// http://localhost:3000/
app.get("/", (req, res) => {
    res.send("Home Page");
  });

// http://localhost:3000/rhys
app.get("/rhys", (req, res) => {
  res.send("added on rhys branch");
});

// http://localhost:3000/about
app.get("/about", (req, res) => {
    res.send("About Page");
  });

console.log("another new change")

// Start the server
app.listen(port, () => {
    console.log(`Server accessible at http://localhost:${port}`);
  });