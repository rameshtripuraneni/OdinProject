let humanScore = 0;
let computerScore = 0;
const WIN_SCORE = 5;

const humanScoreEl = document.getElementById("humanScore");
const computerScoreEl = document.getElementById("computerScore");
const roundResultEl = document.getElementById("roundResult");
const finalResultEl = document.getElementById("finalResult");
const statusEl = document.getElementById("status");
const buttons = document.querySelectorAll(".buttons button");
const resetBtn = document.getElementById("resetBtn");

function getComputerChoice() {
  const options = ["rock", "paper", "scissors"];
  const idx = Math.floor(Math.random() * options.length);
  return options[idx];
}

function playRound(humanChoice, computerChoice) {
  const h = humanChoice.toLowerCase();
  const c = computerChoice.toLowerCase();

  if (h === c) return "tie";
  const humanWins =
    (h === "rock" && c === "scissors") ||
    (h === "paper" && c === "rock") ||
    (h === "scissors" && c === "paper");
  return humanWins ? "human" : "computer";
}

function updateUIAfterRound(h, c, winner) {
  if (winner === "tie") {
    roundResultEl.textContent = `It's a tie! You: ${h} | Computer: ${c}`;
  } else if (winner === "human") {
    humanScore++;
    roundResultEl.textContent = `You win this round! ${h} beats ${c}`;
  } else {
    computerScore++;
    roundResultEl.textContent = `Computer wins this round! ${c} beats ${h}`;
  }

  humanScoreEl.textContent = humanScore;
  computerScoreEl.textContent = computerScore;
  statusEl.textContent = `First to ${WIN_SCORE} points wins.`;

  if (humanScore >= WIN_SCORE || computerScore >= WIN_SCORE) {
    endGame();
  }
}

function endGame() {
  // disable buttons
  buttons.forEach(b => (b.disabled = true));

  if (humanScore > computerScore) {
    finalResultEl.textContent = "🎉 You won the game!";
  } else if (humanScore < computerScore) {
    finalResultEl.textContent = "🤖 Computer won the game.";
  } else {
    finalResultEl.textContent = "It's a draw.";
  }
}

function resetGame() {
  humanScore = 0;
  computerScore = 0;
  humanScoreEl.textContent = "0";
  computerScoreEl.textContent = "0";
  roundResultEl.textContent = "";
  finalResultEl.textContent = "";
  statusEl.textContent = "Pick Rock, Paper, or Scissors.";
  buttons.forEach(b => (b.disabled = false));
}

// Event listeners for the three choice buttons
buttons.forEach(btn => {
  btn.addEventListener("click", () => {
    const human = btn.dataset.choice;           // "rock" | "paper" | "scissors"
    const computer = getComputerChoice();
    const winner = playRound(human, computer);
    updateUIAfterRound(human, computer, winner);
  });
});

resetBtn.addEventListener("click", resetGame);

// initial status
statusEl.textContent = "Pick Rock, Paper, or Scissors.";
