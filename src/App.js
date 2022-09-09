import React from "react";
import WeatherSearch from "./WeatherSearch";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="container">
        <h4>Wroclaw</h4>
        <WeatherSearch />
      </header>
    </div>
  );
}

export default App;
