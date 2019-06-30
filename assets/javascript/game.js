// Computer randomly chooses a word from the word array

var wordCatalog = ["Accio", "Azkaban", "Basilisk", "Butterbeer", "Dementor", "Deathly Hallows", "Diagon Alley", "Divination", "Dobby", "Expelliarmus", "Expecto patronum", "Firebolt", "Floo powder", "The Forbideen Forest", "Gillyweed", "Goblet of Fire", "Godric's Hollow", "Gryffindor", "Hufflepuff", "Hippogriff", "Hogsmeade", "Incendio", "Lumos", "Ministry of Magic", "Mudblood", "Muggle", "Nargles", "Nimbus Two Thousand", "Nox", "Obliviate", "Parseltongue", "Patronus", "Polyjuice Potion", "Privet Drive", "Quidditch", "Ravenclaw", "Seeker", "Slytherin", "Sorting Hat", "Squib", "Time Turner", "Transfiguration", "Wand", "Whomping Willow", "Wingardium Leviosa"]

var currentWord = wordCatalog[Math.floor(Math.random()*wordCatalog.length)];

console.log(wordCatalog)
console.log(currentWord)

// Assign remaining guesses to 10
// The empty lines are updated to match the number of characters in the array
// The user inputs a Key

    document.onkeyup = function() {
        var userGuess = String.fromCharCode(event.keyCode).toLowerCase();
        console.log(userGuess)
;    }
// If that key was correct show which letter they guessed correct (can be in multiple places)
// If that key was incorrect show the letter and minus one from remaining guesses
// If the user guesses the word before the reamining guesses is 0 add 1 to their win
// If the user does not guess the word correctly and their remaining guesses is 0 add plus 1 to their lose score
// If the user wins or loses restart the game and randomly select another word


