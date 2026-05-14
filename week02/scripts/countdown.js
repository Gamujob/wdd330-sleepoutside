const countdownDisplay = document.querySelector('#countdown');
const startButton = document.getElementById('startButton');

let timeLeft = 10;

startButton.addEventListener('click', () => {
    setInterval(() => {
        if (timeLeft >= 0) {
            countdownDisplay.textContent = timeLeft;
            timeLeft--;
        } else {
            setTimeout(() => {
                clearInterval()
                countdownDisplay.textContent = `Time's Up!`;
            }, 1000);
        }
    }, 1000);
});