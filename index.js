const inputValue = document.querySelector(".search input");
const myButton = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");
const infoPage = document.querySelector(".weather");
const bgChange = document.querySelector(".card");

const apikey = "a6276344a37fbcdf3074180f75b74970";
const apiUrl =
  "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

async function checkWheather(city) {
  const response = await fetch(apiUrl + city + `&appid=${apikey}`);
  if (response.status == 404) {
    document.querySelector(".error").style.display = "block";
  } else {
    var data = await response.json();
    console.log(data);
    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML =
      Math.round(data.main.temp) + "°C";
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = data.wind.speed + " km/hr";

    if (data.weather[0].main == "Clouds") {
      weatherIcon.src = "images/clouds.png";

      bgChange.style.background = "url('gif/cloud.gif')";
      bgChange.style.backgroundPosition = "center";
    } else if (data.weather[0].main == "Clear") {
      weatherIcon.src = "images/clear.png";
      bgChange.style.background = "url('gif/clear.gif')";
    } else if (data.weather[0].main == "Rain") {
      weatherIcon.src = "images/rain.png";
      bgChange.style.background = "url('gif/rain.gif')";
    } else if (data.weather[0].main == "Drizzle") {
      weatherIcon.src = "images/drizzle.png";
      bgChange.style.background = "url('gif/drizzle.gif')";
    } else if (data.weather[0].main == "Mist") {
      weatherIcon.src = "images/mist.png";
      bgChange.style.background = "url('gif/mist.gif')";
    } else if (data.weather[0].main == "Smoke") {
      weatherIcon.src = "images/smoke.png";
      bgChange.style.background = "url('gif/smoke.gif')";
    }
    infoPage.classList.add("weather_on");
    document.querySelector(".error").style.display = "none";
  }
}

myButton.addEventListener("click", function () {
  checkWheather(inputValue.value);
});

