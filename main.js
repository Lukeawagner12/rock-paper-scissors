let userScoreText = document.querySelector('#user-score');
let computerScoreText = document.querySelector('#computer-score');
let drawScoreText = document.querySelector('#draw-score');
let startButton = document.querySelector('#start');
let restartButton = document.querySelector('#restart');
let buttons = document.querySelectorAll('.button');
let gameWrapper = document.querySelector('.gameWrapper');
let buttonContainer = document.querySelector('.button-container');
let finalScore = document.querySelector('.final-score');
let computerChoiceText = document.querySelector('.computer-choice');
// Set scores to zero
let draw = 0;
let userScore = 0;
let computerScore = 0;
let numOfGames = prompt("How many rounds do you want to play?");
numOfGames = Number(numOfGames);
let count = 0;

// Start button to start game
startButton.addEventListener('click', function() {
   gameWrapper.classList.remove('hidden');
   restartButton.classList.remove('hidden');
   this.classList.add('hidden');
});

// Restart Button
restartButton.addEventListener('click', function() {
    location.reload();
});

// Add click event listener to all buttons
buttons.forEach(button => {
    button.addEventListener('click', function(event) {
        let userChoice = event.target.value;
        runGame(userChoice);
    });
});

function runGame(userChoice) {
    if(count < numOfGames) {
        // Get computer choice
        let computerChoice = getComputerChoice();
        // Detmerine winner
        let winner = determineWinner(userChoice, computerChoice);
        // Update the score
        updateScore(winner, userScore, computerScore, draw);
        // Update front end score board to reflect new score
        userScoreText.textContent = userScore;
        computerScoreText.textContent = computerScore;
        drawScoreText.textContent = draw;
        console.log(winner);

        function updateScore() {
            if(winner === "User") {
                userScore++;
            } else if (winner === "Computer") {
                computerScore++;
            } else {
                draw++;
            }
        }
        count++;
        if (count == numOfGames) {
            buttonContainer.classList.add('hidden');
            if(userScore > computerScore) {
                finalScore.textContent = "You are the winner!";
            } else if(computerScore > userScore) {
                finalScore.textContent = "You lost!";
            } else {
                finalScore.textContent = "Its a draw!";
            }
        }
    } else {
        console.log("Game Over");
    }
}

function getComputerChoice() {
    var randomNumber = Math.floor(Math.random() * 3) + 1;
    var computerChoice = "";
    if (randomNumber === 1) {
        computerChoice = "Rock"
    } else if (randomNumber === 2) {
        computerChoice = "Paper"
    } else if (randomNumber === 3) {
        computerChoice = "Scissors"
    }
    computerChoiceText.textContent = "Computer chose " + computerChoice + "!";
    return computerChoice;
}

function determineWinner(userChoice, computerChoice) {
    if (userChoice === "Rock" && computerChoice === "Scissors") {
        return "User";
    } else if (userChoice === "Rock" && computerChoice === "Paper") {
        return "Computer";
    }

    if (userChoice === "Paper" && computerChoice === "Rock") {
        return "User";
    } else if (userChoice === "Paper" && computerChoice === "Scissors") {
        return "Computer";
    }

    if (userChoice === "Scissors" && computerChoice === "Paper") {
        return "User";
    } else if (userChoice === "Scissors" && computerChoice === "Rock") {
        return "Computer";
    } 

    if (userChoice === computerChoice) {
        return "draw";
    }
}