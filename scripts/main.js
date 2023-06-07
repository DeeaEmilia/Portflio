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
    const theme = event.target.checked ? 'dark' : 'light';
    const images = document.querySelectorAll('.card-image');

    for (let img of images) {
        img.src = img.dataset[theme];
    }

    if (event.target.checked) {
        document.querySelector('#darkmode').href =
            './assets/styles/darkmode.css';
        localStorage.setItem('theme', 'dark');
    } else {
        document.querySelector('#darkmode').href = '';
        localStorage.setItem('theme', 'light');
    }
}

if (currentTheme) {
    const images = document.querySelectorAll('.card-image');

    for (let img of images) {
        img.src = img.dataset[currentTheme];
    }

    if (currentTheme === 'light') {
        document.querySelector('#darkmode').href = '';
    }

    if (currentTheme === 'dark') {
        toggleSwitch.checked = true;
        document.querySelector('#darkmode').href =
            './assets/styles/darkmode.css';
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
            () => {
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

function getWeatherData() {
    const apiKey = '69518b1f8f16c35f8705550dc4161056';
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=Bucharest&appid=${apiKey}&units=metric`;

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
getWeatherData();

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

const contactModal = document.querySelector('.contact-modal');
const closeButton = document.querySelector('.contact-close');
const contactBtns = document.querySelectorAll('.contact-btn');

// Add an event listener to each contact button
contactBtns.forEach(function (btn) {
    btn.addEventListener('click', function () {
        contactModal.style.display = 'block';
    });
});

// Add an event listener to the close button
closeButton.addEventListener('click', function () {
    contactModal.style.display = 'none';
});

// Add an event listener to the modal
contactModal.addEventListener('click', function (event) {
    // If the user clicks inside the modal, do nothing
    if (event.target.closest('.contact-content')) {
        return;
    }
    // If the user clicks outside the modal, close it
    contactModal.style.display = 'none';
});
