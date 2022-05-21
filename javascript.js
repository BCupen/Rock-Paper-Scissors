let choices = ['rock', 'paper', 'scissors']
let playerScore = 0
let computerScore = 0

//get all options 
const choiceDivs = document.querySelectorAll('.element');
const message = document.querySelector('#message-box');
const playerDiv = document.querySelector('.player');
const cpuDiv = document.querySelector('.cpu');

//add event listener
choiceDivs.forEach(choice => choice.addEventListener('click', function(e){
    if(playerScore >= 5 || computerScore >= 5){
        return;
    }
        
    const p = e.currentTarget.querySelector('p');
    const result = playRound(p.textContent, computerPlay());
    message.textContent = result; //display message
    //update scores
    playerDiv.textContent = playerScore;
    cpuDiv.textContent = computerScore;
    if(playerScore >= 5){
        message.textContent = 'PLAYER WINS';
    }else if(computerScore >= 5){
        message.textContent = 'COMPUTER WINS';
    }
}));



function computerPlay(){
    const index = Math.floor(Math.random()*3);
    return choices[index];
}

function playRound(playerChoice, computerChoice){
    playerChoice=playerChoice.toLowerCase()

    if(playerChoice == 'rock'){
        if(computerChoice == 'paper'){
            computerScore++
            return `You Lose! Paper beats Rock.`
        }else if(computerChoice == 'rock'){
            return `Draw! You both chose Rock`
        }else{
            playerScore++
            return 'You Win! Rock beats Scissors'
        }  
    }else if(playerChoice == 'paper'){
        if(computerChoice == 'scissors'){
            computerScore++
            return `You Lose! Scissors beats Paper.`
        }else if(computerChoice == 'paper'){
            return `Draw! You both chose Paper`
        }else{
            playerScore++
            return 'You Win! Paper beats Rock'
        }
    }else if(playerChoice == 'scissors'){
        if(computerChoice == 'rock'){
            computerScore++
            return `You Lose! Rock beats Scissors.`
        }else if(computerChoice == 'scissors'){
            return `Draw! You both chose Scissors`
        }else{
            playerScore++
            return 'You Win! Scissors beats Paper'
        }
    }   
}
