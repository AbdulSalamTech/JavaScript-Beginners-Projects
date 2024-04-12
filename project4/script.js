let randomNum = Math.floor((Math.random() * 100)  + 1);
console.log(randomNum);

const submit = document.querySelector("#submit");
const userInput = document.querySelector("#user-guess");
const userPreviousGuesses = document.querySelector(".guesses");
const gameResult = document.querySelector(".last-result");
const lowOrHigh = document.querySelector(".low-or-high");
const startOver = document.querySelector("#result");
const checkNum = document.querySelector(".check-num");
const para = document.createElement("p");


let prevGuess = [];
let userGuessNo = 9;
let playGame = true;




if (playGame) {
  submit.addEventListener("click", (event) => {
    event.preventDefault();
    const userValue = parseInt(userInput.value);
    validGuess(userValue);
  });
}

function validGuess(guess) {
  if (guess < 1) {
    checkNum.innerText = "Please enter a number greater than 1";
  } else if (isNaN(guess)) {
    checkNum.innerText = "Please enter a valid number";
  } else if (guess > 100) {
    checkNum.innerText = "Please enter a number less than 100";
  } else {
    prevGuess.push(guess);
    if (userGuessNo < -1) {
      cleaningGuess(guess);
      displayMessage(`Game is over random number was ${randomNum}`);
      endGame();
    } else {
      cleaningGuess(guess);
      checkGuess(guess);
      checkNum.innerHTML = "";
    }
  }
}

function checkGuess(guess) {
  if (guess === randomNum) {
    displayMessage("You guessed it right you have won");
    endGame();
  } else if (guess < randomNum) {
    displayMessage("Your number is low than random number");
  } else if (guess > randomNum) {
    displayMessage("Your number is high than random number");
  }
}

function cleaningGuess(guess) {
  userInput.value = "";
  userPreviousGuesses.innerHTML += `${guess}, `;
  gameResult.innerHTML = `${userGuessNo}`;
  userGuessNo--;
}

function displayMessage(message) {
  lowOrHigh.innerHTML = `<h2>${message}</h2>`;
}

function endGame() {
  userInput.value = "";
  userInput.setAttribute("disabled", "");
  playGame = false;
  para.classList.add("button");
  para.innerHTML = "<h3>Start new game</h3>";
  startOver.appendChild(para);
  newGame();
}

function newGame() {
  const newButton = document.querySelector(".button");
  newButton.addEventListener("click", function (event) {
    randomNum = Math.floor((Math.random() * 100) + 1);
    prevGuess = [];
    userGuessNo = 10;
    userPreviousGuesses.innerText = "";
    gameResult.innerHTML = `${userGuessNo}`;
    userInput.removeAttribute("disabled");
    startOver.removeChild(para);
    lowOrHigh.innerHTML = "";
    playGame = true;
    userGuessNo--;
  });
}
