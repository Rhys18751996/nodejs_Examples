const express = require('express');
const url = require('url')

const port = 3000;
var app = express();
var fs = require('fs');

// Define routes
// http://localhost:3000/
app.get("/", (req, res) => {
  res.send("Home Page");
});

// http://localhost:3000/about
app.get("/about", (req, res) => {
  res.send("About Page");
});

// http://localhost:3000/demofilePage
app.get("/demofilePage", (req, res) => {
  fs.readFile('./demofile1.html', function(err, data) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write(data);
    return res.end();
  });
});

// http://localhost:3000/contact
app.get("/contact", (req, res) => {
  res.send("Contact Page");
});

// http://localhost:3000/GetWeather
// http://localhost:3000/GetWeather?year=2024&month=7
app.get('/GetWeather', (req, res) => 
{
  // Extracting query string's or settings as default values
  var queryString = url.parse(req.url, true).query;
  var year = queryString.year || new Date().getFullYear();
  var month = queryString.month || new Date().getMonth()+1;

  // Creating the JSON response to return back as text
  var weatherData = {
    year,
    month,
    temperature: randomIntFromInterval(10, 35), // Example temperature (you can fetch real data here)
    condition: getRandomWeatherCondition(), // Example weather condition
  };

  // return the response code and return the weatherData as json format
  res.status(200).json(weatherData);
});

// Start the server
app.listen(port, () => {
    console.log(`Server accessible at http://localhost:${port}`);
  });


  // Extra Functions

  /**
   * Returns an integer value between the min and max values given.
   * @param {*} min 
   * @param {*} max 
   * @returns integer
   */
  function randomIntFromInterval(min, max) {
    // min and max included
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

  /**
   * This function picks a random weather condition ["Sunny", "Cloudy", "Rainy"] as a string
   * @returns string
   */
  function getRandomWeatherCondition() {
    const weatherConditions = ["Sunny", "Cloudy", "Rainy"];
    const randomIndex = Math.floor(Math.random() * weatherConditions.length);
    return weatherConditions[randomIndex];
  }