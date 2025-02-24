// use qwerty cause why not
const CHARACTER_ARRAY = ['q','w','e','r','t','y','u','i','o','p','a','s','d','f','g','h','j','k','l','z','x','c','v','b','n','m'];
const MAX_HIT_COUNT = 5;

let targetWord = "Sword".toLowerCase(); // the word to be solved in hangman

let hitCount = 0;
let currentCharacters = [];

// FRONT-END FUNCTIONS ------------------------------------------------
function startFailedEnd(){
    let item0 = document.getElementById("0")
    let item1 = document.getElementById("1")
    let item2 = document.getElementById("2")
    let item3 = document.getElementById("3")
    let item4 = document.getElementById("4")

    item0.style.color = "rgb(207, 94, 94)";
    item0.style.opacity = 1;
    item1.style.color = "rgb(207, 94, 94)";
    item1.style.opacity = 1;
    item2.style.color = "rgb(207, 94, 94)";
    item2.style.opacity = 1;
    item3.style.color = "rgb(207, 94, 94)";
    item3.style.opacity = 1;
    item4.style.color = "rgb(207, 94, 94)";
    item4.style.opacity = 1;

    item0.style.textShadow = "rgba(255,255,255,1) 0px 0px 38px";
    item1.style.textShadow = "rgba(255,255,255,1) 0px 0px 38px";
    item2.style.textShadow = "rgba(255,255,255,1) 0px 0px 38px";
    item3.style.textShadow = "rgba(255,255,255,1) 0px 0px 38px";
    item4.style.textShadow = "rgba(255,255,255,1) 0px 0px 38px";

    item0.innerHTML = targetWord[0].toUpperCase()
    item1.innerHTML = targetWord[1].toUpperCase()
    item2.innerHTML = targetWord[2].toUpperCase()
    item3.innerHTML = targetWord[3].toUpperCase()
    item4.innerHTML = targetWord[4].toUpperCase()

    changeLetterColor("rgb(204, 193, 202)")
}

function startAccomplisedEnd(){
    let item0 = document.getElementById("0")
    let item1 = document.getElementById("1")
    let item2 = document.getElementById("2")
    let item3 = document.getElementById("3")
    let item4 = document.getElementById("4")

    item0.style.color = "rgb(104, 207, 135)";
    item0.style.opacity = 1;
    item1.style.color = "rgb(104, 207, 135)";
    item1.style.opacity = 1;
    item2.style.color = "rgb(104, 207, 135)";
    item2.style.opacity = 1;
    item3.style.color = "rgb(104, 207, 135)";
    item3.style.opacity = 1;
    item4.style.color = "rgb(104, 207, 135)";
    item4.style.opacity = 1;

    item0.style.textShadow = "rgba(255,255,255,1) 0px 0px 38px";
    item1.style.textShadow = "rgba(255,255,255,1) 0px 0px 38px";
    item2.style.textShadow = "rgba(255,255,255,1) 0px 0px 38px";
    item3.style.textShadow = "rgba(255,255,255,1) 0px 0px 38px";
    item4.style.textShadow = "rgba(255,255,255,1) 0px 0px 38px";

    changeLetterColor("rgb(170, 204, 255)")
}

