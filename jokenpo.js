/*
#################
# Jokenpo! v2.0 #
#################
*/
let playerScore = 0;
let machineScore = 0;
showPlayerChoice();

//Setup game screens
function clearGameScreen() {
    let gameScreen = document.getElementsByClassName("game-screen")[0];
    gameScreen.innerHTML = "";
}
function showPlayerChoice(){
    clearGameScreen()
    let gameScreen = document.getElementsByClassName("game-screen")[0];
    let titleDiv = document.createElement("div");
    let continueDiv = document.createElement("div");
    titleDiv.setAttribute("id","choice-title");
    continueDiv.setAttribute("id","choice-buttons");
    titleDiv.innerHTML = "<p>Choose your weapon:</p>";
    continueDiv.innerHTML = "<button id='rock-btn' value='rock' onClick='playRound(this.value)'><img src='./img/rock.png' alt='rock icon'></button><button id='paper-btn' value='paper' onClick='playRound(this.value)'><img src='./img/paper.png' alt='paper icon'></button><button id='scissors-btn' value='scissors' onClick='playRound(this.value)'><img src='./img/scissors.png' alt='scissors icon'></button>";

    gameScreen.appendChild(titleDiv);
    gameScreen.appendChild(continueDiv);
}

//Choice button plays a round
function playRound(btnvalue) {
    let playerChoice = btnvalue;
    let machineChoice = randomChoice();
    //Score Add
    let winner = compareChoices(playerChoice,machineChoice);
    showRoundResult(playerChoice,machineChoice,winner)
    
}

function showRoundResult(player,machine,winner) {
    switch (winner) {
        case "Player":
            ++playerScore;
            break;
        case "Machine":
            ++machineScore;
            break;
        default:
            break;
    }
    updateScoreScreen()
    clearGameScreen()
    let gameScreen = document.getElementsByClassName("game-screen")[0];
    let roundDiv = document.createElement("div");
    let textDiv = document.createElement("div");
    let continueDiv = document.createElement("div");
    roundDiv.setAttribute("id","round");
    textDiv.setAttribute("id","round-txt");
    continueDiv.setAttribute("id","continue");
    textDiv.innerHTML = `<p>Player chose ${player}.</p><p>Machine chose ${machine}.</p><p>${winner} won this round!</p>`;
    continueDiv.innerHTML = "<button id='continue-btn' onClick='checkGameOver()'>Continue</button>";
    
    roundDiv.appendChild(textDiv);
    roundDiv.appendChild(continueDiv);
    gameScreen.appendChild(roundDiv);
}

function checkGameOver() {
    if (playerScore >= 3 || machineScore >= 3) {
        let champion = playerScore > machineScore?  "Player" : "Machine";
        showGameOver(champion);
    } else{
        showPlayerChoice();
    }
}

function showGameOver(champion) {
    clearGameScreen()
    let gameScreen = document.getElementsByClassName("game-screen")[0];
    let gameOverDiv = document.createElement("div");
    let textDiv = document.createElement("div");
    let playDiv = document.createElement("div");
    gameOverDiv.setAttribute("id","game-over");
    textDiv.setAttribute("id","game-over-txt");
    playDiv.setAttribute("id","play");
    if (champion === "Player") {
        textDiv.innerHTML = "<h2>CONGRATULATIONS!</h2><p>You defeated your own machine now its emotionally destroyed so you prob gonna suffer some performance issues.</p>";
    } else {
        textDiv.innerHTML = "<h2>GAME OVER, BABY!</h2><p>Your machine was able to defeat you so now its going to behave as it please. Be careful! Machines tend to be sensitive and vengeful.</p>";
    }
    playDiv.innerHTML = "<button id='play-again' onClick='restartGame()'>Play Again!</button>";

    gameOverDiv.appendChild(textDiv);
    gameOverDiv.appendChild(playDiv);
    gameScreen.appendChild(gameOverDiv);
}

function restartGame() {
    playerScore = 0;
    machineScore = 0;
    updateScoreScreen();
    showPlayerChoice();
}

function updateScoreScreen() {
    let playerScoreDiv = document.getElementById("player-score")
    let machineScoreDiv = document.getElementById("machine-score")
    playerScoreDiv.getElementsByTagName("p")[0].innerText = `${playerScore}`
    machineScoreDiv.getElementsByTagName("p")[0].innerText = `${machineScore}`
}

//Machine choice with a theorical 33% chance for each
function randomChoice() {
    let randi = Math.floor((Math.random() * 100));
    switch (true) {
        case randi < 33:
            console.log("Machine chose Rock.");
            return "rock";
        case randi > 33 && randi < 66:
            console.log("Machine chose Paper.");
            return "paper";
        case randi > 66:
            console.log("Machine chose Scissors.");
            return "scissors";
        default:
            console.log("ERROR: Machine couldn't choose.");
            break;
    }
}

function compareChoices(playerInput,computerChoice) {
    playerInput = playerInput.charAt(0)
    computerChoice = computerChoice.charAt(0)
    switch (true) {
        case playerInput === computerChoice:
            return "No one";
        case playerInput === "r" && computerChoice === "s":
            return "Player";
        case playerInput === "p" && computerChoice === "r":
            return "Player";
        case playerInput === "s" && computerChoice === "p":
            return "Player";    
        default:
            return "Machine"; 
    }
}