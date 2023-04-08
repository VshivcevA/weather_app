import {
  FETCH_CITIES_LIST,
  FETCH_RIGHT_WEATHER,
  FETCH_LEFT_WEATHER,
  CHANGE_LANG,
} from "./types";

const apiKey = process.env.REACT_APP_API_KEY;

export function changeLang(lang) {
  return (dispatch) => {
    dispatch({ type: CHANGE_LANG, payload: lang });
  };
}

export function fetchCitiesList(cityName) {
  return async (dispatch) => {
    if (!cityName.length) return;
    try {
      const response = await fetch(
        `https://api.openweathermap.org/geo/1.0/direct?q=${cityName}&limit=5&appid=${apiKey}`
      );
      const json = await response.json();
      dispatch({ type: FETCH_CITIES_LIST, payload: json });
    } catch (e) {
      console.error("action error", e);
    }
  };
}

export function fetchCityCoordinate(input, side, lang) {
  let cityCode = input.split(" - ").slice(0, 2).join(",");
  return async (dispatch) => {
    if (!input.length) return;
    try {
      const response = await fetch(
        `https://api.openweathermap.org/geo/1.0/direct?q=${cityCode}&limit=5&appid=${apiKey}`
      );
      const json = await response.json();
      dispatch(fetchWeather(json, side, lang));
    } catch (e) {
      console.error("action error", e);
    }
  };
}

function fetchWeather(json, side, lang) {
  const lat = json[0].lat;
  const lon = json[0].lon;
  return async (dispatch) => {
    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric&lang=${lang}`
      );
      const json = await response.json();
      if (side === "LEFT")
        dispatch({ type: FETCH_LEFT_WEATHER, payload: json });
      if (side === "RIGHT")
        dispatch({ type: FETCH_RIGHT_WEATHER, payload: json });
      //не самое изысканное решение, но в масштабах этого приложения, самое надежное
    } catch (e) {
      console.error("action error", e);
    }
  };
}
