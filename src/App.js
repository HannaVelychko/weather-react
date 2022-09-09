import React from "react";
import WeatherSearch from "./WeatherSearch";
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";

function App() {
  return (
    <div className="App">
      <header className="container">
        <h4 className="header">Wroclaw Kyiv Dnipro Lisbon</h4>
        <WeatherSearch />
      </header>
    </div>
  );
}

export default App;
