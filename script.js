function gameEnds() {
    rock.removeEventListener("click", game);
    paper.removeEventListener("click", game);
    scissors.removeEventListener("click", game);
    const restart=document.createElement("button");
    const container=document.querySelector(".space");
    restart.setAttribute("id", "restart");
    restart.addEventListener("click", restartGame);
    restart.textContent="RESTART";
    container.appendChild(restart);
    const scorep=document.querySelector(".playerWins");
    const scorec=document.querySelector(".computerWins");
    scorep.textContent=`You won ${gScorePlayer} games`;
    scorec.textContent=`Computer won ${gScoreComputer} games`;
}

function restartGame() {
    scorePlayer=0;
    scoreComputer=0;
    const button=document.querySelector("#restart");
    button.remove();
    rock.addEventListener("click", game);
    paper.addEventListener("click", game);
    scissors.addEventListener("click", game);
    const scorep=document.querySelector(".playerPoints");
    scorep.textContent=`Your points: 0`;
    const scorec=document.querySelector(".computerPoints");
    scorec.textContent=`Computer's points: 0`;
    answer1.textContent="";
    answer2.textContent="";
    playerChoiceOutput.textContent="";
    computerChoiceOutput.textContent="";
}

function playerWins(points) {
    const score=document.querySelector(".playerPoints");
    score.textContent=`Your points: ${++points}`;
    return points;
}

function computerWins(points) {
    const score=document.querySelector(".computerPoints");
    score.textContent=`Computer's points: ${++points}`;
    return points;
}

function getComputerChoice() {
    let choice=Math.random()*10;
    if (choice<3) choice="Rock";
    else if (choice<6) choice="Paper";
    else choice="Scissors";
    return choice;
}
function playRound(target) {
    computerChoice=getComputerChoice();
    playerChoice=getPlayerChoice(target);
    playerChoiceOutput.textContent=`You chose ${playerChoice}`;
    computerChoiceOutput.textContent=`Computer chose ${computerChoice}`;
    if (computerChoice===playerChoice) {
        answer1.textContent="It's a tie!"; answer2.textContent="You both chose "+ computerChoice;
    }
    else if ((computerChoice==="Rock" && playerChoice==="Paper")||
    (computerChoice==="Paper" && playerChoice==="Scissors")||
    (computerChoice==="Scissors" && playerChoice==="Rock")) {
        answer1.textContent="You win!"; answer2.textContent=playerChoice+" beats "+computerChoice;
        scorePlayer=playerWins(scorePlayer);
    }
    else if ((computerChoice==="Rock" && playerChoice==="Scissors")||
    (computerChoice==="Paper" && playerChoice==="Rock")||
    (computerChoice==="Scissors" && playerChoice==="Paper")) {
        answer1.textContent="You lose!"; answer2.textContent=computerChoice+" beats "+playerChoice;
        scoreComputer=computerWins(scoreComputer);
    }
}
function getPlayerChoice(a) {
    if (a.classList.value=="rock") return "Rock";
    if (a.classList.value=="paper") return "Paper";
    if (a.classList.value=="scissors") return "Scissors";
}

function game(e) {
    playRound(this);
    if (scorePlayer===5&&scorePlayer>scoreComputer) {
        answer1.textContent=`You won the game!`; answer2.textContent=`You have ${scorePlayer} while the computer's are ${scoreComputer}`;
        gScorePlayer++;
        gameEnds();
    }
    else if (scoreComputer===5&&scorePlayer<scoreComputer) {
        answer1.textContent=`You lost the game!`; answer2.textContent=`You have ${scorePlayer} points while the computer's are ${scoreComputer}`;
        gScoreComputer++;
        gameEnds();
    }
}
let scorePlayer=0, scoreComputer=0, gScorePlayer=0, gScoreComputer=0;
const rock=document.querySelector(".rock");
const paper=document.querySelector(".paper");
const scissors=document.querySelector(".scissors");
const credits=document.querySelector("a");
const logo=document.getElementById("gitLogo");
const playerChoiceOutput=document.getElementById("playerChoice");
const computerChoiceOutput=document.getElementById("computerChoice");
const answer1=document.getElementById("answer1");
const answer2=document.getElementById("answer2");
rock.addEventListener("click", game);
paper.addEventListener("click", game);
scissors.addEventListener("click", game);
credits.addEventListener("mouseover", () => {
    logo.classList.add("hover");
});
credits.addEventListener("mouseout", () => {
    logo.classList.remove("hover");
});
