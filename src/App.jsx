import "./App.css";
import React, { useState, useEffect } from "react";
import axios from "axios";
import Current from "./Components/Current"; // Ensure the import matches the component name
import Forecast from "./Components/Forecast";
import "../node_modules/bootstrap/dist/js/bootstrap";

const App = () => {
  const [city, setCity] = useState("");
  const [cityNames, setCityNames] = useState([]);
  const [ClickedCity, setClikedCity] = useState();
  const [currentWeather, setCurrentWeather] = useState();
  const [forecastWeather, setForecastWeather] = useState();
  const [location, setLocation] = useState();
  const [loading, setLoading] = useState(false); // Add loading state

  const autoCompURL = `https://api.weatherapi.com/v1/search.json?key=54a7350fe25d4743bae163458241610&q=`;

  const WeatherURL = (city) =>
    `https://api.weatherapi.com/v1/forecast.json?key=54a7350fe25d4743bae163458241610&q=${city}&days=7&aqi=no&alerts-no`;

  useEffect(() => {
    if (city && city.length > 3) {
      fetchApi();
    }
  }, [city]);

  const fetchApi = async () => {
    setLoading(true); // Start loading spinner
    try {
      const response = await axios.get(autoCompURL + city);
      const resp = response.data;
      const cityData = resp.map((data) => {
        return `${data.name}, ${data.region}, ${data.country}`;
      });
      setCityNames(cityData);
    } catch (e) {
      console.log("error", e);
    }

    setLoading(false); // Stop loading spinner
  };

  const handleSelectedCity = (city) => {
    console.log("Clicked City ", city);
    setClikedCity(city);
    fetchWeatherApi(city); // Fetch weather data for the selected city
    setCityNames([]); // Clear city suggestions
  };

  const fetchWeatherApi = async (city) => {
    setLoading(true); // Start loading spinner
    try {
      const response = await axios.get(WeatherURL(city));
      const res = response.data;
      console.log("Weather data:", res); // For debugging
      setCurrentWeather(res.current); // Set current weather
      setLocation(res.location); // Set location
      setForecastWeather(res.forecast); // Set forecast data
    } catch (error) {
      console.log("Weather Api Error", error);
    }
    setLoading(false); // Stop loading spinner
  };

  return (
    <div className="container p-3 p-md-5 rounded mt-3 mt-md-5 bg-primary">
      <input
        type="text"
        className="form-control"
        placeholder="Enter City Name"
        style={{ width: "100%", maxWidth: "700px", margin: "0 auto" }}
        value={ClickedCity} // Control the input field value with city state
        onChange={(e) => {
          setCity(e.target.value);
          if (e.target.value === "") {
            setCurrentWeather();
            setForecastWeather();
            setLocation();
            setClikedCity();
          }
        }}
      />

      {/* Show loading spinner */}
      {loading && (
        <div className="text-center mt-3">
          <div className="spinner-border text-light" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
      )}

      {/* Render city suggestions only when cityNames is not empty */}
      {cityNames.length > 0 && (
        <div
          className="mx-auto mt-3"
          style={{
            width: "100%",
            maxWidth: "700px",
          }}
        >
          {cityNames.map((city, index) => {
            return (
              <div
                key={index}
                className="text-center bg-info rounded p-2 bg-opacity-10 border border-white border-opacity-25 text-white mt-2"
                style={{ cursor: "pointer" }}
                onClick={() => {
                  handleSelectedCity(city);
                }}
              >
                {city}
              </div>
            );
          })}
        </div>
      )}

      {/* Render Current component only when currentWeather and location are available */}
      {currentWeather && location && (
        <Current currentWeather={currentWeather} location={location} />
      )}
      {forecastWeather && (
        <Forecast forecastWeather={forecastWeather} location={location} />
      )}
    </div>
  );
};

export default App;
