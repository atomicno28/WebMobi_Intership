import React, { useState } from "react";
import axios from "axios";
import { Routes, Route, useNavigate } from "react-router-dom";
import WeatherForm from "./WeatherForm";
import WeatherReport from "./WeatherReport";
import Error from "./Error";
import ApiError from "./ApiError";

export default function App() {
  // to change the destination after entering.
  const navigate = useNavigate();

  // it will contain the value of searched city.
  const [city, setCity] = useState({});

  // results from the api will be stored in this state.
  const [fetchedValue, setFetchedValue] = useState([]);

  // if get request is fullfilled.
  const [set, changeSet] = useState(false);
  const [load, setLoad] = useState(false);

  // if the request get rejected.
  const [apibug, setApiBug] = useState(false);

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    setLoad(true);

    try {
      const response = await fetchWeatherData(city);
      setFetchedValue(response.data);
      changeSet(true);
      navigate("/fetched_data");
    } catch (error) {
      navigate("/apierror");
      setApiBug(true);
      console.error(error);
    }
    setLoad(false);
  };

  const fetchWeatherData = async (city) => {
    const options = {
      method: "GET",
      url: "https://yahoo-weather5.p.rapidapi.com/weather",
      params: {
        location: city,
        format: "json",
        u: "c",
      },
      headers: {
        "X-RapidAPI-Key": "cd6ed1a709msh96ddf4f43a1c204p169aefjsn3b336e3ff06d",
        "X-RapidAPI-Host": "yahoo-weather5.p.rapidapi.com",
      },
    };

    const response = await axios.request(options);
    return response;
  };

  return (
    <div className="form_content">
      <Routes>
        <Route
          index
          path="/"
          element={
            <>
              <h1> Webmobi Internship.</h1>
              <WeatherForm
                handleSubmit={handleFormSubmit}
                handleChange={(e) => setCity(e.target.value)}
              />
            </>
          }
        />
        <Route
          path="/fetched_data"
          element={set ? <WeatherReport report={fetchedValue} /> : <Error />}
        />
        <Route path="/apierror" element={apibug ? <ApiError /> : <Error />} />
      </Routes>

      {load && <p> Loading...</p>}
    </div>
  );
}