function changeLetterColor(color) {
    document.getElementById("a").style.backgroundImage = "linear-gradient("+color+", "+color+", rgba(0,0,0,0))"
    document.getElementById("b").style.backgroundImage = "linear-gradient("+color+", "+color+", rgba(0,0,0,0))"
    document.getElementById("c").style.backgroundImage = "linear-gradient("+color+", "+color+", rgba(0,0,0,0))"
    document.getElementById("d").style.backgroundImage = "linear-gradient("+color+", "+color+", rgba(0,0,0,0))"
    document.getElementById("e").style.backgroundImage = "linear-gradient("+color+", "+color+", rgba(0,0,0,0))"
    document.getElementById("f").style.backgroundImage = "linear-gradient("+color+", "+color+", rgba(0,0,0,0))"
    document.getElementById("g").style.backgroundImage = "linear-gradient("+color+", "+color+", rgba(0,0,0,0))"
    document.getElementById("h").style.backgroundImage = "linear-gradient("+color+", "+color+", rgba(0,0,0,0))"
    document.getElementById("i").style.backgroundImage = "linear-gradient("+color+", "+color+", rgba(0,0,0,0))"
    document.getElementById("j").style.backgroundImage = "linear-gradient("+color+", "+color+", rgba(0,0,0,0))"
    document.getElementById("k").style.backgroundImage = "linear-gradient("+color+", "+color+", rgba(0,0,0,0))"
    document.getElementById("l").style.backgroundImage = "linear-gradient("+color+", "+color+", rgba(0,0,0,0))"
    document.getElementById("m").style.backgroundImage = "linear-gradient("+color+", "+color+", rgba(0,0,0,0))"
    document.getElementById("n").style.backgroundImage = "linear-gradient("+color+", "+color+", rgba(0,0,0,0))"
    document.getElementById("o").style.backgroundImage = "linear-gradient("+color+", "+color+", rgba(0,0,0,0))"
    document.getElementById("p").style.backgroundImage = "linear-gradient("+color+", "+color+", rgba(0,0,0,0))"
    document.getElementById("q").style.backgroundImage = "linear-gradient("+color+", "+color+", rgba(0,0,0,0))"
    document.getElementById("r").style.backgroundImage = "linear-gradient("+color+", "+color+", rgba(0,0,0,0))"
    document.getElementById("s").style.backgroundImage = "linear-gradient("+color+", "+color+", rgba(0,0,0,0))"
    document.getElementById("t").style.backgroundImage = "linear-gradient("+color+", "+color+", rgba(0,0,0,0))"
    document.getElementById("u").style.backgroundImage = "linear-gradient("+color+", "+color+", rgba(0,0,0,0))"
    document.getElementById("v").style.backgroundImage = "linear-gradient("+color+", "+color+", rgba(0,0,0,0))"
    document.getElementById("w").style.backgroundImage = "linear-gradient("+color+", "+color+", rgba(0,0,0,0))"
    document.getElementById("x").style.backgroundImage = "linear-gradient("+color+", "+color+", rgba(0,0,0,0))"
    document.getElementById("y").style.backgroundImage = "linear-gradient("+color+", "+color+", rgba(0,0,0,0))"
    document.getElementById("z").style.backgroundImage = "linear-gradient("+color+", "+color+", rgba(0,0,0,0))"
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

function updateHitVisual(count){
    if (count == 0){
        return
    }

    let bar = document.getElementById("l"+count);
    bar.style.opacity = 0
}

// BACK-END FUNCTIONS -------------------------------------------------
// .indexOf(a) < 0  : item was not found
// .indexOf(a) >= 0 : item WAS found
// note: console logs and alerts are not semi-colon'ed. please fix later

function step(possibleKey){ // stepping function to progress the game
    let key = null
    if (possibleKey){
        key = possibleKey;
    } else {
        key = prompt("What's your character (e.g. a, b, c)?");
    }

    if (CHARACTER_ARRAY.indexOf(key) < 0){
        alert("This isn't valid.")
        return;
    }

    if (key.length > 1){
        alert("This isn't valid.")
        return;
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

    updateHitVisual(hitCount);

    if (hitCount >= MAX_HIT_COUNT){
        console.log("GAME HAS COMPLETED. HITCOUNT HAS EXCEEDED MAX. ALERTING.")
        alert("You've failed now.");
        startFailedEnd()
        return; // to end the game
    };

    if (currentCharacters.length < targetWord.length) {
        console.log("CCA IS LESS THAN DA")
        return; // to continue the game
    };

    console.log("FINISH FINISH FINISSSSSHHHHHH!!!!!!")
    alert("You've won. What now?")
    startAccomplisedEnd()
    return; // to end the game
}