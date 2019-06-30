// create an array of words

var wordCatalog = ["Accio", "Azkaban", "Basilisk", "Butterbeer", "Dementor", "Divination", "Dobby", "Expelliarmus", "Firebolt", "Gillyweed", "Gryffindor", "Hufflepuff", "Hippogriff", "Hogsmeade", "Incendio", "Lumos", "Mudblood", "Muggle", "Nargles", "Nox", "Obliviate", "Parseltongue", "Patronus", "Quidditch", "Ravenclaw", "Seeker", "Slytherin", "Squib", "Transfiguration", "Wand"]

// randomly select a word from the list

var word = wordCatalog[Math.floor(Math.random()*wordCatalog.length)];

console.log(wordCatalog)
console.log(word)

// Update clue to reflect number of characters in word

var answer = [];
for (var i = 0; i < word.length; i++) {
    answer[i] = "_";
    console.log(answer)
}

// variable for remaining letters in word

var remainingLetters = word.length;
console.log(remainingLetters)

// Assign remaining guesses to 10

var remainingGuesses = 10;


// The user inputs a Key

    document.onkeyup = function(event) {
        var userGuess = event.key 
;    }
// If that key was correct show which letter they guessed correct (can be in multiple places)



// If that key was incorrect show the letter and minus one from remaining guesses
// If the user guesses the word before the reamining guesses is 0 add 1 to their win

var wins = 0;
var loses = 0;

// If the user does not guess the word correctly and their remaining guesses is 0 add plus 1 to their lose score



// If the user wins or loses restart the game and randomly select another word


