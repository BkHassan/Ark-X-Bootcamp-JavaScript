const fs = require("fs").promises;
const cities = require("./temperature.js");

fs.readFile("input.txt", "utf8")
  .then((cityName) => {
    console.log("file content:", cityName);
    const city = cities.find((city) => city.name === cityName);
    console.log(city);
    if (city) {
      console.log("Latitude:", city.lat);
      console.log("Longitude:", city.lng);

      const lat = city.lat;
      const lng = city.lng;

      fetching(lat, lng);
    } else {
      console.log("City not found in the array");
    }
  })
  .catch((err) => {
    console.log("error reading file", err);
  });

async function fetching(lat, lng) {
  try{
  const response = await fetch(
    `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lng}&current_weather=true`
  );
  const data = await response.json();
  let temperature = ( data.current_weather.temperature) + " " + data.current_weather_units.temperature;
  console.log(temperature);
  fs.writeFile('london.txt', temperature)
  .then(() =>{
    console.log('File created successfully');
  })
} catch (error) {
  console.error("Error fetching data:", error.message);
}
}
