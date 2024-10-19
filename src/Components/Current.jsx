import React from "react";

const Current = ({ currentWeather, location }) => {
  return (
    <div className="container mt-5">
      <h4 className="text-white text-center">
        Current Weather of {location.name}, {location.region}
      </h4>
      <div className="row mt-5">
        {/* Column 1 */}
        <div className="col-3">
          <div className="card bg-primary text-white border border-light rounded d-flex flex-column">
            <div
              className="d-flex justify-content-center align-items-center"
              style={{ height: "100px" }}
            >
              <img
                style={{ height: "100px", width: "100px" }}
                src={currentWeather.condition.icon}
                className="card-img-top"
                alt="Weather condition"
              />
            </div>
            <div className="card-body d-flex flex-grow-1 align-items-center justify-content-center">
              <h5 className="card-title">{currentWeather.condition.text}</h5>
            </div>
          </div>
        </div>

        {/* Column 2 */}
        <div className="col-3">
          <div className="card bg-primary text-white border border-light rounded d-flex flex-column">
            <div className="card-body d-flex flex-grow-1 align-items-center justify-content-center">
              <h5 className="card-title">
                Temp in °C: {currentWeather.temp_c}
              </h5>
            </div>
          </div>
        </div>
        {/* Column 3 */}
        <div className="col-3">
          <div className="card bg-primary text-white border border-light rounded d-flex flex-column">
            <div className="card-body d-flex flex-grow-1 align-items-center justify-content-center">
              <h5 className="card-title">
                Temp in °F: {currentWeather.temp_f}
              </h5>
            </div>
          </div>
        </div>
        {/* Column 4 */}
        <div className="col-3">
          <div className="card bg-primary text-white border border-light rounded d-flex flex-column">
            <div className="card-body d-flex flex-grow-1 align-items-center justify-content-center">
              <h5 className="card-title">
                Humidity: {currentWeather.humidity}%
              </h5>
            </div>
          </div>
        </div>
      </div>
      <div className="row mt-4">
        {/* Column 1 */}
        <div className="col-3">
          <div className="card bg-primary text-white border border-light rounded d-flex flex-column">
            <div className="card-body d-flex flex-grow-1 align-items-center justify-content-center">
              <h5 className="card-title">
                Wind Degree: {currentWeather.wind_degree}°
              </h5>
            </div>
          </div>
        </div>
        {/* Column 2 */}
        <div className="col-3">
          <div className="card bg-primary text-white border border-light rounded d-flex flex-column">
            <div className="card-body d-flex flex-grow-1 align-items-center justify-content-center">
              <h5 className="card-title">
                Wind Dir: {currentWeather.wind_dir}
              </h5>
            </div>
          </div>
        </div>
        {/* Column 3 */}
        <div className="col-3">
          <div className="card bg-primary text-white border border-light rounded d-flex flex-column">
            <div className="card-body d-flex flex-grow-1 align-items-center justify-content-center">
              <h5 className="card-title">
                Wind Speed (kph): {currentWeather.wind_kph}
              </h5>
            </div>
          </div>
        </div>
        {/* Column 4 */}
        <div className="col-3">
          <div className="card bg-primary text-white border border-light rounded d-flex flex-column">
            <div className="card-body d-flex flex-grow-1 align-items-center justify-content-center">
              <h5 className="card-title">
                Wind Speed (mph): {currentWeather.wind_mph}
              </h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Current;
