import React, { useEffect, useState } from "react";
import { weatherData } from "./sampleData.js";
import { DateTime } from "./DateTime";
import "./App.css";
import axios from "axios";

var Latitude;
var Longitude;
export const WeatherComponent = () => {
  const [latitude, setLatitude] = useState(null);
  const [longitude, setLongitude] = useState(null);
  const [url, setUrl] = useState(null);

  useEffect(() => {
    const getCurrentPosition = () => {
      return new Promise((resolve, reject) => {
        if (navigator.geolocation) {
          navigator.geolocation.getCurrentPosition(
            (position) => resolve(position),
            (error) => reject(error)
          );
        } else {
          reject(new Error("Geolocation is not supported by this browser."));
        }
      });
    };

    const getGeolocationData = async () => {
      try {
        const position = await getCurrentPosition();
        const latitude = position.coords.latitude;
        Latitude = position.coords.latitute;
        Longitude = position.coords.longitude;
        const longitude = position.coords.longitude;
        const apiUrl = `https://api.weatherapi.com/v1/current.json?key=0016e2de200e4217936134217232112&q=${latitude},${longitude}`;

        console.log(`Latitude: ${latitude}, Longitude: ${longitude}`);
        console.log(`URL: ${apiUrl}`);

        // Set state with the obtained values
        setLatitude(latitude);
        setLongitude(longitude);
        setUrl(apiUrl);
      } catch (error) {
        console.log("Error getting geolocation:", error.message);
      }
    };

    // Call the asynchronous function
    getGeolocationData();
  }, []); // The empty dependency array ensures that useEffect runs only once, similar to componentDidMount
  console.log(url);
  //   const weatherData = axios.get(    "https://api.weatherapi.com/v1/current.json?key=0016e2de200e4217936134217232112&q=17.4332339,78.4411997");
  console.log(weatherData);
  return (
    <div>
      <h2>
        {weatherData.location.name}, {weatherData.location.country}
      </h2>
      <p>
        Coordiantes: {weatherData.location.lon}, {weatherData.location.lat}
      </p>
      <p>TimeZone = {weatherData.location.localtime}</p>
      <h1>{weatherData.current.condition.text}</h1>
      <img alt="Icon" src={weatherData.current.condition.icon} />
      <DateTime></DateTime>
      <p>
        Temperature: {weatherData.current.temp_c}C or{" "}
        {weatherData.current.temp_f}F
      </p>
      <p>
        Wind Direction: {weatherData.current.wind_dir},{" "}
        {weatherData.current.wind_kph}kph
      </p>
      <p>Humidity: {weatherData.current.humidity}</p>

      {/* {latitude !== null && longitude !== null && (
        <div>
          <p>Latitude: {latitude}</p>
          <p>Longitude: {longitude}</p>
          <p>API URL: {url}</p>
        </div>
      )} */}
    </div>
  );
};
export const coordinates = {
  lon: Longitude,
  lat: Latitude,
};
export default WeatherComponent;
