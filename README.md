# jokenpo-js
A simple JavaScript game of Rock, Paper and Scissors.

# Thought Process
## Understand the problem
I need to create a game of jokenpo that is player againts machine in a best of 5 rounds challenge.
## Break the problem
- A game consists in a loop where you get input from user and output a result from its actions.
- jokenpo is a game where each player choose secretly Rock, Paper or Scissors and play their hands simutaniously. Rock beats Scissors, that beats Paper, that beats Rock.
- in this case the player will input somehow one of the options and the PC will randomly choose between them too. Then we compare their "hands".
- player written input must be case sensitive.
- They will play a total of 5 rounds, meaning that the first of them to reach 3 victories is the winner.
- if the human player win, congrats him, if lose game over. Loop starts over again if player wants to keep playing.
## Pseudocode
This is the first version pseudocode
> - The Main function is the one handling the loop
> - Create a variable to store player Score
> - Create a variable to store PC Score
> - Create a variable to store player input
> - Create a variable to store PC choice
> - Game start message
> - Ask for input (Buttons)
> - Store it on the variable
> - Lowercase all characters 
> - Check if its a valid input: r,p,s,rock,paper or scissors 
> - True> proceed; False> ask again
> - Random roll 0~2
> - if 0 = Rock; 1 = Paper; 2 = Scissors; Store result in variable
> - Compare player input with PC
> - Rock beat Scissors, that beats Paper, that beats Rock
> - Store the victory point on its variable
> - Print the winner and score
> - Check if any of the scores are equal or bigger than 3
> - True> print the victory or game over message; False> Return to Ask for Input
> - Victory message or Game Over message
> - Ask if player want to play again (y/n) (Button)
> - Store input in player variable 
> - lowercase all characters
> - check if its valid input
> - if neither starts with y or n its considered invalid input
> - True> proceed; False> ask again 
> - if input starts with y then startover the game
> - if input starts with n then say goodbye

This is the new version (the main logic still follows the old one so its focused on game loop that changed since I added UI)
> - This new flow is an loop that moves foward with each button click.
> - show choice screen (buttons)
> - when player click one button store its value as its choice
> - run the machine choice
> - compare choices
> - add scores
> - when player click on the continue button proceed
> - check if any score is equal to 3
> - if true Game Over
> - if false go to next round
> - On Gameover: if player won show one screen. Else show the other.
> - On Gameover: when the player click on play again the game starts over