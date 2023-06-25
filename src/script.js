'use strict';

let number = generateNumber();
let score = 50;
let highScore = 0;

// elements
const { body } = document;
const numberElement = document.querySelector('.number');
const numberField = document.querySelector('[name=number]');
const checkButton = document.querySelector('.button-check');
const message = document.querySelector('.message');
const scoreElement = document.querySelector('.score');
const highScoreElement = document.querySelector('.high-score');
const againButton = document.querySelector('.button-again');

function generateNumber() {
  return Math.trunc(Math.random() * 50) + 1;
}

function checkNumber() {
  const value = Number(numberField.value);

  if (value === number) {
    // win
    numberElement.textContent = value;
    message.textContent = '🏆 You win!';

    if (score > highScore) {
      highScore = score;
      highScoreElement.textContent = highScore;
    }

    disableElement(checkButton);
    disableElement(numberField);

    body.style.backgroundColor = '#b6f897';
    numberElement.style.width = '25rem';
  } else if (value > number) {
    // too high
    score--;
    scoreElement.textContent = score;

    if (score) {
      message.textContent = '↗️ Too high';
    } else {
      message.textContent = '🤷‍ You lose ...';
      disableElement(checkButton);
      disableElement(numberField);
      body.style.backgroundColor = '#fb5353';
    }
  } else if (value < number) {
    // too low
    score--;
    scoreElement.textContent = score;

    if (score) {
      message.textContent = '↘️ Too low';
    } else {
      message.textContent = '🤷‍ You lose ...';
      disableElement(checkButton);
      disableElement(numberField);
      body.style.backgroundColor = '#fb5353';
    }
  }
}

function disableElement(element, value = true) {
  element.disabled = value;
}

function resetGame() {
  number = generateNumber();
  score = 50;

  numberElement.textContent = '?';
  numberField.value = '';
  message.textContent = '🤔 Start guessing...';
  scoreElement.textContent = score;

  disableElement(checkButton, false);
  disableElement(numberField, false);

  body.style.backgroundColor = '#fff';
  numberElement.style.width = '15rem';
}

checkButton.addEventListener('click', checkNumber);
againButton.addEventListener('click', resetGame);
