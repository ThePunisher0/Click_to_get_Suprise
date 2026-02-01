const question = document.getElementById('question');
const yesBtn = document.getElementById('yes-btn');
const noBtn = document.getElementById('no-btn');
const questionContainer = document.getElementById('question-container');
const successContainer = document.getElementById('success-container');

// 1. Handle URL Params for Custom Name
const params = new URLSearchParams(window.location.search);
let name = params.get('name');

// If name is provided, update the text
if (name) {
    // Sanitize basic input to avoid breaking HTML
    name = name.replace(/[<>]/g, '');
    question.innerText = `${name}, will you be my Valentine?`;
} else {
    // Default text if no name provided
    question.innerText = "Will you be my Valentine?";
}

// 2. "No" Button Logic - Run Away!
// Set initial class to static
noBtn.classList.add('static');

function moveButton() {
    // Reveal the teaser text
    document.getElementById('subtext').classList.remove('hidden');

    // Make it fixed so it can go anywhere on screen
    noBtn.classList.remove('static');
    noBtn.classList.add('moving');

    // Calculate random position within viewport
    // Ensure it doesn't go off screen (padding of 50px)
    const maxWidth = window.innerWidth - noBtn.offsetWidth - 50;
    const maxHeight = window.innerHeight - noBtn.offsetHeight - 50;

    const randomX = Math.max(20, Math.floor(Math.random() * maxWidth));
    const randomY = Math.max(20, Math.floor(Math.random() * maxHeight));

    noBtn.style.left = randomX + 'px';
    noBtn.style.top = randomY + 'px';
}

// Event listeners for desktop (hover/click) and mobile (touch)
noBtn.addEventListener('mouseover', moveButton);
noBtn.addEventListener('click', (e) => {
    e.preventDefault(); // Prevent clicking
    moveButton();
});
noBtn.addEventListener('touchstart', (e) => {
    e.preventDefault(); // Prevent tap
    moveButton();
});


// 3. "Yes" Button Logic - Success!
yesBtn.addEventListener('click', () => {
    questionContainer.classList.add('hidden');
    successContainer.classList.remove('hidden');
    
    // Optional: Add some confetti or extra effects here if desired
});
