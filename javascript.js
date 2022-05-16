let choices = ['rock', 'paper', 'scissors']
let playerScore = 0
let computerScore = 0

function computerPlay(){
    const index = Math.floor(Math.random()*3);
    return choices[index]
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

function game(){
    for(let i=0; i<5; i++){
        let playerChoice = prompt("Rock, Paper, Scissors?");
        let result = playRound(playerChoice, computerPlay());
        console.log(result)
    }
    console.log(`Player Score: ${playerScore}`)
    console.log(`Computer Score: ${computerScore}`)
}

game()

