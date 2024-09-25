import React, { useState, useEffect } from "react";
import { toast } from "react-toastify";

import WeatherCard from "../components/WeatherCard";
import Footer from "../components/Footer";
import { convertCountryCode, convertTimeStamp } from "../utility/action";
import { getWeather } from "../utility/data";

const Weather = () => {
  // State management
  const [selectCity, setSelectCity] = useState("Jakarta");
  const [units, setUnits] = useState("metric");
  const [weatherData, setWeatherData] = useState({});

  // Fetch weather data
  useEffect(() => {
    const fetchWeatherOnUnitsChange = async () => {
      if (selectCity) {
        try {
          const data = await getWeather(selectCity, units);
          setWeatherData(data);
        } catch (error) {
          toast.error(error.message);
        }
      }
    };

    fetchWeatherOnUnitsChange();
  }, [units, selectCity]);

  // Handle submit
  const handleSearchSubmit = (e) => {
    e.preventDefault();
    const searchValue = e.target.elements.citySearch.value;
    if (searchValue.trim() === "") {
      toast.warning("Please input a city");
      return;
    }
    setSelectCity(searchValue);
  };

  return (
    <div className='weather-bg min-h-screen pt-1 py-3'>
      {/* <ul>
        {[...Array(7)].map((_, index) => (
          <li key={index} className='weather-bg' />
        ))}
      </ul> */}
      <WeatherCard
        weatherData={weatherData}
        units={units}
        setUnits={setUnits}
        handleSearchSubmit={handleSearchSubmit}
        convertTimeStamp={convertTimeStamp}
        convertCountryCode={convertCountryCode}
      />
      <Footer />
    </div>
  );
};

export default Weather;
