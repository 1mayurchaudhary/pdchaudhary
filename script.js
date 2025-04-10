let currentPage = 1;

function nextPage() {
    document.getElementById(`page${currentPage}`).style.display = 'none';
    currentPage++;
    const next = document.getElementById(`page${currentPage}`);
    if (next) {
        next.style.display = 'flex';
        if (currentPage === 3 || currentPage === 4) {
            typeEffect(currentPage);
        }
        if (currentPage === 4) {
            createHearts();
        }
        if (currentPage === 5) {
            createBalloons();
        }
    }
}

function typeEffect(pageNumber) {
    const page = document.getElementById(`page${pageNumber}`);
    const paragraph = page.querySelector("p");
    const text = paragraph.textContent;
    paragraph.textContent = "";
    let index = 0;

    function typeChar() {
        if (index < text.length) {
            paragraph.textContent += text.charAt(index);
            index++;
            setTimeout(typeChar, 40);
        }
    }

    typeChar();
}

function createHearts() {
    const container = document.createElement('div');
    container.className = 'heart-container';
    document.getElementById('page4').appendChild(container);

    for (let i = 0; i < 30; i++) {
        const heart = document.createElement('div');
        heart.className = 'heart';
        heart.style.left = Math.random() * window.innerWidth + 'px';
        heart.style.top = '100vh';
        heart.style.animationDuration = (Math.random() * 2 + 4) + 's';
        container.appendChild(heart);
    }
}

function createBalloons() {
    const container = document.createElement('div');
    container.className = 'balloon-container';
    document.getElementById('page5').appendChild(container);

    for (let i = 0; i < 20; i++) {
        const balloon = document.createElement('div');
        balloon.className = 'balloon';
        balloon.style.left = Math.random() * window.innerWidth + 'px';
        balloon.style.animationDuration = (Math.random() * 2 + 4) + 's';
        container.appendChild(balloon);
    }
}

function createConfetti(pageId) {
    const page = document.getElementById(pageId);
    for (let i = 0; i < 50; i++) {
        const confetti = document.createElement('div');
        confetti.className = 'confetti';
        confetti.style.left = Math.random() * window.innerWidth + 'px';
        confetti.style.top = Math.random() * -200 + 'px';
        confetti.style.backgroundColor = ['#ff0', '#f0f', '#0ff', '#f00', '#0f0'][Math.floor(Math.random() * 5)];
        confetti.style.animationDuration = (Math.random() * 3 + 2) + 's';
        page.appendChild(confetti);
    }
}

document.addEventListener("DOMContentLoaded", () => {
    const audio = new Audio("background.mp3");
    audio.loop = true;
    audio.volume = 0.5;
    audio.play().catch(e => console.log("Autoplay not allowed"));
});
