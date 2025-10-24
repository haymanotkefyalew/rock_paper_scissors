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
console.log(getComputerChoice());