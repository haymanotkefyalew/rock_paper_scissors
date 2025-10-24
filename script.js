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
console.log(getHumanChoice());