//All the letters the user can choose from
var alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

//Array of Super Mario characters
var charName = [
    "mario", 
    "luigi", 
    "bowser", 
    "princess peach",
    "shyguy", 
    "koopa troopa",
    "yoshi",
    "toad",
    "boo",
    "kamek",
    ];

var gameStart = false; 
var userGuess = [];
var maxGuess = 10; //Maximum guesses capped at 10
var wins = 0; 
var losses = 0;
var wrongLetters = [];
var lettersCurrentWord = [];
var wordsToDashes = []; 

//Computer randomly chooses a character name
var randomName = charName[Math.floor(Math.random() * charName.length)];

// Starting the game
function startGame() {
    gameStart = true;
    maxGuess = 10;
    //Array that holds character name as letters
    lettersCurrentWord = randomName.split("");
    //Letter gets changed into dashes
    wordsToDashes = changeToDashes(randomName);
    //Array that holds dashes
    dashesCurrentWord = wordsToDashes.split("");
    document.getElementById("current-word").innerHTML = wordsToDashes;
    document.getElementById("wrong-guess").innerHTML = wrongLetters;    
    document.getElementById("guesses-left").innerHTML = "Guesses left: " + maxGuess;

console.log(randomName);
console.log(wordsToDashes);
}

//Function to change words into dashes
function changeToDashes(word){
    var dashes = "";
    for (var i = 0; i <word.length -1; i++) {
        dashes += " _ ";
    }
    dashes += " _ ";
    return dashes;
}

// When user presses a key
document.onkeyup = function(event) {
    
    if (!gameStart){
        //game is started
        startGame();
        //this determines what key was pressed
        var userGuess = String.fromCharCode(event.keyCode).toLowerCase();
    }

    else {
        playGame();
    }

console.log(userGuess);
}

// //Functionality of the game
// function playGame() 
// var letter = keyPressed;
// if (letter === dashesCurrentWord[i]) {
//     showLetter();
// }

//Displays letter on page if it's in the current word
function showLetter(letter) {
    for (var i = 0; i < currentWord.length; i++) {
        if (userGuess === lettersCurrentWord[i]) {
            dashesArray[i * 2] = userGuess;
            console.log(dashesArray);
        }
    }
    document.getElementById("current-word").innerHTML = dashesArray.join("");
    checkForWin();
}

//When game is won
function checkForWin() {
    if (dashesArray.indexOf("_") === -1) {
        alert("Good job! The correct answer is" + currentWord);
        wins++;
        document.getElementById("wins-text").innerHTML = wins;
        startGame();
    }
}
