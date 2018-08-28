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
var lettersCurrentWord = []; //Holds letters in character name
var nameAsDashes = []; //Holds letters as dashes

//Computer randomly chooses a character name
var randomName = charName[Math.floor(Math.random() * charName.length)];

// Starting the game
function startGame() {
    gameStart = true;
    maxGuess = 10;
    lettersCurrentWord = randomName.split("");
    nameAsDashes = changeToDashes(randomName);
    //Array that holds dashes
    dashesCurrentWord = nameAsDashes.split("");
    document.getElementById("current-word").innerHTML = nameAsDashes;
    document.getElementById("wrong-guess").innerHTML = "Wrong letters:" + wrongLetters;    
    document.getElementById("guesses-left").innerHTML = "Guesses left: " + maxGuess;

console.log(randomName);
console.log(nameAsDashes);
}

//Function to change words into dashes
function changeToDashes(word){
    var dashes = " _ ";
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
        var userGuess = String.fromCharCode(event.key).toLowerCase();
    }

    else {
        playGame(event.key);
    }

console.log(event.key);
}

//Functionality of the game
function playGame(letter) { 

    var letter = letter.toLowerCase();

        if (alphabet.indexOf(letter) > -1 === lettersCurrentWord.indexOf(letter) > -1) {
            showLetter(letter);
            }
            else if (userGuess.indexOf(letter) > -1) {
                return;
            }    
            else {
                maxGuess--;
                document.getElementById("wrong-guess").innerHTML = "Wrong letters: " + wrongLetters.push(letter);
            }
        }

        if (maxGuess === 0) {
            alert("Sorry! The correct answer is " + randomName);
            losses++;
            document.getElementById("losses-text").innerHTML = "Losses: " + losses;
            startGame();
        } 

//Displays letter on page if it's in the current word
function showLetter(letter) {
    for (var i = 0; i < randomName.length; i++) {
        if (letter === lettersCurrentWord[i]) {
            dashesCurrentWord[i * 2] = letter;
            console.log(dashesCurrentWord);
        }
    }
    document.getElementById("current-word").innerHTML = dashesCurrentWord.join();
    checkForWin();
}

//When game is won
function checkForWin() {
    if (dashesCurrentWord.indexOf("_") === -1) {
        alert("Good job! The correct answer is" + currentWord);
        wins++;
        document.getElementById("wins-text").innerHTML = wins;
        startGame();
    }
}
