import React from "react";
import RenderSearchDataList from "./RenderSearchDataList";
import { useDispatch, useSelector } from "react-redux";
import { fetchCitiesList, fetchCityCoordinate } from "../redux/actions";
import { text } from "./dictionary";
import { Button } from "react-bootstrap";
import Form from "react-bootstrap/Form";

const CitySearch = ({ side }) => {
  const dispatch = useDispatch();
  let input = "";
  const lang = useSelector((state) => state.app.lang);

  return (
    <>
      <Form.Control
        placeholder={text.search.placeholder[lang]}
        list={`weather${side}List`}
        type={"search"}
        name={`weather${side}`}
        id={`weather${side}`}
        onChange={(e) => {
          input = e.target.value.trim();
          dispatch(fetchCitiesList(input));
        }}
      />
      <RenderSearchDataList side={side} />
      <Button
        type={"button"}
        onClick={() => {
          dispatch(fetchCityCoordinate(input, side, lang));
        }}
      >
        {text.search[lang]}
      </Button>
    </>
  );
};

export default CitySearch;
