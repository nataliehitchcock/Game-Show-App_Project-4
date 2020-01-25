/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Phrase.js */

class Phrase {
    constructor(phrase){
        this.phrase = phrase.toLowerCase();
    }

    /**
     * Displays phrase on game board
     */

    addPhraseToDisplay(){
        const phraseUl = document.querySelector('ul');
        let newPhrase = this.phrase;
        let ltrspl = newPhrase.split('');

        ltrspl.forEach(ltr => {
            const letterLi = document.createElement('li');
            phraseUl.appendChild(letterLi);
            letterLi.innerHTML = (`${ltr}`)
            if (ltr === ' '){
                letterLi.classList = (`hide space`);
            } else {
                letterLi.classList = (`hide letter ${ltr}`);
            }
        })
        
    }

    /**
     * Checks if passed letter is in phrase
     * @param {string} letter - letter to check
     */

    checkLetter(letter){
        let phrase = game.activePhrase.phrase;
        let phraseSplit = phrase.split('');
        if(phraseSplit.indexOf(letter) >= 0){
            return true;
        }
        else {
            return false;
        }
    }

     /**
      * Displays passed letter on screen after a
      * match is found
      * @param {string} letter = letter to display
      */

    showMatchedLetter(letter){
        let phrase = game.activePhrase.phrase;
        let phraseSplit = phrase.split('');
        let letterElements = document.getElementsByClassName(`${letter}`);
        for (let i = 0; i < letterElements.length; i++){
            letterElements[i].classList.replace('hide','show');
        }    
    }

 }
