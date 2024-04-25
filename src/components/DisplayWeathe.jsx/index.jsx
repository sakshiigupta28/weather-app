import React, { useEffect, useState } from "react";
import "./styles.scss";
import sunsetIcon from "../../assets/sun.svg";
import sunriseIcon from "../../assets/sunrise.svg";
import humidityIcon from "../../assets/humidity-svgrepo-com.svg";
import temperatureIcon from "../../assets/temperature-svgrepo-com.svg";
import airIcon from "../../assets/air.svg";
import minTempIcon from "../../assets/minTemp.svg";

const DisplayWeather = ({ weather, defaultWeather, err, isErr }) => {
  const [sunriseTime, setSunriseTime] = useState("");
  const [sunsetTime, setSunsetTime] = useState("");

  useEffect(() => {
    const getTime = (timeStamp) => {
      const date = new Date(timeStamp * 1000);
      return date.toLocaleString("en-US", {
        hour: "numeric",
        minute: "numeric",
        hour12: true,
      });
    };

    if (weather) {
      setSunriseTime(getTime(weather.sys?.sunrise));
      setSunsetTime(getTime(weather.sys?.sunset));
    } else {
      setSunriseTime(getTime(defaultWeather?.sys?.sunrise));
      setSunsetTime(getTime(defaultWeather?.sys?.sunset));
    }
  }, [weather, defaultWeather]);

  const { name, main, wind } = weather || defaultWeather || {};

  const toDate = () => {
    const months = [
      'January',
      'February',
      'March',
      'April',
      'May',
      'June',
      'July',
      'August',
      'September',
      'October',
      'Nocvember',
      'December',
    ];
    const days = [
      'Sunday',
      'Monday',
      'Tuesday',
      'Wednesday',
      'Thursday',
      'Friday',
      'Saturday',
    ];
    const currentDate = new Date();
    const date = `${days[currentDate.getDay()]} ${currentDate.getDate()} ${
      months[currentDate.getMonth()]
    }`;
    return date;
  };



  return (
    <div>
      <div className="temp">
        {isErr === true ? (
          <div className="error_msg">Oops {err} !!!</div>
        ) : (
          <>
            {" "}
            <div className="city_name">{name}, &nbsp;
            <span>{toDate()}</span></div>
            <div className="temp_div">
              <div className="temp_details">
                <img src={temperatureIcon} alt="temp" />
                Max Temp:{" "}
                {main?.temp_max ? `${Math.floor(main.temp_max - 273)}°C` : ""}
              </div>
              <div className="temp_details">
                <img src={minTempIcon} alt="minTemp" />
                Min Temp:{" "}
                {main?.temp_min ? `${Math.floor(main.temp_min - 273)}°C` : ""}
              </div>
            </div>
            <div className="temp_div">
              <div className="temp_details">
                <img src={humidityIcon} alt="humidity" />
                Humidity: {main?.humidity ?? ""}
              </div>
              <div className="temp_details">
                <img src={airIcon} alt="air" />
                Wind Speed: {wind?.speed ?? ""} km/hr
              </div>
            </div>
            <div className="temp_div">
              <div className="temp_details">
                <img src={sunriseIcon} alt="sunrise" />
                Sunrise Time: {sunriseTime}
              </div>
              <div className="temp_details">
                <img src={sunsetIcon} alt="sunset" />
                Sunset Time: {sunsetTime}
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default DisplayWeather;
