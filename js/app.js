/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */

// Create a new instance of the Game class 
let newGame = new Game();

// Add a click event listener to the "Start Game" button which creates a new Game object and starts the game by calling the startGame() method.
$startGameBtn.click(function() {
    // console.log('start'); // Test to make sure it works. And it does. Because I am very smart.
    newGame.startGame();
});

// Add event listeners for each of the onscreen keyboard buttons so that clicking a button calls the handleInteraction() method on the Game object.
$qwerty.click(function(event) {
    newGame.handleInteraction(event.target);
});
