let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
    // Get a random float between 0 and 1
    let rand = Math.random();
    let choice;

    // Pick a choice based off random number
    if (rand < 0.33) {
        choice = "rock";
    } else if (rand >= 0.33 && rand < 0.66) {
        choice = "paper";
    } else {
        choice = "scissors";
    }
    // Return choice
    console.log(`Computer chooses: ${choice}`)
    return choice;
}

function getHumanChoice() {
    // Get user choice
    let choice = prompt("Rock, paper, or scissors?")

    if (choice.toLowerCase() === "rock" || choice.toLowerCase() === "paper" || choice.toLowerCase() === "scissors") {
        return choice.toLowerCase();
    } else {
        alert("Your choice was not formatted correctly.")
        getHumanChoice();
    }
}

function playRound(humanChoice, computerChoice) {
    if (humanChoice === computerChoice) {
        alert("You drew! Try again.");
    } else if (computerChoice === "rock" && humanChoice === "scissors") {
        // Computer wins
        alert("You lose! Rock beats scissors.");
        computerScore++;
    } else if (computerChoice === "scissors" && humanChoice === "paper") {
        // Computer wins
        alert("You lose! Scissors beats paper.");
        computerScore++;
    } else if (computerChoice === "paper" && humanChoice === "rock") {
        // Computer wins
        alert("You lose! Paper beats rock.");
        computerScore++;
    } else if (computerChoice === "scissors" && humanChoice === "rock") {
        // Player wins
        alert("You win! Rock beats scissors.");
        humanScore++;
    } else if (computerChoice === "paper" && humanChoice === "scissors") {
        // Player wins
        alert("You win! Scissors beats paper.");
        humanScore++;
    } else if (computerChoice === "rock" && humanChoice === "paper") {
        // Player wins
        alert("You win! Paper beats rock.");
        humanScore++;
    }

    console.log(`Computer score: ${computerScore} | Player score: ${humanScore}`)
}

function playGame() {
    let round = 0;

    while (round < 5) {
        playRound(getHumanChoice(), getComputerChoice());
        round++;
        console.log(`Round: ${round}`)
    }

    if (computerScore === humanScore) {
        alert(`Game over! You drew.\nYour score: ${humanScore} | Computer score: ${computerScore}`);
    } else if (computerScore > humanScore) {
        alert(`Game over! You lost, better luck next time!\nYour score: ${humanScore} | Computer score: ${computerScore}`);
    } else if (humanScore > computerScore) {
        alert(`Game over! You won, congrats!\nYour score: ${humanScore} | Computer score: ${computerScore}`);
    } else {
        console.log("Unexpected error");
    }
}

playGame();