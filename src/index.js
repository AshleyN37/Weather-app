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
    
    
    currentCity.innerHTML = response.data.name;
    temperatureElement.innerHTML = Math.round(response.data.main.temp);
    weatherElement.innerHTML = response.data.weather[0].main;
    windElement.innerHTML = Math.round(response.data.wind.speed);
    feelsLikeElement.innerHTML = Math.round(response.data.main.feels_like);
    humidityElement.innerHTML = response.data.main.humidity;
    weatherIconElement.setAttribute("src", `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`);
    weatherIconElement.setAttribute("alt", response.data.weather[0].description);
    
}

// Gets the city from search and accesses weather api 
function getCity(event) {
    event.preventDefault
    let search = document.querySelector("#search-input");
    let city = `${search.value}`;
    let apiKey = "5cb1aa65264597e34c41305199c5cf9e";
    let units = `imperial`;
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${units}`;
    axios.get(`${apiUrl}`).then(showWeatherInfo);
}

let searchForm = document.querySelector("#search-form");
searchForm.addEventListener("submit", getCity);





















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


            


            










/*
// Search for a city and update city name once searched for
function displayCityName(event) {
    event.preventDefault();
    let searchInput = document.querySelector("#search-input");
    let h1 = document.querySelector(".current-city");
    if(searchInput.value) {
        h1.innerHTML = `${searchInput.value}`;
    } else {
        h1.innerHTML = `Please enter a city`
    }
}
let form = document.querySelector("#search-form");
form.addEventListener("submit", displayCityName);


function convertToCelsius(event) {
    event.preventDefault();
    let c = document.querySelector("#temp-number");
    c.innerHTML = "5";
    
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



 


        let city = response.data.name;
    let currentCity = document.querySelector(".current-city");
    currentCity.innerHTML = `${city}`
    document.


*/