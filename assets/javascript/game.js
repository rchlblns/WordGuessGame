//All the letters the user can choose from
var alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

//Array of Super Mario characters
var charName = [
    "mario", 
    "luigi", 
    "bowser", 
    "princess peach",
    "shy guy", 
    "koopa troopa",
    "yoshi",
    "toad",
    "boo",
    "kamek",
    ];

var gameStart = false; 
var maxGuess = 10; //Maximum guesses capped at 10
var wins = 0; 
var losses = 0;
var wrongLetters = [];
var lettersCurrentWord = []; //Holds letters in character name
var dashesCurrentWord = []; //Holds name as dashes
var correctGuesses = []; //Holds correct user guesses

//Computer randomly chooses a character name
randomName = charName[Math.floor(Math.random() * charName.length)];

// Starting the game
function startGame() {
    gameStart = true;
    maxGuess = 10;
    wrongLetters = [];
    randomName = charName[Math.floor(Math.random() * charName.length)];
    lettersCurrentWord = randomName.split("");
    nameAsDashes = changeToDashes(lettersCurrentWord);
    document.getElementById("current-word").innerHTML = dashesCurrentWord.join("");
    document.getElementById("wrong-guess").innerHTML = "Wrong letters:" + wrongLetters;    
    document.getElementById("guesses-left").innerHTML = "Guesses left: " + maxGuess;
    document.getElementById("wins-text").innerHTML = "Wins: " + wins;
    document.getElementById("losses-text").innerHTML = "Losses: " + losses;

console.log(randomName);
console.log(lettersCurrentWord)
console.log(nameAsDashes)
console.log(dashesCurrentWord);
}

//Function to change words into dashes
function changeToDashes(letters){
    var dashes = "";
    for (var i = 0; i < letters.length; i++) {
        dashesCurrentWord.push(" _ ");
    }
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
            correctGuesses.push(letter);
            console.log(correctGuesses);
            checkForWin();

            }
            else {
                maxGuess--;
                document.getElementById("guesses-left").innerHTML = "Guesses left: " + maxGuess;
                wrongLetters.push(letter);
                document.getElementById("wrong-guess").innerHTML = "Wrong letters: " + wrongLetters;
            }
}

//Displays letter on page if it's in the current word
function showLetter(letter) {
    for (var i = 0; i < randomName.length; i++) {
        if (letter === lettersCurrentWord[i]) {
            dashesCurrentWord[i] = letter;
            console.log(dashesCurrentWord);
        }
    }
    document.getElementById("current-word").innerHTML = dashesCurrentWord.join("");
}

//Ending the game
function checkForWin() {
    if (correctGuesses.toString() === lettersCurrentWord.toString()) {
        alert("Awesome! You guessed the word!");
        wins++;
        document.getElementById("wins-text").innerHTML = "Wins: " + wins;
        // startGame();
    }
    else if (maxGuess === 0) {
        alert("Sorry! The correct answer is " + randomName);
        losses++;
        document.getElementById("losses-text").innerHTML = "Losses: " + losses;
        // startGame();  
    }
}