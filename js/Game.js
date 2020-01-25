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
//Creating the game class
class Game {
    constructor () {
        // missed: used to track the number of missed guesses by the player. 
         // The initial value is 0, since no guesses have been made at the start of the game.
        this.missed = 0;
        // phrases: an array of five Phrase objects to use with the game. 
         // A phrase should only include letters and spaces— no numbers, punctuation or other special characters.
        this.phrases = [
            'Mario',
            'Luigi',
            'Yoshi',
            'Bowser',
            'Princess Peach'
        ];
          // activePhrase: This is the Phrase object that’s currently in play. 
        // The initial value is null.
        // Within the startGame() method, this property will be set to the Phrase object returned from a call to the getRandomPhrase() method.
       this.activePhrase = null;
    }
    getRandomPhrase() {
        let randomPhrase = this.phrases[Math.floor(Math.random() * this.phrases.length)]; 
        return randomPhrase;
    } 
    
    startGame() {    
        $overlay.fadeOut(7500);
        $header.delay(5000).fadeIn(6500);
        $header2.delay(7000).fadeIn(6500);
        let chosenPhrase = this.getRandomPhrase();
        this.activePhrase = new Phrase(chosenPhrase);
        // Adds that phrase to the board by calling the addPhraseToDisplay() method on the active Phrase object
        this.activePhrase.addPhraseToDisplay(); 
} 

@@ -90,7 +89,7 @@ checkForWin() {
        $supermario.hide();
        $overlay.show().addClass('win');
        $gameOverMessage.text('Nice Job! You win!').addClass('header2');
        $startGameBtn.text('Give It Another Try?');
        $startGameBtn.click(function() {
            location.reload();
        })
    }
} 
// gameOver(): this method displays the original start screen overlay, and depending on the outcome of the game, 
gameOver() {
    if (this.missed === 5) {
        $supermario.hide();
        $overlay.show().addClass('lose');
        $gameOverMessage.text('Game Over. You lose!');
        $startGameBtn.removeAttr('id').addClass('lose__button').text('Try Again?');
        $startGameBtn.click(function() {
            location.reload();
        })
    }
} // end gameOver();
// end Game class