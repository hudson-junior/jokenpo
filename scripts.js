const result = document.querySelector(".result");
const choices = document.querySelector(".choices");
const machineScore = document.getElementById("machine-score");
const humanScore = document.getElementById("human-score");

const GAME_OPTIONS = {
  ROCK: 'pedra',
  PAPER: 'papel',
  SCISSORS: 'tesoura'
};

let totalScoreMachine = 0;
let totalScoreHuman = 0;

const resetScore = () => {
  totalScoreHuman = 0;
  totalScoreMachine = 0;
  humanScore.innerHTML = totalScoreHuman;
  machineScore.innerHTML = totalScoreMachine;
  result.innerHTML = ``;
  choices.innerHTML = `Placar zerado. Clique em uma opção para jogar.`;
}

const playHuman = (humanChoice) => {
  playGame(humanChoice, machinePlay());
};

const machinePlay = () => {
  const machineChoice = [GAME_OPTIONS.ROCK,
    GAME_OPTIONS.PAPER,
    GAME_OPTIONS.SCISSORS];
  const randomNumber = Math.floor(Math.random() * 3);
  return machineChoice[randomNumber];
};

const playGame = (human, machine) => {
  if (human === machine) {
    result.innerHTML = `Empate!`;
    choices.innerHTML = `Você jogou ${human} e a máquina jogou ${machine}.`;
    result.style.color = "#787000";
  } else if (
    (human === GAME_OPTIONS.ROCK && machine === GAME_OPTIONS.SCISSORS) ||
    (human === GAME_OPTIONS.PAPER && machine === GAME_OPTIONS.ROCK) ||
    (human === GAME_OPTIONS.SCISSORS && machine === GAME_OPTIONS.PAPER)
  ) {
    totalScoreHuman++;
    result.innerHTML = `Você ganhou, PARABÉNS!`;
    choices.innerHTML = `Você jogou ${human} e a máquina jogou ${machine}.`;
    humanScore.innerHTML = totalScoreHuman;
    result.style.color = "#00782A";
  } else {
    totalScoreMachine++;
    result.innerHTML = `Você perdeu!`;
    choices.innerHTML = `Você jogou ${human} e a máquina jogou ${machine}.`;
    machineScore.innerHTML = totalScoreMachine;
    result.style.color = "#780000";
  }
}