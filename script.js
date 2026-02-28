let humanScore = 0;
let computerScore = 0;
let round = 1;

const rockBtn = document.querySelector("#rock");
const paperBtn = document.querySelector("#paper");
const scissorsBtn = document.querySelector("#scissors");

const container = document.querySelector(".container");
const div = document.createElement("div");
const score = document.createElement("p");

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

function playRound(humanChoice, computerChoice) {
  if (humanChoice === computerChoice) {
    div.textContent = "You drew! Try again.";
  } else if (computerChoice === "rock" && humanChoice === "scissors") {
    // Computer wins
    div.textContent = "You lose! Rock beats scissors.";
    computerScore++;
  } else if (computerChoice === "scissors" && humanChoice === "paper") {
    // Computer wins
    div.textContent = "You lose! Scissors beats paper.";
    computerScore++;
  } else if (computerChoice === "paper" && humanChoice === "rock") {
    // Computer wins
    div.textContent = "You lose! Paper beats rock.";
    computerScore++;
  } else if (computerChoice === "scissors" && humanChoice === "rock") {
    // Player wins
    div.textContent = "You win! Rock beats scissors.";
    humanScore++;
  } else if (computerChoice === "paper" && humanChoice === "scissors") {
    // Player wins
    div.textContent = "You win! Scissors beats paper.";
    humanScore++;
  } else if (computerChoice === "rock" && humanChoice === "paper") {
    // Player wins
    div.textContent = "You win! Paper beats rock.";
    humanScore++;
  }

  container.appendChild(div);
  score.textContent = `Computer score: ${computerScore} | Player score: ${humanScore}`;
  div.appendChild(score);

  if (round === 5) {
    if (computerScore === humanScore) {
      alert(`Game over! You drew.
      \nYour score: ${humanScore} | Computer score: ${computerScore}`);
    } else if (computerScore > humanScore) {
      alert(`Game over! You lost, better luck next time!
      \nYour score: ${humanScore} | Computer score: ${computerScore}`);
    } else if (humanScore > computerScore) {
      alert(`Game over! You won, congrats!
      \nYour score: ${humanScore} | Computer score: ${computerScore}`);
    } else {
      console.log("Unexpected error");
    }

    div.textContent = "Game over!";
  }
}

rockBtn.addEventListener('click', () => {
  if (round <= 5) {
    playRound("rock", getComputerChoice());
    round++;
  }
});

paperBtn.addEventListener('click', () => {
  if (round <= 5) {
    playRound("paper", getComputerChoice());
    round++;
  }
});

scissorsBtn.addEventListener('click', () => {
  if (round <= 5) {
    playRound("scissors", getComputerChoice());
    round++;
  }
});