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
    } else if (playerSelection === 'paper' && computerSelection === 'rock'){
        console.log('Paper wraps Rock, Player wins');
    } else if (playerSelection === 'scissors' && computerSelection === 'paper'){
        console.log('Scissors cut Paper, Player Wins');
    } else console.log('Computer wins!');

}
