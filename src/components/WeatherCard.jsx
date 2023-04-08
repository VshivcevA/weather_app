import React, { useState } from "react";
import { useSelector } from "react-redux";
import CitySearch from "./CitySearch";
import { text } from "./dictionary";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import { Button } from "react-bootstrap";

function fixName(name) {
  if (name === "Новая Голландия") return "Санкт Петербург";
  if (name === "Novaya Gollandiya") return "Saint Petersburg";
  return name;
}

function firstToUpperCase(str) {
  return str[0].charAt(0).toUpperCase() + str.slice(1)
}

function WeatherCard({ side }) {
  const [details, setDetails] = useState(false);
  const weather = useSelector((state) => {
    if (side === "LEFT") return state.weather.weatherLEFT;
    if (side === "RIGHT") return state.weather.weatherRIGHT;
  });
  const lang = useSelector((state) => state.app.lang);

  return (
    <Card>
      <CitySearch side={side} />

      {weather.main && (
        <Card.Body>
          <Card.Img
            style={{ height: "100px", width: "100px" }}
            src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
            alt="weather icon"
          />

          <p>
            {text.name[lang] + ":"} {fixName(weather.name)}
          </p>

          <ListGroup>
            <ListGroup.Item>
              {text.weather[lang] + ":"}
              <br />
              {firstToUpperCase(weather.weather[0].description)}
            </ListGroup.Item>
            <ListGroup.Item>
              {text.temp[lang] + ": "}
              <br />
              {weather.main.temp > 0
                ? "+ " + Math.round(weather.main.temp)
                : Math.round(weather.main.temp)}
              {<span> &#8451;</span>}
            </ListGroup.Item>
          </ListGroup>

          <Button
            style={{ margin: "10px" }}
            onClick={() => setDetails((prev) => !prev)}
          >
            {details ? text.show.less[lang] : text.show.more[lang]}
          </Button>

          {details && (
            <ListGroup>
              <ListGroup.Item>
                {text.pressure[lang] + ":"}
                <br />
                {lang === "en"
                  ? weather.main.pressure + " hPa"
                  : Math.round(weather.main.pressure * 0.75) + " мм рт ст"}
              </ListGroup.Item>
              <ListGroup.Item>
                {text.humidity[lang] + ":"}
                <br />
                {weather.main.humidity + " %"}
              </ListGroup.Item>
              <ListGroup.Item>
                {text.wind[lang] + ":"}
                <br />
                {text.wind.speed[lang] + ": "}
                {Math.round(weather.wind.speed)}
                <br />
                {text.wind.degree[lang] + ": "}{weather.wind.deg}&deg;
              </ListGroup.Item>
            </ListGroup>
          )}
        </Card.Body>
      )}
    </Card>
  );
}

export default WeatherCard;
