const express = require("express");
const app = express();
const port = 3000; // Choose any port you prefer

// Define routes
app.get("/", (req, res) => {
  res.send("Home Page");
});

app.get("/about", (req, res) => {
  res.send("About Page");
});

app.get("/contact", (req, res) => {
  res.send("Contact Page");
});

// Start the server
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
  });