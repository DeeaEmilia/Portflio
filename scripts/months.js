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
        'I began my Frontend Development journey in October 2022 with:',
        '▪ HTML and CSS Basics',
        '▪ Semantic HTML',
        '▪ Forms and Validation',
        '▪ SEO Basics',
        '▪ Accessbility',
    ],
    november: [
        'In November I learned more advanced CSS techniques and started learning JavaScript:',
        '▪ CSS Layouts - Grid, Flexbox, Box Model',
        '▪ Responsive Design',
        '▪ Media Queries',
        '▪ JavaScript Syntax and Basic Constructs',
        '▪ Dom Manipulation',
    ],
    december: [
        'In December I continued developing my skills in JavaScript and learned some basics of UI/UX.',
        '▪ Object Oriented Programming',
        '▪ Functional Programming',
        '▪ Design Patterns',
        '▪ Figma',
        '▪ Adobe Illustrator',
        '▪ CSS Preprocessors - Sass, SCSS',
        '▪ Linters and Formatters - Prettier & ESLint',
    ],
    january: [
        'In January I built several small projects using pure JavaScript and deepened my understanding of the language.',
        '▪ Hoisting',
        '▪ Event Bubbling',
        '▪ Scope',
        '▪ Prototype',
        '▪ Version Control - Git',
        '▪ Bash Shell',
    ],
    february: [
        'In February I continued practicing and learned more advance JavaScript techniques:',
        '▪ Rest APIs',
        '▪ Basic Knowledge of CORS',
        '▪ Package Manager - npm',
    ],
    march: [
        'In March I started learning about modern JavaScript frameworks and libraries, starting with React.',
        '▪ Basics of React',
        '▪ JSX - a syntax extension for JavaScript',
        '▪ Components and Props',
        '▪ MaterialUI',
    ],
    april: [
        'In April I continued to deepen my knowledge of React.',
        '▪ React Router',
        '▪ State/Props in React',
        '▪ Component Life Cycle',
        '▪ Hooks in React',
        '▪ Context API',
    ],
    may: [
        'In May I tackled the basics of state management and testing applications:',
        '▪ Redux',
        '▪ State Management in React',
        '▪ Jest - JavaScript Testing Framework',
        '▪ react-testing-library - Testing utility for React',
        '▪ Cypress - End-to-End Testing Framework',
    ],
    june: [],
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
