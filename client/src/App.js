import React, { useState } from 'react';
import axios from 'axios';
import "./App.css";

function App() {
  const [city, setCity] = useState('');
  const [weatherData, setWeatherData] = useState(null);

  const handleInputChange = (event) => {
    setCity(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.get(`http://localhost:5000/weatherReport?location=${city}`);
      setWeatherData(response.data);
    } catch (error) {
      console.log('Error:', error.message);
    }
  };

  const handleClearReport = () => {
    setWeatherData(null);
    setCity('');
  };

  return (
    <div className="App">
      <h1>WEATHER APPLICATION</h1>
      <form className='form-container' onSubmit={handleSubmit}>
        <input type="text" value={city} onChange={handleInputChange} placeholder="Enter city name" />
        <br />
        <button type="submit">GET WEATHER REPORT</button>
      </form>
      {weatherData && (
        <div className='weather-container'>
          <h2>WEATHER REPORT</h2>
          <p>The current weather condition in {city} is "{weatherData.conditions}".</p>
          <table>
            <tbody>
              <tr>
                <th>TEMPERATURE</th>
                <td>{weatherData.temperature} °C</td>
              </tr>
              <tr>
                <th>HUMIDITY</th>
                <td>{weatherData.humidity} %</td>
              </tr>
            </tbody>
          </table>
          <br></br>
          <button onClick={handleClearReport}>CLEAR REPORT</button>
        </div>
      )}
    </div>
  );
}

export default App;