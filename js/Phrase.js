/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Phrase.js */ 

class Phrase {
  constructor(phrase) {
      this.phrase = phrase.toLowerCase();
  }
  addPhraseToDisplay(phrase) {
      const addLetters = document.querySelector("#phrase ul");
      Array.from(phrase.phrase)
          .forEach(letter => {
              if (letter !== " "){
                  addLetters.insertAdjacentHTML('beforeend', `<li class="hide letter ${letter}">${letter}</li>`);
              } else { 
                  addLetters.insertAdjacentHTML('beforeend', `<li class="space"> </li>`);
              }
          }) 
  }
  checkLetter(enteredLetter, activePhrase){
      // Check to see if the letter entered exists in the active phrase
      return activePhrase.indexOf(enteredLetter);
  }
  showMatchedLetter(enteredLetter){
      // Create an array of the letters on the screen and show them
      Array.from(document.querySelectorAll(`.hide.letter.${enteredLetter}`))
          .forEach(match => match.className = "show");
      
  }
}