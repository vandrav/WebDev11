const input = document.getElementById('getLocation');
const weatherBtn = document.getElementById('weather');
const URL_CURRENT_WEATHER = "https://api.openweathermap.org/data/2.5/weather?appid=69518b1f8f16c35f8705550dc4161056&units=metric&q=";
const URL_WEATHER_ICON_PREFIX = "http://openweathermap.org/img/w/"

const icon = document.getElementById('icon');
const description = document.getElementById('desc');
const humidity = document.getElementById('humidity');
const pressure = document.getElementById('pressure');
const temp = document.getElementById('temp');
const dayMax = document.getElementById('dayMax');
const dayMin = document.getElementById('dayMin');


weatherBtn.addEventListener('click', showWeather);

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


        })
        .catch(function(err) {
            console.log(err);
        });
}