import "./App.css";
// import { CompareCard } from "./components/CompareCard";
import React from "react";
import LangChange from "./components/LangChange";
import WeatherCard from "./components/WeatherCard";
import { CardGroup } from "react-bootstrap";

function App() {
  return (
    <div className="App">
      <LangChange />
      <CardGroup style={{ width: "600px" }}>
        <WeatherCard side={"LEFT"} />
        {/*<CompareCard />*/}
        <WeatherCard side={"RIGHT"} />
      </CardGroup>
    </div>
  );
}

export default App;
