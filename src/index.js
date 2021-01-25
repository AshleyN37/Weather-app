
// display current day and time
// need to format date - so hours and minutes format correctly when less than 10 - use a function


function formatAMPM(date) {
  var hours = date.getHours();
  var minutes = date.getMinutes();
  var ampm = hours >= 12 ? 'pm' : 'am';
  hours = hours % 12;
  hours = hours ? hours : 12; // the hour '0' should be '12'
  minutes = minutes < 10 ? '0'+minutes : minutes;
  var strTime = hours + ':' + minutes + ' ' + ampm;
  return strTime;
}

/*

console.log(formatAMPM(new Date));
function formatTime(now) {
    return (now.getMinutes() < 10 ? '0' : '') 
}


let now = new Date();
console.log(formatTime(now));
let dayTime = document.querySelector(".day-time");

let days = [
    "Sunday", 
    "Monday", 
    "Tuesday", 
    "Wednesday", 
    "Thursday", 
    "Friday", 
    "Saturday"]
    let day = days[now.getDay()];

    let hours = now.getHours(formatTime);
    let minutes = now.getMinutes(formatTime);
    
    dayTime.innerHTML = `${day} ${hours}:${minutes}`;
    */
    
    





    

    



    
    


    

    

    
    

    
    
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



    // Updates temperature in Fahrenheit for the current location
    function showTemperature(response) {
        let temperature = Math.round(response.data.main.temp);
        let temperatureElement = document.querySelector("#temp-number");
        temperatureElement.innerHTML = `${temperature}`;
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

if (minutes < 10) {
    minutes = `0${minutes}`
}
if (hours < 10) {
    hours = `0${hours}`
}

<!--
👨‍🏫Your task
On your project, when a user searches for a city (example: New York), it should display the name of the city on the result page and the current temperature of the city.

use api
ajax
get into the innerHTML of the temperature and change it
change name of city using innerHTML

Extras:
update weather   -      response.data.weather[0].main;

update picture
update precipitation
update humidity
update wind


search city and state for the USA

🙀 Bonus point:
Add a Current Location button. When clicking on it, it uses the Geolocation API to get your GPS coordinates and display and the city and current temperature using the OpenWeather API.
-->







            










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




if you need help look at suggested solution and video solution from week 5 homework https://www.shecodes.io/learn/workshops/268/units/28/challenges/36/solution


*/