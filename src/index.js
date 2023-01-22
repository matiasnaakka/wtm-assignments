const maxValue = 100;
const minValue = 0;
const maxNumberOfTries = 10;
let executionTime;

//arvotaan random numero
const random = () =>
  Math.round(Math.random() * (maxValue - minValue)) + minValue;
let randomNumber = random();

//haetaan html elementit
const guesses = document.querySelector(".guesses");
const lastResult = document.querySelector(".lastResult");
const lowOrHi = document.querySelector(".lowOrHi");
const time = document.querySelector(".time");
const tries = document.querySelector(".tries");

const guessSubmit = document.querySelector(".guessSubmit");
const guessField = document.querySelector(".guessField");
const simulateBtn = document.querySelector(".startSimulate");
const inputValue = document.getElementById("#inputNumber");

let guessHistory = [];
let resetButton;

const start = Date.now();

const checkGuess = () => {
  const end = Date.now();

  const userGuess = Number(guessField.value);
  guessHistory.push(userGuess);
  guesses.textContent = `Previous guesses: ${guessHistory}`;

  if (userGuess === randomNumber) {
    lastResult.textContent = "Congratulations! You got it right!";
    lastResult.style.backgroundColor = "green";
    lowOrHi.textContent = "";
    time.textContent = ` It took you ${
      end - start
    } milliseconds to find the right number.`;
    tries.textContent = `You quessed ${guessHistory.length} times.`;
    setGameOver();
  } else if (guessHistory.length >= maxNumberOfTries) {
    lastResult.textContent = "!!!GAME OVER!!!";
    lowOrHi.textContent = "";
    setGameOver();
  } else {
    lastResult.textContent = "Wrong!";
    lastResult.style.backgroundColor = "red";
    if (userGuess < randomNumber) {
      lowOrHi.textContent = "Last guess was too low!";
    } else if (userGuess > randomNumber) {
      lowOrHi.textContent = "Last guess was too high!";
    }
  }

  guessField.focus();
};

guessSubmit.addEventListener("click", checkGuess);

const setGameOver = (end) => {
  guessField.disabled = true;
  guessSubmit.disabled = true;
  resetButton = document.createElement("button");
  resetButton.textContent = "Start new game";
  document.body.append(resetButton);
  resetButton.addEventListener("click", resetGame);
};

const resetGame = () => {
  guessCount = 1;

  const resetParas = document.querySelectorAll(".resultParas p");
  for (const resetPara of resetParas) {
    resetPara.textContent = "";
  }

  resetButton.parentNode.removeChild(resetButton);

  guessField.disabled = false;
  guessSubmit.disabled = false;
  guessField.value = "";
  guessField.focus();

  /*  randomNumber = Math.floor(Math.random() * maxValue) + minValue; */
};

const runSimulation = () => {
  let history = [];
  let min = minValue;
  let maxk = maxValue;

  const run = (min, max) => {
    if (history.length >= maxNumberOfTries) {
      return;
    }

    const guess = Math.round((max - min) / 2) + min;
    history.push(guess);

    if (guess === randomNumber) {
      return;
    }
    if (guess < randomNumber) {
      return run(guess, max);
    }
    return run(min, guess);
  };

  run(minValue, maxValue);
  return history;
};

const runSimulations = (times = 1) => {

  randomNumber = random();
  const history = runSimulation();
  let sum = history.reduce((total, guess) => total + guess);
  let average = sum / history.length;
  console.log(
    `Answer was '${randomNumber}. It took ${history.length} tries (${history} average number of total guess count ${average} )`
  );
};

simulateBtn.addEventListener("click", runSimulations);
