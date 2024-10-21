import React from "react";

const Current = ({ currentWeather, location }) => {
  return (
    <div className="container mt-4">
      <h4 className="text-white text-center">
        Current Weather of {location.name}, {location.region}
      </h4>

      {/* First Row for weather cards (for larger screens) */}
      <div className="row mt-4 justify-content-center">
        {/* Weather Condition Icon */}
        <div className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4">
          <div className="card bg-primary text-white border border-light rounded d-flex flex-column">
            <div
              className="d-flex justify-content-center align-items-center"
              style={{ height: "100px" }}
            >
              <img
                style={{ height: "100px", width: "100px" }}
                src={currentWeather.condition.icon}
                alt="Weather condition"
              />
            </div>
            <div className="card-body text-center">
              <h5>{currentWeather.condition.text}</h5>
            </div>
          </div>
        </div>

        {/* Temperature in Celsius */}
        <div className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4">
          <div className="card bg-primary text-white border border-light rounded d-flex flex-column text-center">
            <div className="card-body">
              <h5>Temp in °C: {currentWeather.temp_c}</h5>
            </div>
          </div>
        </div>

        {/* Temperature in Fahrenheit */}
        <div className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4">
          <div className="card bg-primary text-white border border-light rounded d-flex flex-column text-center">
            <div className="card-body">
              <h5>Temp in °F: {currentWeather.temp_f}</h5>
            </div>
          </div>
        </div>

        {/* Humidity */}
        <div className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4">
          <div className="card bg-primary text-white border border-light rounded d-flex flex-column text-center">
            <div className="card-body">
              <h5>Humidity: {currentWeather.humidity}%</h5>
            </div>
          </div>
        </div>
      </div>

      {/* Second Row for additional weather details */}
      <div className="row mt-4 justify-content-center">
        {/* Wind Degree */}
        <div className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4">
          <div className="card bg-primary text-white border border-light rounded d-flex flex-column text-center">
            <div className="card-body">
              <h5>Wind Degree: {currentWeather.wind_degree}</h5>
            </div>
          </div>
        </div>

        {/* Wind Direction */}
        <div className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4">
          <div className="card bg-primary text-white border border-light rounded d-flex flex-column text-center">
            <div className="card-body">
              <h5>Wind Dir: {currentWeather.wind_dir}</h5>
            </div>
          </div>
        </div>

        {/* Wind in kph */}
        <div className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4">
          <div className="card bg-primary text-white border border-light rounded d-flex flex-column text-center">
            <div className="card-body">
              <h5>Wind kph: {currentWeather.wind_kph}</h5>
            </div>
          </div>
        </div>

        {/* Wind in mph */}
        <div className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4">
          <div className="card bg-primary text-white border border-light rounded d-flex flex-column text-center">
            <div className="card-body">
              <h5>Wind mph: {currentWeather.wind_mph}</h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Current;
