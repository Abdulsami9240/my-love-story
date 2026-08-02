// Select all hearts
const hearts = document.querySelectorAll(".heart");

const message = document.getElementById("message");
const nextButton = document.getElementById("nextButton");

// Randomly choose one winning heart
const winningHeart = Math.floor(Math.random() * hearts.length);

let gameFinished = false;

// Click event for every heart
hearts.forEach((heart, index) => {

    heart.addEventListener("click", () => {

        if (gameFinished) return;

        if (index === winningHeart) {

            gameFinished = true;

            heart.innerHTML = "🔑";

            heart.style.background = "#ffd700";
            heart.style.transform = "scale(1.2)";
            heart.style.boxShadow = "0 0 40px gold";

            message.innerHTML = "🎉 You found the key to my heart ❤️";

            nextButton.style.display = "inline-block";

            createConfetti();

        } else {

            heart.innerHTML = "💔";

            heart.style.opacity = "0.6";

            message.innerHTML = "Oops 😝 Try another heart...";
        }

    });

});

nextButton.addEventListener("click", () => {

    window.location.href = "game2.html";

});

// --------------------------
// Simple Confetti
// --------------------------

function createConfetti() {

    for (let i = 0; i < 120; i++) {

        const confetti = document.createElement("div");

        confetti.className = "confetti";

        confetti.style.left = Math.random() * window.innerWidth + "px";

        confetti.style.top = "-20px";

        confetti.style.background =
            `hsl(${Math.random() * 360},100%,60%)`;

        confetti.style.animationDuration =
            (Math.random() * 3 + 2) + "s";

        document.body.appendChild(confetti);

        setTimeout(() => {

            confetti.remove();

        }, 5000);

    }

}