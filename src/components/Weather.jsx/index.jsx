import React, { useEffect, useState } from "react";
import "./styles.scss";
import axios from "axios";
import SearchCity from "../SearchCity";
import DisplayWeather from "../DisplayWeathe.jsx";
import API_KEY from "../../config.js";

const Weather = () => {
  const [city, setCity] = useState();
  const [weather, setWeather] = useState();
  const [defaultWeather, setdefaultWeather] = useState();
  const [err, setErr] = useState();
  const [isErr, setIsErr] = useState(false);

  const getUpdatedWeather = async (e) => {
    try {
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`
      );
      setWeather(response.data);
      setIsErr(false);
    } catch (error) {
      setErr(error?.response?.data?.message);
      setIsErr(true);
    }
  };

  const getDelhiWeather = async (e) => {
    e?.PreventDefault();
    const res = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?q=delhi&appid=${API_KEY}`
    );
    setdefaultWeather(res.data);
  };

  useEffect(() => {
    getDelhiWeather();
  }, []);

  return (
    <div className="weather">
      <SearchCity setCity={setCity} getUpdatedWeather={getUpdatedWeather} />
      <DisplayWeather
        weather={weather}
        defaultWeather={defaultWeather}
        city={city}
        err={err}
        isErr={isErr}
      />
    </div>
  );
};

export default Weather;
