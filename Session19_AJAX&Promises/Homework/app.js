const input = document.getElementById('getLocation');
const weatherBtn = document.getElementById('weather');
const forecastBtn = document.getElementById('forecast');
const URL_CURRENT_WEATHER = "https://api.openweathermap.org/data/2.5/weather?appid=69518b1f8f16c35f8705550dc4161056&units=metric&q=";
const URL_FORECAST_WEATHER = "https://api.openweathermap.org/data/2.5/forecast?appid=69518b1f8f16c35f8705550dc4161056&units=metric&q=";
const URL_WEATHER_ICON_PREFIX = "http://openweathermap.org/img/w/"
const GOOGLE_MAP_API = "https://maps.googleapis.com/maps/api/js?key=AIzaSyCuaHeqScbFRB5NFkQuoinskBt2QPWYycs&callback="


const icon = document.getElementById('icon');
const description = document.getElementById('desc');
const humidity = document.getElementById('humidity');
const pressure = document.getElementById('pressure');
const temp = document.getElementById('temp');
const dayMax = document.getElementById('dayMax');
const dayMin = document.getElementById('dayMin');

// let map;

// function initMap(latitude, longitude) {
//     map = new google.maps.Map(document.getElementById("map"), {
//         center: {
//             lat: latitude,
//             lng: longitude,
//         },
//         zoom: 10,
//     });

// };



weatherBtn.addEventListener('click', showWeather);
forecastBtn.addEventListener('click', showForecast);



function showWeather() {
    fetch(URL_CURRENT_WEATHER + input.value)
        .then(function(res) {
            console.log(res);
            return res.json();
        })
        .then(function(data) {
            console.log(data);
            icon.src = URL_WEATHER_ICON_PREFIX + data.weather[0].icon + '.png';
            description.innerHTML = `Descriere: ${data.weather[0].description}`;
            humidity.innerHTML = `Umiditate: ${data.main.humidity}`;
            pressure.innerHTML = `Umiditate: ${data.main.pressure}`;
            temp.innerHTML = `Temperatura curenta: ${Math.round(data.main.temp)}°C`;
            dayMin.innerHTML = `Minima zilei: ${Math.round(data.main.temp_min)}°C`;
            dayMax.innerHTML = `Maxima zilei: ${Math.round(data.main.temp_max)}°C`;
            // initMap(data.coord.lat, data.coord.lon);
            // var mapProp = {
            //     center: new google.maps.LatLng(data.coord.lat, data.coord.lon),
            //     zoom: 10,
            // };
            // var map = new google.maps.Map(document.getElementById("map"), mapProp);
            // fetch(GOOGLE_MAP_API + 'initmap');
        })
        .catch(function(err) {
            console.log(err);
        });
}

function showForecast() {
    fetch(URL_FORECAST_WEATHER + input.value)
        .then(function(res) {
            console.log(res);
            return res.json();
        })
        .then(function(data) {
            console.log(data);
        })
}