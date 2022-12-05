function gameEnds() {
    rock.removeEventListener("click", game);
    paper.removeEventListener("click", game);
    scissors.removeEventListener("click", game);
    const restart=document.createElement("button");
    const container=document.querySelector(".space");
    restart.setAttribute("style", "height: 7vh; width: 400px; font-size: 3vh; background-color: #3882F6; color: #F9FAF8; border: 2px solid black;");
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
    ending=document.querySelector(".ending");
    ending.textContent="";
}

function playerWins(points) {
    const score=document.querySelector(".playerPoints");
    score.textContent=`Your points: ${++points}`;
    return points;
}

function botWins(points) {
    const score=document.querySelector(".computerPoints");
    score.textContent=`Computer's points: ${++points}`;
    return points;
}

function getComputerChoice() {
    let choice=Math.random()*10;
    if (choice<3) choice="rock";
    else if (choice<6) choice="paper";
    else choice="scissors";
    return choice;
}
function playRound(target) {
    ending=document.querySelector(".ending");
    computerChoice=getComputerChoice();
    playerChoice=getPlayerChoice(target);
    if (computerChoice===playerChoice) {
        ending.textContent="It's a tie! You both chose "+ computerChoice; 
    }
    else if ((computerChoice==="rock" && playerChoice==="paper")||
    (computerChoice==="paper" && playerChoice==="scissors")||
    (computerChoice==="scissors" && playerChoice==="rock")) {
        ending.textContent="You win! "+playerChoice+" beats "+computerChoice;
        scorePlayer=playerWins(scorePlayer);
    }
    else if ((computerChoice==="rock" && playerChoice==="scissors")||
    (computerChoice==="paper" && playerChoice==="rock")||
    (computerChoice==="scissors" && playerChoice==="paper")) {
        ending.textContent="You lose! "+computerChoice+" beats "+playerChoice;
        scoreComputer=botWins(scoreComputer);
    }
}
function getPlayerChoice(a) {
    if (a.classList.value=="rock") return "rock";
    if (a.classList.value=="paper") return "paper";
    if (a.classList.value=="scissors") return "scissors";
}

function game(e) {
    const ending=document.querySelector(".ending");
    playRound(this);
    if (scorePlayer===5&&scorePlayer>scoreComputer) {
        ending.textContent=`You won the game! You have ${scorePlayer} while the computer's are ${scoreComputer}`;
        gScorePlayer++;
        gameEnds();
    }
    else if (scoreComputer===5&&scorePlayer<scoreComputer) {
        ending.textContent=`You lost the game! You have ${scorePlayer} points while the computer's are ${scoreComputer}`;
        gScoreComputer++;
        gameEnds();
    }
}
let scorePlayer=0, scoreComputer=0, gScorePlayer=0, gScoreComputer=0;
const rock=document.querySelector(".rock");
const paper=document.querySelector(".paper");
const scissors=document.querySelector(".scissors");
rock.addEventListener("click", game);
paper.addEventListener("click", game);
scissors.addEventListener("click", game);
