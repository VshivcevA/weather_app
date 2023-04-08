import { useSelector } from "react-redux";

export function CompareCard() {
  const left = useSelector((state) => state.weather.weatherLEFT);
  const right = useSelector((state) => state.weather.weatherRIGHT);
  if (left.name && right.name)
    return (
      <p>
        {left.main.temp > right.main.temp
          ? "Теплее на " + Math.round(left.main.temp - right.main.temp)
          : "Холоднее на " +
            Math.abs(Math.round(left.main.temp - right.main.temp))}
      </p>
    );
}
