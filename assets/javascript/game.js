// create variables

var wins = 0;
var loses = 0;
var remainingGuesses = 10;
var wordCatalog = ["accio", "azkaban", "basilisk", "butterbeer", "dementor", "divination", "dobby", "expelliarmus", "firebolt", "gillyweed", "gryffindor", "hufflepuff", "hippogriff", "hogsmeade", "incendio", "lumos", "mudblood", "muggle", "nargles", "nox", "obliviate", "parseltongue", "patronus", "quidditch", "ravenclaw", "seeker", "slytherin", "squib", "transfiguration", "wand"]

// randomly select a word

var word = wordCatalog[Math.floor(Math.random()*wordCatalog.length)];

console.log(`Remaining guesses ${remainingGuesses}`);
console.log(`Wins ${wins}`);
console.log(`Loses ${loses}`);
console.log(`Word catalog ${wordCatalog}`);
console.log(`chosen word ${word}`);

// create variables to hold values that will be referenced in HTML

var remainingLives = document.getElementById("remaining-lives");

// display total guesses allowed

remainingLives.textContent = remainingGuesses;

console.log(`Remaining Guesses ${remainingGuesses}`);

var incorrectGuess = document.getElementById("letters-guessed");
var winsText = document.getElementById("wins-text");
var lossesText = document.getElementById("losses-text");


console.log(`Remaining lives ${remainingLives}`);
console.log(`Wins Text ${winsText}`);
console.log(`Losses Text ${lossesText}`);


// Loop through word to define amount of underscores needed

var answer =[];
for (var i = 0; i < word.length; i++) {
    answer[i] = "_";  
    console.log(`answer ${answer}`);
}

// linking and determining underscore count

var generateUnderScores = document.getElementById("user-choice");
generateUnderScores.textContent = answer;
console.log(`generate underscores ${generateUnderScores}`);
console.log(`answer ${answer}`);

// variable for remaining letters in word

var remainingLetters = word.length;
console.log(`remaining letters ${remainingLetters}`);

  // create incorrect guess variable

  var incorrectGuessArray = [];

// The user inputs a key

    document.onkeyup = function(event) {
        var userGuess = event.key.toLowerCase();
        console.log(`user guess ${userGuess}`);

        // If key is correct show display character
        
        var correctGuess = false;

        for (var j = 0; j < word.length; j++) {
            if (word[j] === userGuess) {
                answer[j] = userGuess;
                correctGuess = true;  
                remainingLetters--;
                generateUnderScores.textContent = answer;
                console.log(`userGuess ${userGuess}`);
                console.log(`correct guess ${correctGuess}`);
                console.log(`generate unders scores ${generateUnderScores}`);
                console.log (`answer ${answer}`);
                console.log(`updated remaining letters ${remainingLetters}`);    
            };
        };

        if (!correctGuess) {
                
            // remaining guesses goes down 1
                
                remainingGuesses--;
                remainingLives.textContent = remainingGuesses;
                console.log(`remaining guesses ${remainingGuesses}`);
                console.log(`Remaining lives ${remainingLives}`);
                
            // add incorrect letter to incorrect guess variable
                
                incorrectGuessArray.push(" " + userGuess + " ");

            //displaying incorrect guesses
               
                incorrectGuess.textContent = incorrectGuessArray;
                console.log(`incorrect guess ${incorrectGuess}`);
                console.log(`incorrect guess array ${incorrectGuessArray}`);
            };

            
        if (remainingLetters = 0) {
            alert("You win!");

        };
        
    }

// If the user guesses the word before the reamining guesses is 0 add 1 to their win



// If the user does not guess the word correctly and their remaining guesses is 0 add plus 1 to their lose score



// If the user wins or loses restart the game and randomly select another word


// Displays win, losses, and remaining guesses

// remainingLives.textContent = remainingGuesses;
// winsText.textContent = "wins: " + wins;
// lossesText = "losses: " + loses;


