// use qwerty cause why not
const CHARACTER_ARRAY = ['q','w','e','r','t','y','u','i','o','p','a','s','d','f','g','h','j','k','l','z','x','c','v','b','n','m'];
const MAX_HIT_COUNT = 5;

let gameCompleted = false; 
let targetWord = "Sword".toLowerCase(); // the word to be solved in hangman

let hitCount = 0;
let currentCharacters = [];

// BIG NOTE: REMOVE ALL LOOPS IN THE CODE

// FRONT-END FUNCTIONS ------------------------------------------------
function startFailedEnd(){

}

function startAccomplisedEnd(){

}

function updateLetter(letter, success){
    let letterElement = document.getElementById(letter)
    // rgb(104, 207, 135)
    if (success){
        letterElement.style.backgroundImage = "linear-gradient(rgb(104, 207, 135), rgb(104, 207, 135), rgba(0,0,0,0))"
    } else {
        letterElement.style.backgroundImage = "linear-gradient(rgb(207, 94, 94), rgb(207, 94, 94), rgba(0,0,0,0))"
    }
}

function setBoardLetter(letter, index){
    let letterElement = document.getElementById(index);

    letterElement.innerHTML = letter.toUpperCase();
}

// BACK-END FUNCTIONS -------------------------------------------------
// .indexOf(a) < 0  : item was not found
// .indexOf(a) >= 0 : item WAS found
// note: console logs and alerts are not semi-colon'ed. please fix later

function step(){ // stepping function to progress the game
    let key = prompt("What's your character (e.g. a, b, c)?");
    if (key.length > 1 || CHARACTER_ARRAY.indexOf(key) < 0){
        alert("This isn't valid.")
    }

    if (targetWord.indexOf(key) < 0){
        hitCount++;
        updateLetter(key, false);
        console.log(hitCount)
        console.log("COULD NOT FIND A HIT IN THE TARGETWORD! ALERTING.")
    } else if (targetWord.indexOf(key) >= 0 && currentCharacters.indexOf(key) < 0) {
        currentCharacters.push(key);
        updateLetter(key, true);
        setBoardLetter(key, targetWord.indexOf(key))
        console.log("FOUND A HIT IN THE TARGETWORD! ALERTING.")
    } else {
        hitCount++;
        console.log(hitCount);
        console.log("You've already got this correct answer. ALERTING.")
    };

    if (hitCount >= MAX_HIT_COUNT){
        console.log("GAME HAS COMPLETED. HITCOUNT HAS EXCEEDED MAX. ALERTING.")
        alert("You've failed now.");
        gameCompleted = true;
        return; // to end the game
    };

    if (currentCharacters.length < targetWord.length) {
        console.log("CCA IS LESS THAN DA")
        return; // to continue the game
    };

    console.log("FINISH FINISH FINISSSSSHHHHHH!!!!!!")
    alert("You've won. What now?")
    gameCompleted = true;
    return; // to end the game
}

