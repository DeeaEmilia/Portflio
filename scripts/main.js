const toggleSwitch = document.querySelector(
    '.theme-switch input[type="checkbox"]'
);

const currentTheme = localStorage.getItem('theme');

if (currentTheme) {
    if (currentTheme === 'light') {
        document.querySelector('#darkmode').href = '';
    }

    if (currentTheme === 'dark') {
        toggleSwitch.checked = true;
        document.querySelector('#darkmode').href =
            './assets/styles/darkmode.css';
    }
}

function switchTheme(event) {
    if (event.target.checked) {
        document.querySelector('#darkmode').href =
            './assets/styles/darkmode.css';
        localStorage.setItem('theme', 'dark');
    } else {
        document.querySelector('#darkmode').href = '';
        localStorage.setItem('theme', 'light');
    }
}

toggleSwitch.addEventListener('change', switchTheme);

function getUserLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
            (position) => {
                const latitude = position.coords.latitude;
                const longitude = position.coords.longitude;
                getWeatherData(latitude, longitude);
            },
            (error) => {
                console.error('Error getting user location:', error);
                // Fallback to a default location if geolocation fails.
                getWeatherData(null, null, 'Bucharest');
            }
        );
    } else {
        console.error('Geolocation is not supported by this browser.');
        // Fallback to a default location if geolocation is not supported.
        getWeatherData(null, null, 'Bucharest');
    }
}

function getWeatherData(latitude, longitude, fallbackLocation) {
    const apiKey = '69518b1f8f16c35f8705550dc4161056';
    let apiUrl;

    if (latitude && longitude) {
        apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;
    } else {
        apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${fallbackLocation}&appid=${apiKey}&units=metric`;
    }

    fetch(apiUrl)
        .then((response) => response.json())
        .then((data) => updateWeatherWidget(data))
        .catch((error) => console.error('Error fetching weather data:', error));
}

function updateWeatherWidget(data) {
    if (!data || !data.name || !data.sys || !data.main || !data.weather) {
        console.error('Invalid weather data:', data);
        return;
    }

    const locationElement = document.querySelector('.location');
    const temperatureElement = document.querySelector('.temperature');
    const conditionElement = document.querySelector('.condition');
    const weatherIconElement = document.querySelector('.weather-icon');

    locationElement.textContent = `${data.name}, ${data.sys.country}`;
    temperatureElement.textContent = `${Math.round(data.main.temp)}°C`;
    conditionElement.textContent = data.weather[0].description;
    weatherIconElement.src = `assets/weather-icons/${data.weather[0].icon}.svg`;
}

getUserLocation();

function updateTime() {
    const now = new Date();
    const hours = now.getHours().toString().padStart(2, '0');
    const minutes = now.getMinutes().toString().padStart(2, '0');
    const timeElement = document.querySelector('.time');
    timeElement.textContent = `${hours}:${minutes}`;
}

// Update the time immediately and every minute thereafter
updateTime();
setInterval(updateTime, 60000);
