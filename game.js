const selectionOptions = ['rock','paper','scissors']



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

let singleRound = () => {
    let computerSelection = getComputerChoice()
    let formattedPlayerSelection = getPlayerSelection().toLowerCase();

    if (formattedPlayerSelection != 'rock' && formattedPlayerSelection != 'paper' && formattedPlayerSelection != 'scissors') {
        console.log(`Please only select 'rock', 'paper', or 'scissors'.`)
        return false
    }

    
    if (computerSelection == 'rock') {
        if (formattedPlayerSelection == 'rock') {
            return `You both selected rock.  It is a tie`
        } else if (formattedPlayerSelection == 'paper') {
            return `You selected Paper and the computer selected rock.  Paper covers rock.  You win`
        } else {
            return `You selected scissors and the computer selected rock.  Rock smashes scissors.  Computer wins`
        } 
    } else if (computerSelection == 'scissors') {
        if (formattedPlayerSelection == 'scissors') {
            return `You both selected scissors.  It is a tie`
        } else if (formattedPlayerSelection == 'paper') {
            return `You selected Paper and the computer selected scissors.  Scissors cuts paper.  Computer wins`
        } else {
            return `You selected rock and the computer selected scissors.  Rock smashes scissors.  You win`
        }
    } else {
        if (formattedPlayerSelection == 'paper') {
            return `You both selected paper.  It is a tie`
        } else if (formattedPlayerSelection == 'scissors') {
            return `You selected Scissors and the computer selected paper.  Scissors cuts paper.  You win`
        } else {
            return `You selected rock and the computer selected paper.  Paper covers rock.  Computer wins`
    }
    }
}

let game = () => {

    let roundNumber = 0;
    let playerScore = 0;
    let computerScore = 0;
    while (roundNumber < 5) {
        let gameRound = singleRound()
        if (gameRound == false) {
            continue
        }
        console.log(gameRound)

        if (gameRound.slice(gameRound.length-4) == ' win') {
            playerScore++
        } else if (gameRound.slice(gameRound.length-4) == 'wins' ) {
            computerScore++
        }
        roundNumber++



    }
    console.log(`Player: ${playerScore}, Computer: ${computerScore}`)

}