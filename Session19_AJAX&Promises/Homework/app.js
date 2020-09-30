const input = document.getElementById('input');
const weatherBtn = document.getElementById('weather');
const URL_CURRENT_WEATHER = "https://api.openweathermap.org/data/2.5/weather?appid=69518b1f8f16c35f8705550dc4161056&units=metric&q=";
const URL_WEATHER_ICON_PREFIX = "http://openweathermap.org/img/w/"

const temp = document.getElementById('temp');
const icon = document.getElementById('icon');


weatherBtn.addEventListener('click', showWeather);

function showWeather() {
    fetch(URL_CURRENT_WEATHER + input.value)
        .then(function(res) {
            console.log(res);
            return res.json();
        })
        .then(function(data) {
            console.log(data);
            temp.innerHTML = ` ${data.main.temp} `;
            icon.src = URL_WEATHER_ICON_PREFIX + data.weather[0].icon + '.png';
        })
        .catch(function(err) {
            console.log(err);
        });
}