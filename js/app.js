/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */

 // global variable to select start game button
 const startGame = document.querySelector('#btn__reset');
 const gameKeys = document.querySelector('#qwerty');
 const keyDownCheck = new RegExp(/[a-z]/);

 let newGame;
 

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