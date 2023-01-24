import React from "react";
import Weather from "./Weather";
import "./App.css";
import "./Weather.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Weather App</h1>
        <Weather />
      </header>
      <span>
        <a
          href="https://github.com/MoniqueDaw/weather-react"
          target="_blank"
          rel="noreferrer"
        >
          open-sourced
        </a>{" "}
        on GitHub by Monque D.
      </span>
    </div>
  );
}

export default App;
