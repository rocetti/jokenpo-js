# jokenpo-js
A simple JavaScript game of Rock, Paper and Scissors.

## Understand the problem
I need to create a game of jokenpo that is player againts machine in a best of 5 rounds challenge.
## Break the problem
- A game consists in a loop where you get input from user and output a result from its actions.
- jokenpo is a game where each player choose secretly Rock, Paper or Scissors and play their hands simutaniously. Rock beats Scissors, that beats Paper, that beats Rock.
- in this case the player will input somehow one of the options and the PC will randomly choose between them too. Then we compare their "hands".
- player written input must be case sensitive.
- They will play a total of 5 rounds, meaning that the first of them to reach 3 victories is the winner.
- if the human player win, congrats him, if lose game over. Loop starts over again if player wants to keep playing.