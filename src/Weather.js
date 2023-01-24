import React, { useState } from "react";
import axios from "axios";

export default function Weather() {
  let [city, setCity] = useState("");
  let [temperature, setTemperature] = useState(null);
  let [humidity, setHumidity] = useState(null);
  let [description, setDescription] = useState(null);
  let [wind, setWind] = useState(null);
  let [icon, setIcon] = useState(null);

  function showTemperature(response) {
    setTemperature(Math.round(response.data.main.temp));
    setHumidity(response.data.main.humidity);
    setDescription(response.data.weather[0].description);
    setWind(Math.round(response.data.wind.speed));
    let iconCode = response.data.weather[0].icon;
    setIcon(`http://openweathermap.org/img/wn/${iconCode}@2x.png`);
  }

  function handleSubmit(event) {
    event.preventDefault();
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=72bb9dab46b9ec3d65f423c63f27a9b8&units=metric`;
    axios.get(url).then(showTemperature);
  }

  function updateCity(event) {
    setCity(event.target.value);
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Search for a city"
          onChange={updateCity}
        />
        <input type="submit" />
      </form>
      {temperature ? (
        <ul className="weather-list">
          <li>Temperature: {temperature}°C</li>
          <li>Description: {description}</li>
          <li>Humidity: {humidity}</li>
          <li>Wind: {wind} km/hr</li>
          <li>
            <img src={icon} alt="description" />
          </li>
        </ul>
      ) : null}
    </div>
  );
}
