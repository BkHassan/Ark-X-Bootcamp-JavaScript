const http = require("http");
const url = require("url");
const cities = require("./temperature.js");

const server = http.createServer(async (req, res) => {
  try {
    const parsedUrl = url.parse(req.url, true);
    const city = parsedUrl.pathname.slice(1);
    const selectedCity = cities.find(
      (item) => item.name.toLowerCase() === city.toLowerCase()
    );
    if (selectedCity) {
      console.log(selectedCity);
      let lat = selectedCity.lat;
      let lng = selectedCity.lng;

      const response = await fetch(
        `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lng}&current_weather=true`
      );
      const data = await response.json();
      res.end(
        data.current_weather.temperature +
          " " +
          data.current_weather_units.temperature
      );
    } else {
      res.end("the selectedCity not found");
    }
  } catch (error) {
    console.error("Error:", error.message);
  }
});
server.listen(3000, () => {
  console.log("Server is listening on port 3000");
});
