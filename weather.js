const apiKey = "d6dde42beeabae651e258934011291b1";
const apiUrl = `https://api.openweathermap.org/data/2.5/weather?units=metric&appid=${apiKey}&q=`;
const lUrl =`http://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid=${apiKey}`;
console.log(lUrl);

const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");

async function checkWeather(city) {
    const response = await fetch(apiUrl + city);
    if (!response.ok) {
        alert("Invalid API key or other error. Please check the API key and try again.");
        return;
    }
    const data = await response.json();

    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
    document.querySelector(".humidity").innerHTML = "Humidity" + data.main.humidity + "%";
    document.querySelector(".lon").innerHTML = data.coord.lon;
    document.querySelector(".lat").innerHTML = data.coord.lat;

}

searchBtn.addEventListener("click", () => {
    checkWeather(searchBox.value);
});
