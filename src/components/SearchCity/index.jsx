import React from "react";
import "./styles.scss";

const SearchCity = ({ setCity, getUpdatedWeather }) => {
  return (
    <div className="srchCity">
      <div className="heading"> Your City Weather</div>
      <input
        className="input_box"
        type="text"
        placeholder="search your city"
        onChange={(e) => setCity(e.target.value)}
      />
      <button
        className="src_btn"
        onClick={(e) => getUpdatedWeather(e)}
        type="button"
      >
        Search
      </button>
    </div>
  );
};

export default SearchCity;
