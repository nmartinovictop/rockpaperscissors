function getComputerChoice() {
    let selection = Math.floor(Math.random() * (3 - 0) + 0);
    let options = {0: 'rock',1:'scissors',2:'paper'};
    return options[selection];
}

function singleRound(playerSelection,computerSelection) {
    let lowerPlayerSelection = playerSelection.toLowerCase()
    if (lowerPlayerSelection === 'rock') {
        if (computerSelection === 'rock') {
            return 'draw'
        } else if (computerSelection === 'scissors') {
            return 'player win'
        } else {
            return 'computer win'
        }
    } else if (lowerPlayerSelection == 'scissors') {
        if (computerSelection === 'rock') {
            return 'computer win'
        } else if (computerSelection === 'scissors') {
            return 'draw'
        } else {
            return 'player win'
        }
    } else if (lowerPlayerSelection == 'paper') {
        if (computerSelection === 'rock') {
            return 'player win'
        } else if (computerSelection === 'scissors') {
            return 'computer win'
        } else {
            return 'draw'
        }
    } else {
        return 'error'
    }

}

function getUserSelection() {
    let selection = prompt("Select Rock, Paper, or Scissors")
    while (selection !== 'Rock' && selection !== 'Paper' && selection !== 'Scissors') {
        alert("Enter the selection correctly")
        selection = prompt("Select Rock, Paper, or Scissors")
    }
    return selection

}

function game() {
    let counter = 0
    let computerScore = 0;
    let userScore= 0;
    while (counter < 5) {
        let playerChoice = getUserSelection()
        let computerChoice = getComputerChoice()
        let winner = singleRound(playerChoice, computerChoice)
        if (winner != 'draw') {
            if (winner == 'player win') {
                console.log(`The Player wins.  ${playerChoice} beats ${computerChoice}`)
                userScore++
            } else {
                console.log(`The Computer wins.  ${playerChoice} loses to ${computerChoice}`)
                computerScore ++
            }
        } else {
            console.log(`This round is a draw.  Both players selected ${computerChoice}`)
        }
        counter++
    }

    return `the final score was computer: ${computerScore}, human: ${userScore}`
}