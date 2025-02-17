// use qwerty cause why not
const CHARACTER_ARRAY = ['q','w','e','r','t','y','u','i','o','p','a','s','d','f','g','h','j','k','l','z','x','c','v','b','n','m'];
const MAX_HIT_COUNT = 5;

let gameCompleted = false; 
let targetWord = "Sword"; // the word to be solved in hangman


// BIG NOTE: REMOVE ALL LOOPS IN THE CODE

// FRONT-END FUNCTIONS ------------------------------------------------
function startFailedEnd(){

}

function startAccomplisedEnd(){

}

function update(){

}

function prepareGame(){ // dynamically add in the elements
    for (let caIndex = 0; caIndex < CHARACTER_ARRAY.length; caIndex++){
        let characterElement = document.createElement("div")
        characterElement.setAttribute("id", ca)
    }
}
// BACK-END FUNCTIONS -------------------------------------------------
// .indexOf(a) < 0  : item was not found
// .indexOf(a) >= 0 : item WAS found
// note: console logs and alerts are not semi-colon'ed. please fix later

function main(){
    let hitCount = 0;

    let dissectedArray = targetWord.toLowerCase().split("");
    let currentCharArray = [];
   
    while (!gameCompleted){
        let key = "1234567890"; // random string so it won't bypass the check

        while (key.length > 1 && CHARACTER_ARRAY.indexOf(key) < 0){
            key = prompt("What's your character (e.g. a, b, c)?");
            if (!key){
                key = "1234567890"
                continue;
            }
        };
        // this section assumes that the key is 1 and the key is on the CHAR_ARRAY
        console.log("BASIC KEY-CHECK COMPLETE")

        // if input is incorrent, add hitCount by 1
        if (dissectedArray.indexOf(key) < 0){
            hitCount++;
            console.log(hitCount)
            console.log("COULD NOT FIND A HIT IN THE DISSECTED ARRAY! ALERTING.")
        } else if (currentCharArray.indexOf(key) < 0) {
            currentCharArray.push(key);
            console.log("FOUND A HIT IN THE DISSECTED ARRAY! ALERTING.")
            alert("You've got a hit.")
        } else {
            hitCount++;
            console.log(hitCount)
            console.log("You've already got this correct answer. ALERTING.")
            alert("You've already gotten this correct answer.")
        };

        // check if hitcount has reached max
        if (hitCount >= MAX_HIT_COUNT){
            gameCompleted = true;
            console.log("GAME HAS COMPLETED. HITCOUNT HAS EXCEEDED MAX. ALERTING.")
            alert("You've failed now.")
            continue; // to end the game
        };

        if (currentCharArray.length < dissectedArray.length) {
            console.log("CCA IS LESS THAN DA")
            continue; // to bypass the last section of code and continue the game.
                    // There's no need to check matching if theres \n
                    // less elements in the current array than the dissected.
        };

        gameCompleted = true;
        console.log("FINISH FINISH FINISSSSSHHHHHH!!!!!!")
        alert("You've won. What now?")
        continue; // to end the game
    };

    console.log("game ended!")
    // main() // unused so the game can be debugged
};

main()