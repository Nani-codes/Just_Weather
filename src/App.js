import './App.css';
import axios from 'axios';
import {weatherData} from "./sampleData.js";
import { DateTime } from "./DateTime";
import {WeatherComponent, coordinates}  from "./Location";
import React, { useEffect, useState } from 'react';


// console.log(`URL: ${url}`);
// const url = "https://api.weatherapi.com/v1/current.json?key=0016e2de200e4217936134217232112&q="+latitude+","+longitude;
// const weatherData = axios.get(`https://api.weatherapi.com/v1/current.json?key=0016e2de200e4217936134217232112&q=${latitude},${longitude}`)
function App() {
  return (
    <div className="App">
      <WeatherComponent/>
    </div>
  );
}

export default App;
