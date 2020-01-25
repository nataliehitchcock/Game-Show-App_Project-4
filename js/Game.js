/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */


class Game{
    constructor(){
        this.missed = 0;
        this.phrases = this.createPhrases();
        this.activePhrase = null;
    }

    /**
     * Creates phrase for use in game
     * @return {array} An Array of phrases that could be used in the game
     */

    createPhrases(){
        let phrases = [
            {phrase: 'mario'},
            {phrase: 'luigi'},
            {phrase: 'princess peach'},
            {phrase: 'bowser'},
            {phrase: 'yoshi'}
        ]
        return phrases;
    }

    /**
     * Selects random phrase from phrases property
     * @return {object} Phrase object chosen to be used
     */

    getRandomPhrase(){
        let randNum = Math.floor(Math.random() * 4)
        return new Phrase(this.phrases[randNum].phrase);
    }
    startGame(){
        const phraseLetters = document.querySelectorAll('ul li');
        if (phraseLetters.length > 0){
            for (let i = 0; i < phraseLetters.length; i ++){
                phraseLetters[i].style.display = 'none';
            }
            const buttons = document.querySelectorAll('button')
            for (let y = 0; y < buttons.length; y ++) {
                buttons[y].className = 'key';
                buttons[y].disabled = false;
            }
            const liveHearts = document.getElementsByClassName('tries')
            for (let x = 0; x < liveHearts.length; x ++){
                liveHearts[x].innerHTML = "<img src='images/liveHeart.png' alt='Heart Icon' height='35' width='30'>"
            }
            let span = document.getElementById("heart-span")
            span.style.display = "none"
        }
        document.getElementById('overlay').style.display = 'none';
        this.activePhrase = this.getRandomPhrase();
        this.activePhrase.addPhraseToDisplay();
        console.log(`Active Phrase - phrase: ${this.activePhrase.phrase}`)
    }

    /**
     * Checks for win
     * @return {boolean} 
     */
    
    checkForWin(){
        //Checks if player has revealed all of the letters in the active phrase;
        let hideCheck = document.getElementsByClassName('hide letter');
        let showCheck = document.getElementsByClassName('show letter');
        if (showCheck.length > 0 && hideCheck.length < 1){
            return true;
        } 
        else {
            return false;
        }
    }

    /**
     * Increases the value of the 'missed' property
     * Removes a life from the scoreboard
     * Checks if player has remaining lives and ends game if no more lives remain
    */

    removeLife(){
        //let span = document.createElement("span");//create span for 'lives' counter
        let span = document.getElementById("heart-span")
        let scoreboard = document.getElementById("scoreboard").appendChild(span)
        span.style.display = "none"
        let x = 5;

        if(this.missed < 4){
            const liveHearts = document.getElementsByClassName('tries')
            //converts liveHearts HTML collection to array
            let arrLive = [...liveHearts];
            //sets arrLive index equal to this.missed count
            let firstLive = arrLive[this.missed];
            this.missed += 1;
            let string = firstLive.innerHTML
            let replace = string.replace("liveHeart", "lostHeart");
            //replaces innerHTML of arrLive element at specified index
            firstLive.innerHTML = `${replace}`;

            //dislays 'lives' counter to scoreboard
            span.style.display = "block"
            span.textContent = (x - this.missed + " live(s) left ") //setting text
        }    
        else {
            this.gameOver(false);
        } 
    }

    /**
     * Displays game over message
     * @param {boolean} gameWon 
     */

    gameOver(gameWon){
        const overlay = document.getElementById('overlay')
        overlay.style.display = 'flex';
        if (!gameWon){
            overlay.className = 'lose';
            overlay.querySelector('#game-over-message').innerText = "Game over, Try again?";
        }
        else {
            overlay.className= 'win';
            overlay.querySelector('#game-over-message').innerText = "You won, congratulations!";
        }
    }

    /**
     * Handles onscreen keyboard button clicks
     * @param {HTMLButtonElement} button 
     */

    handleInteraction(button){
        button.disabled = true;
        //disable the selected letter's onscreen keyboard button
        let check = game.activePhrase.checkLetter(button.textContent);
        if (check === false){
            button.classList ='wrong'
            this.removeLife();
        }
        else {
            button.classList ='chosen'
            //call showMatchedLetter on the phrase
            game.activePhrase.showMatchedLetter(button.textContent)
            //if checkForWin returns true, call gameOver(true)
            this.checkForWin()
                if (this.checkForWin()){
                this.gameOver(true);
                }
        }
    }
}