var numberOfRounds = prompt("Choose how many rounds you want to play.");
console.log(typeof numberOfRounds);
numberOfRounds = Number(numberOfRounds);
console.log(typeof numberOfRounds);
count = 0;
var computerScore = 0;
var userScore = 0;
while (numberOfRounds > count) {
    function getComputerChoice() {
        var randomNumber = Math.floor(Math.random() * 3) + 1;
        var computerChoice = "";
        console.log(randomNumber);
        if (randomNumber === 1) {
            computerChoice = "Rock"
        } else if (randomNumber === 2) {
            computerChoice = "Paper"
        } else if (randomNumber === 3) {
            computerChoice = "Scissors"
        }
        return computerChoice;
    }
    
    function getUserChoice() {
        var userChoice = prompt("Choose your element!");
        return userChoice[0].toUpperCase() + userChoice.slice(1).toLowerCase();
    }
    
    var userChoice = getUserChoice();
    console.log(userChoice);
    var computerChoice = getComputerChoice();
    console.log(computerChoice);
    determineWinner(userChoice, computerChoice);
    
    function determineWinner(userChoice, computerChoice) {
        if (userChoice === "Rock" && computerChoice === "Scissors") {
            youWin();
        } else if (userChoice === "Rock" && computerChoice === "Paper") {
            youLoose();
        }
    
        if (userChoice === "Paper" && computerChoice === "Rock") {
            youWin();
        } else if (userChoice === "Paper" && computerChoice === "Scissors") {
            youLoose();
        }
    
        if (userChoice === "Scissors" && computerChoice === "Paper") {
            youWin();
        } else if (userChoice === "Scissors" && computerChoice === "Rock") {
            youLoose();
        } 
    
        if (userChoice === computerChoice) {
            draw();
        }
    
        function youLoose() {
            console.log("You loose! " + computerChoice + " beats " + userChoice);
            computerScore++;
        }
        function youWin() {
            console.log("You win! " + userChoice + " beats " + computerChoice);
            userScore++;
        }
        function draw() {
            console.log("It's a draw! " + userChoice + " and " + computerChoice + " are the same...try again!");
        }
    }
    count++;
}
determineUltimateWinner(computerScore, userScore)

function determineUltimateWinner(computerScore, userScore) {
    console.log("Final score is computer: " + computerScore + " | You: " + userScore + "!");
    if (computerScore > userScore) {
        console.log("You are the ultimate loser!");
    } else if (computerScore < userScore) {
        console.log("You are the ultimate winner!");
    } else {
        console.log("It was a draw!");
    }
}