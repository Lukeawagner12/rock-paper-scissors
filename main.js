function getComputerChoice() {
    var randomNumber = Math.floor(Math.random() * 4) + 1;
    var computerChoice = "";
    console.log(randomNumber);
    if (randomNumber === 1) {
        ComputerChoice = "Rock"
    } else if (randomNumber === 2) {
        computerChoice = "Paper"
    } else if (randomNumber === 3) {
        computerChoice = "Scissors"
    }
    return computerChoice;
}

console.log(getComputerChoice());