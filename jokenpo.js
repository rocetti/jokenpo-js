/*
I Kept the pseudocode here since this game is an exercise from the odin project course. 
###########
//The Main function is the one handling the loop
//Create a variable to store player Score
//Create a variable to store PC Score
//Create a variable to store player input
//Create a variable to store PC choice
//Game start message
//Ask for input
//Store it on the variable
//Lowercase all characters
//Check if its a valid input: r,p,s,rock,paper or scissors
//True> proceed; False> ask again
//Random roll 0~2
//if 0 = Rock; 1 = Paper; 2 = Scissors; Store result in variable
//Compare player input with PC
//Rock beat Scissors, that beats Paper, that beats Rock
//Store the victory point on its variable
//Print the winner and score
//Check if any of the scores are equal or bigger than 3
//True> print the victory or game over message; False> Return to Ask for Input
//Victory message or Game Over message
//Ask if player want to play again (y/n)
//Store input in player variable
//lowercase all characters
//check if its valid input
//if neither starts with y or n its considered invalid input
//True> proceed; False> ask again
//if input starts with y then startover the game
//if input starts with n then say goodbye
*/
main();
function main(){
    let playerScore = 0;
    let computerScore = 0;
    let playerInput;
    let computerChoice;
    alert("This game is played through console on your browser DevTools!");
    //Game Loop
    do {
        //Start Message
        console.log("JOKENPO!");
        console.log("You against the machine in this game for your soul!");
        console.log("Win 3 games and you're free.");
        displayScore(playerScore,computerScore);
        //Loop through rounds
        do {
            playerInput = askValidInput("choice");            
            computerChoice = randomChoice();

            let winner = compareChoices(playerInput,computerChoice);
            switch (winner) {
                case "Player":
                    ++playerScore;
                    break;
                case "Machine":
                    ++computerScore;
                    break;
                default:
                    break;
            }
            
            console.log("And the winner for this round was...");
            console.log(winner);
            displayScore(playerScore,computerScore);
            if (playerScore >=3 || computerScore >=3) {
                break;
            }            
        } while (true);

        if (playerScore >= 3 || computerScore >= 3) {
            let champion = playerScore > computerScore?  "Player" : "Machine"
            finishGame(champion);
            playerInput = askValidInput("replay");
        }
        if (playerInput === "y") {
            playerScore = 0;
            computerScore = 0;
            console.clear();
        } else {
            console.log("Ok! Bye");
            break;
        }
        
    } while (true);
}

function displayScore(playerScore,computerScore) {
    console.log("You won " + playerScore + " rounds");
    console.log("Computer won " + computerScore + " rounds");
}
//Ask player for input until its an valid text for the game state
function askValidInput(state){
    let inputIsValid = false;
    let newInput;
    do {        
        
        if (state === "choice") {
            newInput = window.prompt("Enter your weapon of choice: Rock, Paper or Scissors!");
    
            newInput = newInput.toLowerCase();
            switch (newInput) {
                case "r":                
                    inputIsValid = true;
                    console.log("You chose Rock.");
                    break;
                case "p":
                    inputIsValid = true;
                    console.log("You chose Paper.");
                    break;
                case "s":
                    inputIsValid = true;
                    console.log("You chose Scissors.");
                    break;
                case "rock":                
                    inputIsValid = true;
                    console.log("You chose Rock.");
                    break;
                case "paper":
                    inputIsValid = true;
                    console.log("You chose Paper.");
                    break;
                case "scissors":
                    inputIsValid = true;
                    console.log("You chose Scissors.");
                    break;
                default:
                    inputIsValid = false;
                    console.log("You inserted invalid text. Please enter a valid option.");
                    break;
            }                        
        } else if(state === "replay") {
            newInput = window.prompt("Do you wanna play again?");
    
            newInput = newInput.toLowerCase();
            newInput = newInput.charAt(0)
            switch (newInput) {
                case "y":
                    inputIsValid = true;
                    break;  
                case "n":
                    inputIsValid = true;
                    break;           
                default:
                    inputIsValid = false;
                    console.log("You inserted invalid text. Please enter a valid option.");
                    break;            
            }
        } 
    } while (!inputIsValid);
    inputIsValid = false;
    return newInput;
}

function randomChoice() {
    let randi = Math.floor((Math.random() * 2)+0.5);
    switch (randi) {
        case 0:
            console.log("Machine chose Rock.");
            return "rock";
        case 1:
            console.log("Machine chose Paper.");
            return "paper";
        case 2:
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
            return "It's a tie";
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

function finishGame(champs) {
    if (champs === "Player") {
        console.log("Player WINS");
        console.log("CONGRATS! Your soul is yours to keep!");
    } else {
        console.log("Machine WINS");
        console.log("GAME OVER! You'll feel your soul leaving your body slowly every day, but you can play again!");
    }
}