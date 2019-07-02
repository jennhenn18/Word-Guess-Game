// create variables

var wins = 0;
var loses = 0;
var remainingGuesses = 10;
var wordCatalog = ["Accio", "Azkaban", "Basilisk", "Butterbeer", "Dementor", "Divination", "Dobby", "Expelliarmus", "Firebolt", "Gillyweed", "Gryffindor", "Hufflepuff", "Hippogriff", "Hogsmeade", "Incendio", "Lumos", "Mudblood", "Muggle", "Nargles", "Nox", "Obliviate", "Parseltongue", "Patronus", "Quidditch", "Ravenclaw", "Seeker", "Slytherin", "Squib", "Transfiguration", "Wand"]

// randomly select a word

var word = wordCatalog[Math.floor(Math.random()*wordCatalog.length)];

console.log(remainingGuesses)
console.log(wins)
console.log(loses)
console.log(wordCatalog)
console.log(word)

// create variables to hold values that will be referenced in HTML

var remainingLives = document.getElementById("remaining-lives")
var winsText = document.getElementById("wins-text")
var lossesText = document.getElementById("losses-text")
var userChoice = document.getElementById("user-choice")

console.log(remainingLives)
console.log(winsText)
console.log(lossesText)
console.log(userChoice)

// Update clue to reflect number of characters in word

var answer = [];
for (var i = 0; i < word.length; i++) {
    answer[i] = "_";
    console.log(answer)
}

// variable for remaining letters in word

var remainingLetters = word.length;
console.log(remainingLetters)

// The user inputs a key

    document.onkeyup = function(event) {
        var userGuess = event.key.toLowerCase();
        console.log(userGuess)

        document.write(answer.join(" "));

        for (var j = 0; j <word.length; j++) {
            if (word[j] === userGuess) {
                answer[j] = userChoice;
                remainingLetters--;
            }
        }
   }


// If key is correct show display character


        

// If key is incorrect display character under incorrect guesses

// If key is incorrect subtract one from remainingGuesses


// If that key was incorrect show the letter and minus one from remaining guesses
// If the user guesses the word before the reamining guesses is 0 add 1 to their win


// If the user does not guess the word correctly and their remaining guesses is 0 add plus 1 to their lose score



// If the user wins or loses restart the game and randomly select another word


// Displays win, losses, and remaining guesses

// remainingLives.textContent = remainingGuesses;
// winsText.textContent = "wins: " + wins;
// lossesText = "losses: " + loses;


