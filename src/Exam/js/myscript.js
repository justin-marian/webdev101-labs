window.onload = function () {
    alert("Press SPACE to jump! Avoid the phantoms! Press 'B' to change background!");

    let score = 0;
    let lives = 9;
    let sonic = document.querySelector(".sonic");
    let counter = document.getElementById("counter");
    let livesCounter = document.getElementById("lives");
    let background = document.querySelector(".background");

    let isBackgroundOne = true;

    // Toggle Background with Key Press (Press 'B')
    document.addEventListener("keydown", function (event) {
        if (event.key.toLowerCase() === "b") {
            if (isBackgroundOne) {
                background.style.backgroundImage = "url('img/backGround2.jpg')";
            } else {
                background.style.backgroundImage = "url('img/backGround1.jpg')";
            }
            isBackgroundOne = !isBackgroundOne;
        }
    });

    // Jump Mechanic - Higher & Smoother
    document.body.onkeyup = function (e) {
        if (e.key === " " || e.code === "Space") {
            if (!sonic.classList.contains("jump")) {
                sonic.classList.add("jump");
                setTimeout(() => sonic.classList.remove("jump"), 1000);
            }
        }
    };

    // **Phantom Generator - FIXED Positioning & Speed**
    function generatePhantom() {
        let phantom = document.createElement("div");
        phantom.classList.add("phantom");
        document.querySelector(".game-container").appendChild(phantom);

        // Ensure they are visible by keeping height within playable range
        let minY = 50;
        let maxY = 150;
        let randomHeight = Math.floor(Math.random() * (maxY - minY + 1)) + minY;
        phantom.style.bottom = randomHeight + "px";

        // Slower movement to make game playable
        let speed = Math.random() * 3 + 1;
        phantom.style.animation = `movePhantom ${speed}s linear forwards`;

        // Remove phantom when off-screen
        setTimeout(() => phantom.remove(), speed * 1000);
    }

    setInterval(generatePhantom, 2500); // **New Phantom every 2.5 sec**

    // **Collision Detection - Adjusted for Better Accuracy**
    setInterval(() => {
        let sonicRect = sonic.getBoundingClientRect();
        let phantoms = document.querySelectorAll(".phantom");

        phantoms.forEach((phantom) => {
            let phantomRect = phantom.getBoundingClientRect();

            if (
                sonicRect.right > phantomRect.left &&
                sonicRect.left < phantomRect.right &&
                sonicRect.bottom > phantomRect.top &&
                sonicRect.top < phantomRect.bottom
            ) {
                phantom.remove();
                lives--;
                livesCounter.textContent = lives;

                if (lives <= 0) {
                    alert("Game Over! Your score: " + score);
                    location.reload();
                }
            }
        });
    }, 100);

    // **Score Counter**
    setInterval(() => {
        score++;
        counter.textContent = score;
    }, 1000);
};
