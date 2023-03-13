'use strict';

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;
let displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

document.querySelector('.check').addEventListener('click', function () {
  let guess = Number(document.querySelector('.guess').value);

  //To check if guess input box is empty
  if (!guess) {
    displayMessage('⛔ No number');

    //To check if guess is equal to secret number
  } else if (guess === secretNumber) {
    displayMessage('👏 Correct Number');
    document.querySelector('.number').textContent = secretNumber;
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';

    //Checking for highscore
    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = score;
    } else {
      document.querySelector('.highscore').textContent = highscore;
    }

    //Checking if guess is not equal to secret number and number of times played (score), if you have lost the game
  } else if (guess !== secretNumber && score > 1) {
    document.querySelector('.message').textContent =
      guess > secretNumber ? '💹 Too high' : '📉 Too low';
    score--;
    document.querySelector('.score').innerHTML = score;
  } else {
    displayMessage('💥 You lost the game!');
    document.querySelector('.score').textContent = 20;
  }
});

// The reset function which is the "Again" button, which resets everything except the highscore
document.querySelector('.again').addEventListener('click', function () {
  score = '20';
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector('body').style.backgroundColor = '#333';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
  displayMessage('Start guessing...');
});
