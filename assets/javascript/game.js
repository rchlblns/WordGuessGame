// List of character names than can be guessed
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

//Number of max guesses
var maxGuess = 10;

//Number of wins user has
var wins = 0;

//Array that holds correct guesses and blank letters
var correctLetters = []

//Where all incorrect guesses are stored
var wrongLetters = [];

//Letters in current word
var lettersCurrentWord = [];

//Variables that hold references to places that we want to store things
var directionsText = document.getElementById("directions-text");
var winsText = document.getElementById("wins-text");
var lossesText = document.getElementById("losses-text")
var guessesLeft = document.getElementById("guesses-left");
var currentName = document.getElementById("current-name");
var wrongGuess = document.getElementById("wrong-name");

// When user presses a key
document.onkeyup = function(event) {
    
    //this determines what key was pressed
    var userGuess = event.key;

console.log(userGuess);
}

//Computer randomly chooses a character name
var randomName = charName[Math.floor(Math.random() * charName.length)];

//Split current character name into string of letters
lettersCurrentWord = randomName.split("");

console.log(lettersCurrentWord)

//Blanks to track how many letters are in each word
var blanks = lettersCurrentWord.length;

for (var i =0; i < blanks; i++) {
    correctLetters.push("_");
}

console.log(correctLetters);

//Modifies to reflect character name that user is currently guessing 

document.getElementById("current-name").innerHTML = "Find the missing letters" + lettersCurrentWord.join();

//If user presses a letter than is part of the character's name
// if (userGuess === letterCurrentWord) {
//     userGuess.push(randomName);
// }
// else {
//     userGuess.push(wrongLetters);
// }

// }



// // Hide the directions when key is pressed
// directionsText.textcontent=" ";

//Displays wins/losses record and tries left/guesses so far
// winsText.textcontent = ""
// lossesText.textcontent = ""
// triesLeft.textcontent = ""
// currentName.textcontent = ""
