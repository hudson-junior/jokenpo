const result = document.querySelector(".result");
const choices = document.querySelector(".choices");
const machineScore = document.getElementById("machine-score");
const humanScore = document.getElementById("human-score");

const GAME_OPTIONS = {
  ROCK: 'pedra',
  PAPER: 'papel',
  SCISSORS: 'tesoura'
};

const GAME_EMOJIS = {
  pedra: "✊",
  papel: "🖐️",
  tesoura: "✌️"
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
  // Mostra carregamento
  result.classList.remove("show");
  result.innerHTML = "";
  choices.innerHTML = "";
  document.getElementById("loading").style.display = "block";

  // Aguarda 1 segundo antes de mostrar resultado
  setTimeout(() => {
    document.getElementById("loading").style.display = "none";

    if (human === machine) {
      result.innerHTML = `Empate!`;
      choices.innerHTML = `
      Você  🧍  x  🤖  Máquina<br>
      <span class="emoji-duelo">${GAME_EMOJIS[human]} x ${GAME_EMOJIS[machine]}</span>
      `;
      result.style.color = "#787000";
    } else if (
      (human === GAME_OPTIONS.ROCK && machine === GAME_OPTIONS.SCISSORS) ||
      (human === GAME_OPTIONS.PAPER && machine === GAME_OPTIONS.ROCK) ||
      (human === GAME_OPTIONS.SCISSORS && machine === GAME_OPTIONS.PAPER)
    ) {
      totalScoreHuman++;
      result.innerHTML = `Você ganhou, PARABÉNS!`;
      choices.innerHTML = `
      Você 🧍 x 🤖 Máquina<br>
      <span class="emoji-duelo">${GAME_EMOJIS[human]} x ${GAME_EMOJIS[machine]}</span>
      `;
      result.style.color = "#00782A";
      humanScore.innerHTML = totalScoreHuman;
    } else {
      totalScoreMachine++;
      result.innerHTML = `Você perdeu!`;
      choices.innerHTML = `
      Você 🧍 x 🤖 Máquina<br>
      <span class="emoji-duelo">${GAME_EMOJIS[human]} x ${GAME_EMOJIS[machine]}</span>
      `;
      result.style.color = "#780000";
  machineScore.innerHTML = totalScoreMachine;
    }

    result.classList.add("show"); // ativa animação
  },
    1000);
};