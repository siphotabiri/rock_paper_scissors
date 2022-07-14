function computerPlay(){
        let plays = ['Rock', 'Paper', 'Scissors'];
        return plays[Math.floor(Math.random() * plays.length)];
}

function playRound(playerSelection, computerSelection){
        playerSelection =  prompt('Rock, Paper or Scissors?');
        computerSelection = computerPlay();
        playerSelection = playerSelection.toLowerCase();
        computerSelection = computerSelection.toLowerCase();
        console.log('Player Selection: ' + playerSelection);
        console.log('Computer Selection: ' + computerSelection);

        if (playerSelection === computerSelection){
        console.log ('It is a Draw!');
        } else if (playerSelection === 'rock' && computerSelection === 'scissors'){
        console.log('Rock breaks scissors, Player wins');
        ++playerScore;
        } else if (playerSelection === 'paper' && computerSelection === 'rock'){
        console.log('Paper wraps Rock, Player wins');
        ++playerScore;
        } else if (playerSelection === 'scissors' && computerSelection === 'paper'){
        console.log('Scissors cut Paper, Player Wins');
        ++playerScore;
        } else if (computerSelection === 'rock' && playerSelection === 'scissors'){
        console.log('Rock breaks scissors, Computer wins');
        ++computerScore;
        } else if (computerSelection === 'paper' && playerSelection === 'rock'){
        console.log('Paper wraps Rock, Computer wins');
        ++computerScore;
        } else if (computerSelection === 'scissors' && playerSelection === 'paper'){
        console.log('Scissors cut paper, Computer wins');
        ++computerScore;
        }
}

function game (){
        for (let i = 0; i < 5; i++){
        playRound();
        console.log('Player Wins = ' + playerScore);
        console.log('Computer Wins = ' + computerScore);
        }
        computerScore = 0;
        playerScore = 0;
}

let playerScore = 0;
let computerScore = 0;
