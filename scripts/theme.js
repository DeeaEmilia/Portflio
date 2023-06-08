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
            '/assets/styles/darkmode.css';
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

window.onload = function () {
    const theme = localStorage.getItem('theme');

    if (theme === 'dark') {
        document.querySelector('#darkmode').href =
            '/assets/styles/darkmode.css';
    } else {
        document.querySelector('#darkmode').href = '';
    }
};

toggleSwitch.addEventListener('change', switchTheme);

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
