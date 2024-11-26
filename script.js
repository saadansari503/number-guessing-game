document.addEventListener("DOMContentLoaded", () => {
    const instructions = document.getElementById("instructions");
    const result = document.getElementById("result");
    const guessInput = document.getElementById("guess");
    const submitGuess = document.getElementById("submit-guess");
    const restartGame = document.getElementById("restart-game");

    let randomNumber = Math.floor(Math.random() * 10) + 1;
    let attempts = 3;

    function resetGame() {
        randomNumber = Math.floor(Math.random() * 10) + 1;
        attempts = 3;
        instructions.textContent = "Guess a number between 1 and 10. You have 3 tries!";
        result.textContent = "";
        guessInput.value = "";
        guessInput.disabled = false;
        submitGuess.disabled = false;
        restartGame.classList.add("hidden");
    }

    submitGuess.addEventListener("click", () => {
        const userGuess = parseInt(guessInput.value);

        if (isNaN(userGuess) || userGuess < 1 || userGuess > 10) {
            result.textContent = "Please enter a valid number between 1 and 10!";
            return;
        }

        attempts--;

        if (userGuess === randomNumber) {
            result.textContent = "Congratulations! You guessed the number!";
            result.style.color = "#28a745";
            guessInput.disabled = true;
            submitGuess.disabled = true;
            restartGame.classList.remove("hidden");
        } else if (attempts > 0) {
            result.textContent = `Wrong guess! You have ${attempts} tries left.`;
        } else {
            result.textContent = `You lost! The correct number was ${randomNumber}.`;
            result.style.color = "#ff4d4d";
            guessInput.disabled = true;
            submitGuess.disabled = true;
            restartGame.classList.remove("hidden");
        }
    });

    restartGame.addEventListener("click", resetGame);
});
