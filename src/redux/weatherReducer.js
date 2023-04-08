import {
  FETCH_CITIES_LIST,
  FETCH_RIGHT_WEATHER,
  FETCH_LEFT_WEATHER,
} from "./types";

const initialState = {
  citiesList: [],
  weatherLEFT: [],
  weatherRIGHT: [],
};
export const weatherReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_CITIES_LIST:
      return { ...state, citiesList: action.payload };
    case FETCH_LEFT_WEATHER:
      return { ...state, weatherLEFT: action.payload };
    case FETCH_RIGHT_WEATHER:
      return { ...state, weatherRIGHT: action.payload };
    default:
      return state;
  }
};
