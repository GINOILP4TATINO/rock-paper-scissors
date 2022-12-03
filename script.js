function getComputerChoice() {
    let choice=Math.random()*10;
    if (choice<3) choice="rock";
    else if (choice<6) choice="paper";
    else choice="scissors";
    return choice;
}
function playRound(computerChoice, playerChoice) {
    if (computerChoice===playerChoice) return ("It's a tie! You both chose "+ computerChoice);
    else if ((computerChoice==="rock" && playerChoice==="paper")||
    (computerChoice==="paper" && playerChoice==="scissors")||
    (computerChoice==="scissors" && playerChoice==="rock")) return ("You win! "+playerChoice+" beats "+computerChoice);
    else if ((computerChoice==="rock" && playerChoice==="scissors")||
    (computerChoice==="paper" && playerChoice==="rock")||
    (computerChoice==="scissors" && playerChoice==="paper")) return ("You lose! "+computerChoice+" beats "+playerChoice);
}
function getPlayerChoice() {
    let choice=prompt("Enter your choice");
    choice=choice.toLowerCase();
    if (choice!=="rock"&&choice!=="paper"&&choice!=="scissors") return getPlayerChoice();
    else return choice;
}
function game() {
    let scoreComputer=0;
    let scorePlayer=0;
    let message, scoreCheck;
    for (let i=0; i<5; i++) {
        message=playRound(getComputerChoice(), getPlayerChoice());
        console.log(message);
        scoreCheck=message.charAt(4);
        if (scoreCheck==="l") scoreComputer++;
        else if (scoreCheck==="w") scorePlayer++;
        else if (scoreCheck===" ") {scorePlayer++; scoreComputer++;}
    }
    if (scorePlayer>scoreComputer) console.log("You win! You have "+scorePlayer+" points while computer's are "+scoreComputer);
    else if (scorePlayer<scoreComputer) console.log("You lose! You have "+scorePlayer+" points while computer's are "+scoreComputer);
    else if (scorePlayer===scoreComputer) console.log("It's a tie! You both have "+scorePlayer+" points");
}
game();