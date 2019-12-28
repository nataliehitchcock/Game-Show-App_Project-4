/* Treehouse FSJS Techdegree
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
            'Toad',
            'Princess Peach'
        ];

          // activePhrase: This is the Phrase object that’s currently in play. 
        // The initial value is null.
        // Within the startGame() method, this property will be set to the Phrase object returned from a call to the getRandomPhrase() method.
       this.activePhrase = null;
    }

    getRandomPhrase() {
        let randomPhrase = this.phrases[Math.floor(Math.random() * this.phrases.length)];
            // console.log(randomPhrase); // test to make sure the variable returns a random phrase from the phrases array. 
        return randomPhrase;
    } // end getRandomPhrase();
    
    startGame() {    
        $overlay.fadeOut(7500);
        $header.delay(5000).fadeIn(6500);
        $header2.delay(7000).fadeIn(6500);
        let chosenPhrase = this.getRandomPhrase();
        // Sends chosenPhrase to the Phrase class
        this.activePhrase = new Phrase(chosenPhrase);
        // Adds that phrase to the board by calling the addPhraseToDisplay() method on the active Phrase object
        this.activePhrase.addPhraseToDisplay(); 
} 

// handleInteraction(): this method controls most of the game logic 
    // It checks to see if the button clicked by the player matches a letter in the phrase, 
        // and then directs the game based on a correct or incorrect guess
        handleInteraction(letterCheck) {
            let letter = letterCheck.textContent;
            if (this.activePhrase.checkLetter(letterCheck.textContent)) {
                this.activePhrase.showMatchedLetter(letter);
                letterCheck.disabled = true;
            }         
            if (matched === false) {
                letterCheck.className = 'wrong';
                this.removeLife();
            }
            if (matched === true) {
                letterCheck.className = 'chosen';
                this.activePhrase.showMatchedLetter(letter);
                this.checkForWin();
            }
        }

// removeLife(): this method removes a life from the scoreboard 
removeLife() {
    // adds to the missed count by increments of 1
    this.missed += 1; 
    const heart = $('.tries'); 
    for (let i = 0; i < this.missed; i += 1) {
        heart[i].innerHTML = '<img src="images/frenchHorn.png" alt="RIP" height="45" width="60">';
        // If the player has five missed guesses (i.e they're out of lives), then end the game by calling the gameOver() method
        if (this.missed === 5) {
            this.gameOver();
        }
    }   
}

// checkForWin(): this method checks to see if the player has revealed all of the letters in the active phrase
checkForWin() {
    let notGuessed = document.getElementsByClassName('letter').length;
    if (notGuessed === 0) {
        $himym.hide();
        $overlay.show().addClass('win');
        $gameOverMessage.text('Nice Job! You win!').addClass('header2');
        $startGameBtn.text('Give It A Try?');
        $startGameBtn.click(function() {
            location.reload();
        })

    }
} // end checkforWin();

// gameOver(): this method displays the original start screen overlay, and depending on the outcome of the game, 
gameOver() {
    if (this.missed === 5) {
        $himym.hide();
        $overlay.show().addClass('lose');
        $gameOverMessage.text('You lose!');
        $startGameBtn.removeAttr('id').addClass('lose__button').text('Try Again?');
        $startGameBtn.click(function() {
            location.reload();
        })
    }
} // end gameOver();


} // end Game class
    