import React from "react";

const Forecast = ({ forecastWeather, location }) => {
  return (
    <div className="container pt-5">
      <h4 className="text-white text-center mb-5">
        Forecast Weather of {location.name}, {location.region}
      </h4>

      {forecastWeather.forecastday.map((data, index) => (
        <div
          className="accordion accordion-flush border border-primary rounded mb-3"
          id="accordionFlushExample"
          key={index}
        >
          <div className="accordion-item border border-primary rounded mb-3">
            <h2 className="accordion-header" id={`flush-heading${index}`}>
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target={`#flush-collapse${index}`}
                aria-expanded="false"
                aria-controls={`flush-collapse${index}`}
              >
                <div className="d-flex flex-column flex-md-row justify-content-between align-items-center w-100">
                  <div>
                    <strong>Day:</strong> {data.date}
                  </div>
                  <img
                    src={data.day.condition.icon}
                    alt="Weather condition"
                    className="img-fluid"
                    style={{ width: "50px", height: "50px" }}
                  />
                  <div className="mt-2 mt-md-0">
                    <p>{data.day.condition.text}</p>
                  </div>
                  <div className="mt-2 mt-md-0">
                    <strong>Max temp:</strong> {data.day.maxtemp_c}°C
                  </div>
                </div>
              </button>
            </h2>

            <div
              id={`flush-collapse${index}`}
              className="accordion-collapse collapse"
              aria-labelledby={`flush-heading${index}`}
              data-bs-parent="#accordionFlushExample"
            >
              <div className="accordion-body">
                {data.hour.map((hourData, hourIndex) => {
                  const time = new Date(hourData.time).getHours();
                  const hour = time < 10 ? `0${time}:00` : `${time}:00`;

                  return (
                    <div
                      className="d-flex flex-column flex-md-row justify-content-between align-items-center mb-3 border-bottom pb-3"
                      key={hourIndex}
                    >
                      <p className="mb-1 mb-md-0">
                        <strong>Hour:</strong> {hour}
                      </p>
                      <p className="mb-1 mb-md-0">
                        <strong>Temp:</strong> {hourData.temp_c}°C
                      </p>
                      <img
                        src={hourData.condition.icon}
                        alt="Weather icon"
                        className="img-fluid"
                        style={{ width: "50px", height: "50px" }}
                      />
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Forecast;
