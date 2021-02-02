// Shows current day and time
function formatTime(now) {
    let days = [
        "Sunday", 
        "Monday", 
        "Tuesday", 
        "Wednesday", 
        "Thursday", 
        "Friday", 
        "Saturday"]
        
    let day = days[now.getDay()];
    let hours = now.getHours();
    let minutes = now.getMinutes();
    if (minutes < 10) {
        minutes = `0${minutes}`
    }
    if (hours < 10) {
        hours = `0${hours}`
    }

    let time = `${day} ${hours}:${minutes}`;
    return time
}

let dayTime = document.querySelector(".day-time");
dayTime.innerHTML = (formatTime(new Date));




    
// Updates temperature and other weather information for the city that is searched
function showWeatherInfo(response) {
    console.log(response.data);
    
    let currentCity = document.querySelector(".current-city");
    let temperatureElement = document.querySelector("#temp-number");
    let weatherElement = document.querySelector(".current-weather");
    let windElement = document.querySelector("#wind-speed");
    let feelsLikeElement = document.querySelector("#feels-like");
    let humidityElement = document.querySelector("#humidity");
    let weatherIconElement = document.querySelector("#weather-icon");

    farenheitTemperature = response.data.main.temp;
    milesPerHour = response.data.wind.speed;
    
    
    currentCity.innerHTML = response.data.name;
    temperatureElement.innerHTML = Math.round(response.data.main.temp);
    weatherElement.innerHTML = response.data.weather[0].main;
    windElement.innerHTML = Math.round(response.data.wind.speed);
    feelsLikeElement.innerHTML = Math.round(response.data.main.feels_like);
    humidityElement.innerHTML = response.data.main.humidity;
    weatherIconElement.setAttribute("src", `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`);
    weatherIconElement.setAttribute("alt", response.data.weather[0].description);
}

// Searches for city and gets data from the API
function search(city) {
    let apiKey = "5cb1aa65264597e34c41305199c5cf9e";
    let units = "imperial";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${units}`;
    axios.get(apiUrl).then(showWeatherInfo);

}
function submitCity(event) {
    event.preventDefault();
    let searchInput = document.querySelector("#search-input");
    search(searchInput.value);
}

search("Washington DC");
let form = document.querySelector("#search-form");
form.addEventListener("submit", submitCity);



// Converts Farenheit to Celsius
function convertToCelsius(event) {
    event.preventDefault();
    farenheitLink.classList.remove("active");
    celsiusLink.classList.add("active");
    let celsiusTemperature = Math.round((farenheitTemperature - 32) * 5/9);
    let temperatureElement = document.querySelector("#temp-number");
    temperatureElement.innerHTML = celsiusTemperature;
}

function convertToFarenheit(event) {
    event.preventDefault();
    celsiusLink.classList.remove("active");
    farenheitLink.classList.add("active");
    let temperatureElement = document.querySelector("#temp-number");
    temperatureElement.innerHTML = Math.round(farenheitTemperature);
}

function convertToKilometerPerHour(event) {
    event.preventDefault();
    let kilometerPerHour = Math.round(milesPerHour * 1.609);
    let windSpeedElement = document.querySelector("#wind-speed");
    let metricUnit = document.querySelector("#wind-unit");
    windSpeedElement.innerHTML = `${kilometerPerHour}`;
    metricUnit.innerHTML = "km/h"
}

function convertToMilesPerHour(event) {
    event.preventDefault();
    let windSpeedElement = document.querySelector("#wind-speed");
    let imperialUnit = document.querySelector("#wind-unit");
    windSpeedElement.innerHTML = Math.round(milesPerHour);
    imperialUnit.innerHTML = "mph";   
}


let farenheitTemperature = null;
let milesPerHour = null;

let celsiusLink = document.querySelector("#celsius");
celsiusLink.addEventListener("click", convertToCelsius);

let farenheitLink = document.querySelector("#farenheit");
farenheitLink.addEventListener("click", convertToFarenheit);


let metricWindConversion = document.querySelector("#celsius");
metricWindConversion.addEventListener("click", convertToKilometerPerHour);


let imperialWindConversion = document.querySelector("#farenheit");
imperialWindConversion.addEventListener("click", convertToMilesPerHour);







































/*

// Current Location button - when clicked, searches current location and updates city name and temperature
function getPosition() {
    navigator.geolocation.getCurrentPosition(findPlace);  
}

function findPlace(position) {
    let apiKey = "5cb1aa65264597e34c41305199c5cf9e";
    let units = `imperial`;
    let lat = position.coords.latitude;
    let lon = position.coords.longitude;
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=${units}`;
    axios.get(`${apiUrl}`).then(displayWeatherInfo);
}

function displayWeatherInfo(response) {    
    console.log(response.data);

    let currentCity = document.querySelector(".current-city");
    let temperatureElement = document.querySelector("#temp-number");
    let weatherElement = document.querySelector(".current-weather");
    let windElement = document.querySelector("#wind-speed");
    let feelsLikeElement = document.querySelector("#feels-like");
    let humidityElement = document.querySelector("#humidity");
    let weatherIconElement = document.querySelector("#weather-icon");
    
    
    currentCity.innerHTML = response.data.name;
    temperatureElement.innerHTML = Math.round(response.data.main.temp);
    weatherElement.innerHTML = response.data.weather[0].main;
    windElement.innerHTML = Math.round(response.data.wind.speed);
    feelsLikeElement.innerHTML = Math.round(response.data.main.feels_like);
    humidityElement.innerHTML = response.data.main.humidity;
    weatherIconElement.setAttribute("src", `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`);
    weatherIconElement.setAttribute("alt", response.data.weather[0].description);
}

let currentLocation = document.querySelector("#current-location");
currentLocation.addEventListener("click", getPosition);


            












    
}
let celsius = document.querySelector("#celsius");
celsius.addEventListener("click", convertToCelsius);

function convertToFarenheit(event) {
    event.preventDefault();
    let f = document.querySelector("#temp-number");
    f.innerHTML = "42";
}
let farenheit = document.querySelector("#farenheit");
farenheit.addEventListener("click", convertToFarenheit);



 


*/