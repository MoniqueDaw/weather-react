import React from "react";
import Weather from "./Weather";
import "./App.css";
import "./Weather.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Weatherer App</h1>
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
        on GitHub by Monique D.
      </span>
    </div>
  );
}

export default App;
