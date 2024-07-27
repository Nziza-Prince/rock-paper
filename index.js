let Choices = ['scissors', 'rock', 'paper'];
let playerChoiceDisplay = document.getElementById("playerChoice");
let computerChoiceDisplay = document.getElementById("computerChoice");
let display = document.getElementById("results");
let playerPointsDisplay = document.getElementById("playerPoints");
let computerPointsDisplay = document.getElementById("computerPoints");
let rounds = document.getElementById("rounds");
let playTracker = 0;
let playerPoints = 0;
let computerPoints = 0;

function startTheGame(playerChoice) {
    let result = "";
    let computerChoice = Choices[Math.floor(Math.random() * 3)];
    if (playerChoice === computerChoice) {
        result = "It's a tie😐";
    } else {
        switch (playerChoice) {
            case 'scissors':
                result = (computerChoice === 'paper') ? 'You win😀' : 'Computer wins😓';
                break;
            case 'paper':
                result = (computerChoice === 'rock') ? 'You win😀' : 'Computer wins😓';
                break;
            case 'rock':
                result = (computerChoice === 'scissors') ? 'You win😀' : 'Computer wins😓';
                break;
        }
    }

    display.classList.remove("greenText", "redText");

    if (result === "You win😀") {
        display.classList.add("greenText");
        playerPoints++;
        playerPointsDisplay.classList.add("greenText");
    } else if (result === "Computer wins😓") {
        display.classList.add("redText");
        computerPoints++;
        computerPointsDisplay.classList.add("redText");
    }

    display.textContent = result;
    playerChoiceDisplay.textContent = playerChoice === 'rock' ? '✊' : playerChoice === 'paper' ? '🖐️' : '✌️';
    computerChoiceDisplay.textContent = computerChoice === 'rock' ? '✊' : computerChoice === 'paper' ? '🖐️' : '✌️';
    playerPointsDisplay.textContent = playerPoints;
    computerPointsDisplay.textContent = computerPoints;
    playTracker++;

    let totalRounds = rounds.value ? parseInt(rounds.value) : 5;

    if (playTracker >= totalRounds) {
        setTimeout(() => {
            if (playerPoints > computerPoints) {
                alert("You won! 🎉🎉🎉");
            } else if (playerPoints < computerPoints) {
                alert("You lost! 🙇‍♂️");
            } else {
                alert("It's a tie! 😅");
            }
            resetGame();
        }, 100);
    }
}

function resetGame() {
    playTracker = 0;
    playerPoints = 0;
    computerPoints = 0;
    playerPointsDisplay.textContent = playerPoints;
    computerPointsDisplay.textContent = computerPoints;
    playerChoiceDisplay.textContent = "✊";
    computerChoiceDisplay.textContent = "✌️";
    display.textContent = "Choose One!";
    rounds.value = 5; 
}

document.addEventListener('keydown', function(event) {
    switch (event.key) {
        case 's':
            startTheGame('scissors');
            break;
        case 'p':
            startTheGame('paper');
            break;
        case 'r':
            startTheGame('rock');
            break;
        default:
            break;
    }
});
