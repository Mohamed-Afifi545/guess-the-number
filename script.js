'use strict';

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;

let tries = [];

let scored = document.querySelector('.score');
let highScored = document.querySelector('.highscore');
let guess = document.querySelector('.guess');
let message = document.querySelector('.message');
let messageArr = document.querySelector('.message-arr');
let check = document.querySelector('.check');
let again = document.querySelector('.again');
let body = document.querySelector('body');
let number = document.querySelector('.number');

guess.addEventListener('keypress', function (event) {
  if (event.key === 'Enter') {
    event.preventDefault();
    check.click();
    guess.value = '';
  }
});

function reset() {
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  message.textContent = 'Start guessing...';
  messageArr.textContent = '';

  number.textContent = '?';
  guess.value = '';
  score = 20;
  scored.textContent = 20;
  tries = [];
  body.style.backgroundColor = '#222';
  number.style.width = '15rem';
}

check.addEventListener('click', function () {
  const guessed = Number(guess.value);

  if (!guessed) {
    message.textContent = '🤦 No number!';
  } else if (guessed > secretNumber || guessed < secretNumber) {
    message.textContent =
      guessed > secretNumber ? `is WRONG go lower!` : `is WRONG go higher!`;
    score--;
    scored.textContent = score;
    tries.push(guessed);
    messageArr.textContent = `{${tries.join(' , ')}}`;
  } else {
    message.textContent = 'Bingo!...correct number';
    body.style.backgroundColor = '#60b347';
    number.style.width = '30rem';
    number.textContent = secretNumber;
    highScored.textContent = score;

    setTimeout(() => {
      reset();
    }, 2000);

    if (score > highScore) {
      highScore = score;
      highScored.textContent = highScore;
    } else {
      highScored.textContent = highScore;
    }
  }

  if (scored.textContent <= 0) {
    message.textContent = 'Game over!';
    body.style.backgroundColor = '#d01c1c';
    scored.textContent = 0;
    number.textContent = secretNumber;
    number.style.width = '30rem';
    messageArr.textContent = '';

    setTimeout(() => {
      reset();
    }, 2000);
  }
});

again.addEventListener('click', function () {
  reset();
});
