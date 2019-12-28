/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Phrase.js */


// Variables
let matched = false;

class Phrase {
    // This property should be set to the phrase parameter, but converted to all lower case
    constructor (phrase) {
       this.phrase = phrase.toLowerCase();
    }

addPhraseToDisplay() {
        // Each letter is presented by an empty box, one li element for each letter. 
            const phraseDiv = document.querySelector("#phrase ul");
            for (let i = 0; i < this.phrase.length; i += 1) {
            let newListElement = document.createElement('li');
            // The phrase displayed on the screen uses the letter CSS class for letters and the space CSS class for spaces.
            let character = this.phrase[i];
                if (character === ' ') {
                    newListElement.className = 'space';
                } else {
                    newListElement.className = 'letter';
                }
               
            newListElement.textContent = character;
            // add the new li to the phraseDiv
			phraseDiv.appendChild(newListElement);
        }

         // Prevents player from using the mouse to highlight the letters in the phrase
         document.addEventListener('mousedown', function (e) {
            e.preventDefault();
          });
    } 
     
// checkLetter(): checks to see if the letter selected by the player matches a letter in the phrase
    checkLetter(letter) {
        if(this.phrase.includes(letter)) {
            matched = true;
        } else {
           matched = false;
        };
        this.showMatchedLetter();
      } 
    // showMatchedLetter(): reveals the letter(s) on the board that matches the player's selection
    showMatchedLetter(letter) {
        // selects all of the li elements in the phrase div
        let characterList = $('#phrase li');
        for (let i = 0; i < characterList.length; i += 1) {   
            if (characterList[i].textContent === letter) {
                $(characterList[i]).removeClass('letter').addClass('show');
        }     
        }
    }

 } 