'use strict';

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

console.log(secretNumber);

const displayMessage = function(message) {
    document.querySelector('.message').textContent = message;
}

document.querySelector('.number').textContent = '?';


document.querySelector('.check').addEventListener
('click', function() {
    const guess = Number(document.querySelector('.guess').value);
    console.log(guess, typeof guess);

    // Wenn es keinen Input gibt
    if (!guess) {
        displayMessage('Keine Zahl eingegeben!')
        // Wenn der Spieler gewinnt
    } else if (guess === secretNumber) {
        displayMessage('Zahl gefunden!')
        document.querySelector('.number').textContent = secretNumber;


        document.querySelector('body').style.backgroundColor = '#60b347';

        if (score > highscore) {
            highscore = score;
            document.querySelector('.highscore').textContent = highscore;
        }
    // When guess number is wrong
    } else if (guess !== secretNumber) {
        if (score > 1) {
            displayMessage(guess > secretNumber ? 'Zu hoch!' : 'Zu niedrig!')
            score--;
            document.querySelector('.score').textContent = score;
        } else {
            displayMessage('Du hast das Spiel verloren!');
            document.querySelector('.score').textContent = 0;
            document.querySelector('body').style.backgroundColor = '#D2042D';

        }
    }
});

document.querySelector('.again').addEventListener
('click', function() {
    score = 20;
    secretNumber = Math.trunc(Math.random() * 20) + 1;
    console.log('Nach erneutem Spielen die gesuchte Zahl: ' + secretNumber);

    displayMessage('Start guessing...');
    document.querySelector('.score').textContent = score;
    document.querySelector('.number').textContent = '?';
    document.querySelector('.guess').value = '';
    document.querySelector('body').style.backgroundColor = '#222';
});