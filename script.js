const buttonR = document.querySelector('#rock');
const buttonP = document.querySelector('#paper');
const buttonS = document.querySelector('#scissor');
const container = document.querySelector('.container');

let humanScore = 0, computerScore = 0;

function getComputerChoice() {
  let computerIndex = Math.floor(Math.random() * 3) + 1;
  switch (computerIndex) {
    case 1: return "Rock";
    case 2: return "Paper";
    case 3: return "Scissor";
  }
}

function playRound(humanChoice) {
  container.textContent = "";
  let computerChoice = getComputerChoice();

  if (humanChoice === "Rock" && computerChoice === "Paper") computerScore++;
  else if (humanChoice === "Rock" && computerChoice === "Scissor") humanScore++;
  else if (humanChoice === "Scissor" && computerChoice === "Paper") humanScore++;
  else if (humanChoice === "Scissor" && computerChoice === "Rock") computerScore++;
  else if (humanChoice === "Paper" && computerChoice === "Rock") humanScore++;
  else if (humanChoice === "Paper" && computerChoice === "Scissor") computerScore++;

  container.innerHTML = `<h3>Computer's choice: ${computerChoice}  &nbsp;&nbsp;&nbsp; Your choice: ${humanChoice}</h3><br><br>
                         <h3>Score → Computer: ${computerScore}&nbsp;&nbsp;&nbsp; User: ${humanScore}</h3>`;

  if (computerScore === 5) {
    container.innerHTML = `<h2>🏆 Winner: Computer!</h2> <br>
                          <h3> Final Score → Computer: ${computerScore}&nbsp;&nbsp;&nbsp; User: ${humanScore}</h3>`;
    humanScore = 0;
    computerScore = 0;
  } else if (humanScore === 5) {
    container.innerHTML = `<h2>🏆 Winner: You!</h2> <br>
     
                          <h3> Final Score → Computer: ${computerScore}&nbsp;&nbsp;&nbsp; User: ${humanScore}</h3>`;
    humanScore = 0;
    computerScore = 0;
  }
}

buttonR.addEventListener('click', () => playRound('Rock'));
buttonP.addEventListener('click', () => playRound('Paper'));
buttonS.addEventListener('click', () => playRound('Scissor'));
