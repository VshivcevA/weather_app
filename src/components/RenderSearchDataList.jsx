import React from "react";
import { useSelector } from "react-redux";

const RenderSearchDataList = ({ side }) => {
  const list = useSelector((state) => state.weather.citiesList);

  return (
    <datalist id={`weather${side}List`}>
      <option value={"Paphos"} />
      <option value={"Saint Petersburg"} />
      {
        list.length &&
        list.map((i, index) => {
          return (
            <option
              value={
              i.name + " - " +
              i.state + " - " +
              i.country
              }
              key={
                i.name +
                i.state +
                i.country +
                index
              }
            />
          );
        })}
    </datalist>
  );
};

export default RenderSearchDataList;
