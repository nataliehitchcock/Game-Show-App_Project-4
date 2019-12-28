/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */

 // Create a new instance of the Game class 
let newGame = new Game();

// Add click event listener to the "Start Game" button which creates a new Game and starts the game by calling the startGame() method
$startGameBtn.click(function() {
    newGame.startGame();
});

// Add event listeners for each of the onscreen keyboard buttons so that clicking a button calls the handleInteraction() method on the Game object
$qwerty.click(function(event) {
newGame.handleInteraction(event.target);
});    