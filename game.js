const selectionOptions = ['rock', 'paper', 'scissors']
let playerScore = 0;
let computerScore = 0;



let getComputerChoice = () => {
    //randomly select a number between 0-2
    let randomNumber = Math.random() * 3
    let randomNumberFloor = Math.floor(randomNumber)
    //look up and return the rock paper scissors vaue
    let computerSelection = selectionOptions[randomNumberFloor]
    return computerSelection
}

let getPlayerSelection = () => {
    let playerSelection = prompt('What is your selection? Please enter rock, paper, or scissors.')
    return playerSelection
}

let singleRound = (e) => {

    let computerSelection = getComputerChoice()
    // let formattedPlayerSelection = getPlayerSelection().toLowerCase();
    let formattedPlayerSelection = e.target.id

    if (formattedPlayerSelection != 'rock' && formattedPlayerSelection != 'paper' && formattedPlayerSelection != 'scissors') {
        console.log(`Please only select 'rock', 'paper', or 'scissors'.`)
        return false
    }


    if (computerSelection == 'rock') {
        if (formattedPlayerSelection == 'rock') {
            displayRoundWinner.textContent = `You both selected rock.  It is a tie`
            updateScore()
        } else if (formattedPlayerSelection == 'paper') {
            displayRoundWinner.textContent =  `You selected Paper and the computer selected rock.  Paper covers rock.  You win`
            playerScore++
            updateScore()
        } else {
            displayRoundWinner.textContent = `You selected scissors and the computer selected rock.  Rock smashes scissors.  Computer wins`
            computerScore++
            updateScore()
        }
    } else if (computerSelection == 'scissors') {
        if (formattedPlayerSelection == 'scissors') {
            displayRoundWinner.textContent = `You both selected scissors.  It is a tie`
            updateScore()
        } else if (formattedPlayerSelection == 'paper') {
            displayRoundWinner.textContent = `You selected Paper and the computer selected scissors.  Scissors cuts paper.  Computer wins`
            computerScore++
            updateScore()
        } else {
            displayRoundWinner.textContent = `You selected rock and the computer selected scissors.  Rock smashes scissors.  You win`
            playerScore++
        }
    } else {
        if (formattedPlayerSelection == 'paper') {
            displayRoundWinner.textContent = `You both selected paper.  It is a tie`
            updateScore()
        } else if (formattedPlayerSelection == 'scissors') {
            displayRoundWinner.textContent = `You selected Scissors and the computer selected paper.  Scissors cuts paper.  You win`
            playerScore++
            updateScore()
        } else {
            displayRoundWinner.textContent = `You selected rock and the computer selected paper.  Paper covers rock.  Computer wins`
            computerScore++
            updateScore()
            
        }
    }
}

let game = () => {

    let roundNumber = 0;
    let playerScore = 0;
    let computerScore = 0;


    console.log(gameRound)

    if (gameRound.slice(gameRound.length - 4) == ' win') {
        playerScore++
    } else if (gameRound.slice(gameRound.length - 4) == 'wins') {
        computerScore++
    }

    console.log(`Player: ${playerScore}, Computer: ${computerScore}`)
}


let scissorsBtn = document.querySelector('.scissors-btn')
let rockBtn = document.querySelector('.rock-btn')
let paperBtn = document.querySelector('.paper-btn')
let humanScoreDisplay = document.querySelector('.human-score')
let computerScoreDisplay = document.querySelector('.computer-score')
let displayRoundWinner = document.querySelector('.display-round-winner')


let updateScore = () => {
    humanScoreDisplay.textContent = `Human Score: ${playerScore}`
    computerScoreDisplay.textContent= `Computer Score: ${computerScore}`
}


scissorsBtn.addEventListener('click', singleRound)
rockBtn.addEventListener('click',singleRound)
paperBtn.addEventListener('click',singleRound)


