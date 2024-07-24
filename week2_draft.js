const express = require('express');
var url = require('url')

const app = express();

const port = 3000; // Choose any port you prefer

// Define routes
// http://localhost:3000/
app.get("/", (req, res) => {
  res.send("Home Page");
});

// http://localhost:3000/about
app.get("/about", (req, res) => {
  res.send("About Page");
});

// http://localhost:3000/contact
app.get("/contact", (req, res) => {
  res.send("Contact Page");
});

// http://localhost:3000/GetWeather
// http://localhost:3000/GetWeather?year=2024&month=7
app.get('/GetWeather', (req, res) => {
  // Parse query parameters
  const queryString = url.parse(req.url, true).query;
  const year = queryString.year || new Date().getFullYear();
  const month = queryString.month || new Date().getMonth()+1;;

  // Replace this with actual weather data retrieval logic
  // For now, let's just return a sample response
  const weatherData = {
    year,
    month,
    temperature: randomIntFromInterval(10, 35), // Example temperature (you can fetch real data here)
    condition: getRandomWeatherCondition(), // Example weather condition
  };

  res.status(200).json(weatherData);
});

// Start the server
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
  });


  // Functions

  function randomIntFromInterval(min, max) {
    // min and max included
    return Math.floor(Math.random() * (max - min + 1) + min);
  }
  function getRandomWeatherCondition() {
    const weatherConditions = ["Sunny", "Cloudy", "Rainy"];
    const randomIndex = Math.floor(Math.random() * weatherConditions.length);
    return weatherConditions[randomIndex];
  }