'use strict';

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

document.querySelector('.number').textContent = secretNumber;


document.querySelector('.check').addEventListener
('click', function() {
    const guess = Number(document.querySelector('.guess').value);
    console.log(guess, typeof guess);

    // Wenn es keinen Input gibt
    if (!guess) {
        document.querySelector('.message').textContent = 'Keine Nummer eingegeben!';

        // Wenn der Spieler gewinnt
    } else if (guess === secretNumber) {
        document.querySelector('.message').textContent = 'Korrekte Zahl!';
        document.querySelector('body').style.backgroundColor = '#60b347';

        if (score > highscore) {
            highscore = score;
            document.querySelector('.highscore').textContent = highscore;
        }

        // Wenn die Zahl höher als die geheime Zahl ist
    } else if (guess > secretNumber) {
        if (score > 1) {
            document.querySelector('.message').textContent = 'Zu hoch!';
            score--;
            document.querySelector('.score').textContent = score;
        } else {
            document.querySelector('.message').textContent = 'Du hast das Spiel verloren!';
            document.querySelector('.score').textContent = 0;
        }

        // Wenn die Zahl neidriger als die geheime Zahl ist
    } else if (guess < secretNumber) {
        if (score > 1) {
            document.querySelector('.message').textContent = 'Zu niedrig!';
            score--;
            document.querySelector('.score').textContent = score;
        } else {
            document.querySelector('.message').textContent = 'Du hast das Spiel verloren!';
            document.querySelector('.score').textContent = 0;
        }
    }
});

document.querySelector('.again').addEventListener
('click', function() {
    score = 20;
    let secretNumber = Math.trunc(Math.random() * 20) + 1;

    document.querySelector('.message').textContent = 'Start guessing...';
    document.querySelector('.score').textContent = score;
    document.querySelector('.number').textContent = '?';
    document.querySelector('.guess').value = '';
    document.querySelector('body').style.backgroundColor = '#222';
});