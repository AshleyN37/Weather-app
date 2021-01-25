// display current day and time
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



// Updates temperature in Fahrenheit for the city that is searched
function showTemperature(response) {
    let info = response.data;
    console.log(info);






    let temperature = Math.round(response.data.main.temp);
    let temperatureElement = document.querySelector("#temp-number");
    temperatureElement.innerHTML = `${temperature}`;
}


// Update weather description
function updateDescription(response) {
    let weather = response.data.weather[0].main;
    let weatherElement = document.querySelector(".current-weather");
    weatherElement.innerHTML = `${weather}`;
}

// Update wind speed
function updateWindSpeed(response) {
    let windSpeed = Math.round(response.data.wind.speed);
    let windElement = document.querySelector("#wind-speed");
    windElement.innerHTML = `${windSpeed}`;
}

function updateHumidity(response) {
    let humidity = response.data.main.humidity;
    let humidityElement = document.querySelector("#humidity");
    humidityElement.innerHTML = `${humidity}`;

}
    
// Gets the city from search and accesses weather api 
function getCity(event) {
    event.preventDefault
    let search = document.querySelector("#search-input");
    let city = `${search.value}`;
    let apiKey = "5cb1aa65264597e34c41305199c5cf9e";
    let units = `imperial`;
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${units}`;
    axios.get(`${apiUrl}`).then(showTemperature);
    axios.get(`${apiUrl}`).then(updateDescription);
    axios.get(`${apiUrl}`).then(updateWindSpeed);
    //axios.get(`${apiUrl}`).then(updatePrecipitation);
    axios.get(`${apiUrl}`).then(updateHumidity);


}
          
let searchForm = document.querySelector("#search-form");
searchForm.addEventListener("submit", getCity);
    
    



















// Current Location button - when clicked, searches current location and updates city name and temperature
function getPosition() {
    navigator.geolocation.getCurrentPosition(displayPlace);  
}

function displayPlace(position) {
    let apiKey = "5cb1aa65264597e34c41305199c5cf9e";
    let units = `imperial`;
    let lat = position.coords.latitude;
    let lon = position.coords.longitude;
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=${units}`;
    axios.get(`${apiUrl}`).then(displayTemperature);
}

function displayTemperature(response) {
    let temperature = Math.round(response.data.main.temp);
    let currentTemp = document.querySelector("#temp-number");            
    currentTemp.innerHTML = `${temperature}`;
    let city = response.data.name;
    let displayCityName = document.querySelector(".current-city")
    displayCityName.innerHTML = `${city}`
}

let currentLocation = document.querySelector("#current-location");
currentLocation.addEventListener("click", getPosition);
            

            
            

            
            

            


            

            


/*
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



 


        let city = response.data.main.name;
    let currentCity = document.querySelector(".current-city");
    currentCity.innerHTML = `${city}`

*/