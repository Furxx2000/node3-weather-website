const request = require("postman-request");

const forecast = (latitude, longitude, callback) => {
  const url = `http://api.weatherstack.com/current?access_key=47db340feb78775b7bc8003cde14f12b&query=${encodeURIComponent(
    latitude
  )},${encodeURIComponent(longitude)}&units=f`;

  request({ url, json: true }, (error, { body }) => {
    if (error) {
      callback("Unable to connect to location services!", undefined);
    } else if (body.error) {
      callback("Unable to find location. Try another search.", undefined);
    } else {
      callback(
        undefined,
        `${body.current.weather_descriptions}, It is currently ${body.current.temperature} degrees fahrenheit out, the humidity is ${body.current.humidity} RH. Local time  is ${body.current.wind_speed}`
      );
    }
  });
};

module.exports = forecast;
