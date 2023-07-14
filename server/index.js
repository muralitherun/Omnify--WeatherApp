const express = require('express');
const axios = require('axios');
const cors = require('cors');

const app = express();
app.use(cors());
require('dotenv').config();

app.get('/weatherReport', async (req, res) => {
  try {
    //console.log(req.query.location);
    const location = req.query.location;
    
    // Making a request to OpenWeatherMap API using the unique API key
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${process.env.API_KEY}&units=metric`;
    const response = await axios.get(apiUrl);

    // Extraction of relevant weather data
    const weatherData = {
      temperature: response.data.main.temp,
      humidity: response.data.main.humidity,
      conditions: response.data.weather[0].description
    };

    res.json(weatherData);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch weather data' });
  }
});

const port = process.env.PORT;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});