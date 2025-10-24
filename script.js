let humanScore=0,computerScore=0;

function playRound(humanChoice,computerChoice){
    if(humanChoice==="Rock"&&computerChoice==="Paper"){
        console.log(`You Lose!\n\nComputer's choice: ${computerChoice} and Your choice: ${humanChoice}`)
    }else if(humanChoice==="Rock"&&computerChoice==="Scissor"){
        console.log(`You Win!\n\nComputer's choice: ${computerChoice} and Your choice: ${humanChoice}`)
    }else if(humanChoice==="Scissor"&&computerChoice==="Paper"){
        console.log(`You Win!\n\nComputer's choice: ${computerChoice} and Your choice: ${humanChoice}`)
    }else if(humanChoice==="Scissor"&&computerChoice==="Rock"){
        console.log(`You lose!\n\nComputer's choice: ${computerChoice} and Your choice: ${humanChoice}`)
    }else if(humanChoice==="Paper"&&computerChoice==="Rock"){
        console.log(`You Win!\n\nComputer's choice: ${computerChoice} and Your choice: ${humanChoice}`)
    }else if(humanChoice==="Paper"&&computerChoice==="Scissor"){
        console.log(`You lose!\n\nComputer's choice: ${computerChoice} and Your choice: ${humanChoice}`)
    }else {
        console.log(`It is a Tie! \n\nComputer's choice: ${computerChoice} and Your choice: ${humanChoice}`)
    }

}

function getComputerChoice(){
    let computerIndex= Math.floor(Math.random()*3)+1;
    switch(computerIndex){
        case 1:
            return "Rock";
        case 2:
            return "Paper";
        case 3:
            return "Scissor";
    }
}

function getHumanChoice(){
    let humanChoice= prompt("Enter your choice (Rock, Paper, Scissor")
    humanChoice=humanChoice.toLowerCase();
    switch(humanChoice){
        case "rock":
            return "Rock";
        case "paper":
            return "Paper";
        case "scissor":
            return "Scissor";
        default:
            return "not a valid input";

    }
}
playRound(getHumanChoice(),getComputerChoice());