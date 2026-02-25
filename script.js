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

console.log(getComputerChoice());