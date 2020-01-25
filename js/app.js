/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */


let game;
const qwerty = document.getElementById('qwerty');

document.getElementById('btn__reset').addEventListener('click', function(){
    game = new Game();
    game.startGame();
})

//click event listener
function clickKeys(e){
    if (e.target && e.target.nodeName == 'BUTTON'){
        game.handleInteraction(e.target);
    } 
}
qwerty.addEventListener('click', clickKeys);

//adds event listener to each key in qwerty keyboard
let button = document.getElementsByClassName('key');
function keyUp(){
    for (b of button) {
        b.addEventListener('keyup', pressKey)
    }
    document.body.addEventListener('keyup', pressKey)
}

//handles results of pressing a key on your physical keyboard
function pressKey(evt){
    let target = evt.currentTarget;
    let char = evt.char || evt.charCode || evt.which;
    let e = String.fromCharCode(char).toLowerCase();
    let bArray = Array.from(button)
    for (let i = 0; i < bArray.length; i++){
        if (bArray[i].textContent === e) {
            game.handleInteraction(bArray[i])
        }
    }
}

keyUp()