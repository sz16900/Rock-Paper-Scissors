let hand = ['rock', 'paper', 'scissors'];
let score = 0;
let compScore = 0;
let round = 0;

const buttons = document.querySelectorAll('button');
buttons.forEach((button) => {
    button.addEventListener('click', (e) => {
        if (round === 5) {
            if (score > compScore) {
                document.getElementById('final-result').innerHTML = " ";
                document.getElementById('final-result').innerHTML = "You Win!"
            } else if (compScore < score) {
                document.getElementById('final-result').innerHTML = " ";
                document.getElementById('final-result').innerHTML = "Computer Wins!"
            } else {
                document.getElementById('final-result').innerHTML = " ";
                document.getElementById('final-result').innerHTML = "It's a Tie!"
            }
            return;
        } else {
            round++;
            document.getElementById('result').innerHTML = " ";
            document.getElementById('myScore').innerHTML = " ";
            document.getElementById('compScore').innerHTML = " ";
            let result = playRound(button.id);
            document.getElementById('result').innerHTML = "Result: " + result;
            document.getElementById('myScore').innerHTML = "Your Score: " + score;
            document.getElementById('compScore').innerHTML = "Computer Score: " + compScore;
        }
    });
});

function playRound(selection) {
    let computerSelection = computerPlay();
    let playerSelection = selection;

    function computerPlay() {
        let x = Math.floor(Math.random() * 3);
        return hand[x];
    }

    if (playerSelection === computerSelection) {
        console.log("Your score is " + score);
        console.log("The computer score is " + compScore);
        return "Tie";
    }
    if (playerSelection === 'rock') {
        if (computerSelection === 'scissors') {
            console.log("Your Score is " + (score += 1));
            console.log("The computer score is " + compScore);

            return 'You Win'
        } else {
            console.log("Your score is " + score);
            console.log("The computer score is " + (compScore += 1));
            return 'You lose.'
        }
    }
    if (playerSelection === "paper") {
        if (computerSelection === "rock") {
            console.log("Your Score is " + (score += 1));
            console.log("The computer score is " + compScore);
            return "You win!";
        } else {
            console.log("Your score is " + score);
            console.log("The computer score is " + (compScore += 1));
            return "You lose";
        }
    }
    if (playerSelection === "scissors") {
        if (computerSelection === "rock") {
            console.log("Your score is " + score);
            console.log("The computer score is " + (compScore += 1));
            return "You lose";
        } else {
            console.log("Your Score is " + (score += 1));
            console.log("The computer score is " + compScore);
            return "You win!";
        }
    }
};
