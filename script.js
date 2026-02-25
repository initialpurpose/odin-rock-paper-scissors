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