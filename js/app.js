/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */

 // These variables create a qwerty keyboard and a reset button for when the game starts. There's also a regex to populate all of the letters.
 const startGame = document.querySelector('#btn__reset');
 const gameKeys = document.querySelector('#qwerty');
 const keyDownCheck = new RegExp(/[a-z]/);

 let newGame;
 
//Event listener to start the game every time a new game begins, and all the letters have been made lowercase.
 startGame.addEventListener('click', () => {
     newGame = new Game();
     newGame.startGame();
     window.addEventListener('keydown', (e) => {
         if (keyDownCheck.test(e.key.toLowerCase()) && e.key.length === 1) {
             newGame.handleInteraction(e.key.toLowerCase());
         }
     });
 });
 
 gameKeys.addEventListener('click', (e) => {
     if (e.target.tagName === 'BUTTON') {
         newGame.handleInteraction(e.target.textContent);
     }
 });