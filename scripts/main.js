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
