const svg = document.querySelector('#learning-path-svg');

svg.addEventListener('click', function (e) {
    if (e.target.classList.contains('month')) {
        let month = e.target.dataset.month;
        openModal(month);
    }
});

// Your data for each month
const monthData = {
    october: [
        'I started my Frontend Development journey. I started with:',
        '▪ HTML and CSS Basics',
        '▪ Semantic HTML',
        '▪ Forms and Validation',
        '▪ SEO Basics',
        '▪ Accessbility',
    ],
    november: [
        'I learned more advanced CSS techniques and started learning JavaScript:',
        '▪ CSS Layouts - Grid, Flexbox, Box Model',
        '▪ Responsive Design',
        '▪ Media Queries',
        '▪ JavaScript Syntax and Basic Constructs',
        '▪ Dom Manipulation',
    ],
    december: [
        'I built several projects using pure JavaScript and deepened my understanding of the language.',
        '▪ Rest APIs',
        '▪ Hoisting',
        '▪ Event Bubbling',
        '▪ Scope',
        '▪ Prototype',
    ],
    january: [
        'In January, I continued developing my skills in JavaScript.',
        '▪ Git, Bash Shell',
        '▪ Package Manager - npm',
        '▪ CSS Preprocessor - Sass',
        '▪ Basic Knowledge of CORS',
        '▪ Linters and Formatters - Prettier & ESLint',
    ],
    february: [
        'I started learning about modern JavaScript frameworks and libraries, starting with React.',
        '▪ Git',
        '▪ Package Manager - npm',
        '▪ CSS Preprocessor - Sass',
        '▪ Basic Knowledge of CORS',
        '▪ Linters and Formatters - Prettier&ESLint',
    ],
    march: [
        'In January, I started learning about modern JavaScript frameworks and libraries, starting with React.',
    ],
    april: [
        'In January, I started learning about modern JavaScript frameworks and libraries, starting with React.',
    ],
    may: [
        'In January, I started learning about modern JavaScript frameworks and libraries, starting with React.',
    ],
    june: [
        'In January, I started learning about modern JavaScript frameworks and libraries, starting with React.',
    ],
    july: [
        'In January, I started learning about modern JavaScript frameworks and libraries, starting with React.',
    ],
    august: [
        'In January, I started learning about modern JavaScript frameworks and libraries, starting with React.',
    ],
    september: [
        'In January, I started learning about modern JavaScript frameworks and libraries, starting with React.',
    ],
};

function openModal(month) {
    const modal = document.getElementById('modal');
    const title = document.getElementById('modal-title');
    const text = document.getElementById('modal-text');

    // populate the modal based on the month
    title.textContent =
        'Month: ' + month.charAt(0).toUpperCase() + month.slice(1);

    // Create an unordered list from the monthData
    text.innerHTML =
        '<ul><li>' + monthData[month].join('</li><li>') + '</li></ul>';

    // display the modal
    modal.style.display = 'block';
}

// add click event listener
svg.addEventListener('click', function (e) {
    if (e.target.classList.contains('month')) {
        let month = e.target.dataset.month;
        openModal(month);
    }
});

// add an event listener to close the modal when clicking outside the modal-content
document.getElementById('modal').addEventListener('click', function (e) {
    if (e.target == this) {
        this.style.display = 'none';
    }
});

// add an event listener to close the modal when the close button is clicked
document.getElementById('modal-close').addEventListener('click', function () {
    document.getElementById('modal').style.display = 'none';
});
