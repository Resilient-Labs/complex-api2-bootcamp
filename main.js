let lat, lon;

fetch(
  `https://ipapi.co/json/
    `
)
  .then((res) => res.json())
  .then((data) => {
    console.log(data);
    document.querySelector("#result").innerHTML = data.city;
    lon = data["longitude"];
    lat = data["latitude"];
  });

document.querySelector("button").addEventListener("click", getWeather);

function getWeather() {
  fetch(
    `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=290f881e9aeb50eb1b972ca961b44460&units=imperial}`
  )
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      document.querySelector("#weather").innerHTML =
        data.weather[0].description;
    });
}