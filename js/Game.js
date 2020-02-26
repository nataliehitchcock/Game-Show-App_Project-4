/* Treehouse FSJS Techdegree - Natalie Hitchcock
 * Project 4 - OOP Game App
 * Game.js */

   // Variables
let letterCheck = this.phrase;
const $startGameBtn = $('#btn__reset');
const $overlay = $('#overlay');
const $qwerty = $('#qwerty button');
let $supermario = $('#supermario');
let $gameOverMessage = $('#game-over-message');
let $header = $('.header');
let $header2 = $('.header2');

class Game {
  constructor(){
      this.missed = 0;
      this.phrases = [];
      this.activePhrase = null;
  }
  startGame(){
      const overlay = document.querySelector('#overlay');

     // Game Phrases
      const gamePhrases = ['Mario','Princess Peach','Yoshi','Bowser','Luigi'];
      overlay.style.display = 'none';
      gamePhrases.forEach(phrase => this.phrases.push(new Phrase(phrase)));
      // Call getRandomPhrase method & set active phrase value
      this.activePhrase = this.getRandomPhrase(); 
      this.activePhrase.addPhraseToDisplay(this.activePhrase);
  }
  getRandomPhrase(){
      // Generates a random number 0-4
      const randomNumber = Math.floor(Math.random() * 4)
      return this.phrases[randomNumber];
  }
  handleInteraction(e){
      const overlay = document.querySelector('#overlay').hasAttribute('style');

      // Get the active phrase
      const activePhrase = this.activePhrase.phrase;
      const letterChecker = this.activePhrase.checkLetter(e, activePhrase);
      Array.from(document.querySelectorAll('.keyrow > .key'))
          .forEach(key => {
              // Check letter for a match
              if (letterChecker === -1 && e === key.textContent && !key.hasAttribute('disabled') && overlay) {
                  key.classList.add('wrong');
                  key.style.cursor = 'default';
                  key.setAttribute('disabled', 'disabled');
                  this.removeLife();
              // Check letter for a match and if the player is correct, they win. Otherwise, they lose.
              } else if (letterChecker >= 0 && e === key.textContent && !key.hasAttribute('disabled') && overlay) {
                  key.classList.add('chosen');
                  key.style.cursor = 'default';
                  key.setAttribute('disabled', 'disabled');
                  // send letter to showMatchedLetter method in Phrase object
                  this.activePhrase.showMatchedLetter(e);
                  // check if win
                  if (this.checkForWin() === 'win') { this.gameOver('win');}
              }
          });  
  }
  removeLife(){
      const lives = document.querySelectorAll(".tries img");
      this.missed += 1;

      // If the player loses then image will switch to a lost life/heart
      lives[this.missed-1].setAttribute('src', 'images/lostHeart.png');
       if (this.missed === 5) { this.gameOver('lose') };
  }
  checkForWin(){
      const matchedLetters = document.querySelectorAll('.show');
      const activePhrase = this.activePhrase.phrase.replace(/ /g, "");
      if (matchedLetters.length === activePhrase.length) { return 'win'; }
  }
  gameOver(gameStatus){
      const overlay = document.querySelector('#overlay');
      const button = document.querySelector('#btn__reset');
      const gameMessage = document.querySelector('#game-over-message');
      
      //If the player wins, it will prompt the winning message
      if (gameStatus === 'win') {
          overlay.className = 'win';
          gameMessage.innerHTML = 'Congrats! You won! <br><br> <img src="images/mariooneup.gif" height="375">';
      }
      //If the player loses, then it will prompt the losing message
      if (gameStatus === 'lose') {
          overlay.className = 'lose';
          gameMessage.innerHTML = 'Sorry, you lost! <br><br> <img src="images/mariocry.gif">';
      }

      document.querySelector('.title').innerText= " ";
      // Button text updated to 'Play Again?'
      button.innerText = 'Play Again?';
      overlay.removeAttribute('style');
      document.querySelector('#phrase ul').innerHTML = '';
      // Reset hearts
      Array.from(document.querySelectorAll(".tries img"))
          .forEach(img => img.setAttribute('src', 'images/liveHeart.png'));
      Array.from(document.querySelectorAll('.keyrow > .key'))
          .forEach(key => {
              key.className = 'key'
              key.removeAttribute('style');
              key.removeAttribute('disabled');
          });
  }
}