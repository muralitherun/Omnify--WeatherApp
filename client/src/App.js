import React, { useState } from 'react';
import axios from 'axios';
import "./App.css";
import "./Navbar/Navbar";
import Navbar from './Navbar/Navbar';

function App() {
  const [city, setCity] = useState('');
  const [weatherData, setWeatherData] = useState(null);
  const [isReportVisible, setIsReportVisible] = useState(false);

  const handleInputChange = (event) => {
    setCity(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    
    // Sending REQUEST to the backend for fetching the weather data
    try {
      const response = await axios.get(`https://backend-weather-production.up.railway.app/weatherReport?location=${city}`);
      setWeatherData(response.data);
      setIsReportVisible(true);
    } catch (error) {
      console.log('Error:', error.message);
    }
  };

  const handleClearReport = () => {
    setWeatherData(null);
    setIsReportVisible(false);
    setCity('');
  };

  return (
    <div>
      <Navbar />
      <div className="App">
          {!isReportVisible ? (
          <>
            <img alt='anim gif' src='https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExMDRqd2NldmZqeGtmbDFkbHJvbHZqaW5kNHo4MDRnZTgxd2pmZ2x4bSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/l4FGkdtLGfpUiBdFC/giphy.gif'></img>
            <form className='form-container' onSubmit={handleSubmit}>
              <input type="text" value={city} onChange={handleInputChange} placeholder="Enter city name" />
              <br />
              <button type="submit"><strong>GET WEATHER REPORT</strong></button>
            </form>
          </>
      ) : (
          <div className='weather-container'>
              <h2>WEATHER REPORT</h2>
              <img alt='anim gif' className='report' src='https://media.giphy.com/media/39xApN4bW6ygdrvBM3/giphy.gif'></img>
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
              <button className='clear' onClick={handleClearReport}><strong>CLEAR REPORT</strong></button>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;