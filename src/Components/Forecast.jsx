import React from "react";

const Forecast = ({ forecastWeather, location }) => {
  return (
    <div className="container pt-5">
      <h4 className="text-white text-center mb-5">
        Forecast Weather of {location.name}, {location.region}
      </h4>

      {forecastWeather.forecastday.map((data, index) => {
        return (
          <div
            className="accordion accordion-flush border border-primary rounded mb-3"
            id="accordionFlushExample"
            key={index}
          >
            <div className="accordion-item border border-primary rounded mb-3">
              <h2 className="accordion-header" id="flush-headingOne">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target={`#${index}`}
                  aria-expanded="false"
                  aria-controls="flush-collapseOne"
                >
                  <div className="d-flex flex-row justify-content-between align-items-center w-100">
                    {/* Day and Icon */}
                    <div className="p-2">
                      <strong>Day:</strong> {data.date}
                    </div>
                    <div className="p-2">
                      <img
                        src={data.day.condition.icon}
                        alt="Weather condition"
                      />
                    </div>
                    <div className="p-2">
                      <p>{data.day.condition.text}</p>
                    </div>
                    <div className="p-2">
                      <strong>Max temp:</strong> {data.day.maxtemp_c}°C
                    </div>
                  </div>
                </button>
              </h2>

              <div
                id={`${index}`}
                className="accordion-collapse collapse"
                aria-labelledby="flush-headingOne"
                data-bs-parent="#accordionFlushExample"
              >
                <div className="accordion-body">
                  {data.hour.map((hourData, hourIndex) => {
                    // Extract the hour part from the datetime string (e.g., "2024-10-18 01:00")
                    const time = new Date(hourData.time).getHours();
                    const hour = time < 10 ? `0${time}:00` : `${time}:00`;

                    return (
                      <div
                        className="d-flex flex-column justify-content-center align-items-center mb-3 border-bottom pb-3"
                        key={hourIndex}
                      >
                        <div className="d-flex flex-row justify-content-between align-items-center w-100">
                          {/* Hour, Temp, and Icon */}
                          <p className="me-2">
                            <strong>Hour:</strong> {hour}
                          </p>
                          <p className="me-2">
                            <strong>Temp:</strong> {hourData.temp_c}°C
                          </p>
                          <img
                            src={hourData.condition.icon}
                            alt="Weather icon"
                            className="weather-icon"
                          />
                        </div>

                        <div className="progress" style={{ width: "100%" }}>
                          <div
                            className="progress-bar progress-bar-striped bg-info"
                            role="progressbar"
                            style={{ width: `${hourData.temp_c}%` }} // Dynamically adjust based on temp
                            aria-valuenow={hourData.temp_c}
                            aria-valuemin="0"
                            aria-valuemax="100"
                          ></div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Forecast;
