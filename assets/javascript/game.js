// create variables
var wins = 0;
var loses = 0;
var remainingGuesses = 10;
var wordCatalog = ["accio", "azkaban", "basilisk", "butterbeer", "dementor", "divination", "dobby", "expelliarmus", "firebolt", "gillyweed", "gryffindor", "hufflepuff", "hippogriff", "hogsmeade", "incendio", "lumos", "mudblood", "muggle", "nargles", "nox", "obliviate", "parseltongue", "patronus", "quidditch", "ravenclaw", "seeker", "slytherin", "squib", "transfiguration", "wand"]

var remainingLives = document.getElementById("remaining-lives");
// display total guesses allowed
remainingLives.textContent = remainingGuesses;
console.log(`Remaining Guesses ${remainingGuesses}`);
var incorrectGuess = document.getElementById("letters-guessed");
var winsText = document.getElementById("wins-text");
var lossesText = document.getElementById("losses-text");

var incorrectGuessArray = [];

var word,
    wordArray = [],
    answerArray = [],
    remainingLetters,
    generateUnderScores;

    /////////////////////////////// function to choose word ///////////////////////////

function chooseWordtoGuess() {
    // randomly select a word
    word = wordCatalog[Math.floor(Math.random()*wordCatalog.length)];
    console.log(`chosen word ${word}`);
    wordArray = word.split("");
    console.log(`word array: ${wordArray}`);
    answerArray = [];
    for (var i = 0; i < wordArray.length; i++) {
        answerArray[i] = "_";  
        // console.log(`answer ${answerArray}`);
    }
    // linking and determining underscore count
    generateUnderScores = document.getElementById("user-choice");
    generateUnderScores.textContent = answerArray;
   
    // variable for remaining letters in word
    remainingLetters = wordArray.length;
    console.log(`remaining letters AT START ${remainingLetters}`);
};
chooseWordtoGuess();

////////////////////////////// end function to choose word ///////////////////////////

/////////////////////////////////////////////////////// main game loop//////////////////////////////////////////

// The user inputs a key

function mainGameLoop() {
    document.onkeyup = function(event) {
        var userGuess = event.key.toLowerCase();
        console.log(`USER GUESS ${userGuess}`);
        console.log(`Remaining guesses ${remainingGuesses}`);
        // If key is correct show display character
        
        var correctGuess = false;
        for (var j = 0; j < wordArray.length; j++) {
            if (wordArray[j] === userGuess) {
                answerArray[j] = userGuess;
                correctGuess = true;  
                
            //update remaining letters should not reduce if you already guesses that letter
                // store user guesses
                var userGuessArray = [];


                // compare guess with guesses already made

                // if the guess has not already been made -1 from remaining letters

                // if the guess has already been made do nothing

                remainingLetters--;
                generateUnderScores.textContent = answerArray;
                // console.log(`userGuess ${userGuess}`);
                // console.log(`correct guess ${correctGuess}`);
                // console.log(`generate unders scores ${generateUnderScores}`);
                // console.log (`answer ${answer}`);
                console.log("HEY LOOK AT ME ====================");
                console.log(`updated remaining letters ${remainingLetters}`);  
            }
        };
        if (!correctGuess) {
                
            // remaining guesses goes down 1
                
                remainingGuesses--;
                remainingLives.textContent = remainingGuesses;
                // console.log(`remaining guesses ${remainingGuesses}`);
                // console.log(`Remaining lives ${remainingLives}`);
                
            // add incorrect letter to incorrect guess variable
                
                // incorrectGuessArray.push(" " + userGuess + " ");
                incorrectGuessArray.push(userGuess);
            //displaying incorrect guesses
               
                incorrectGuess.textContent = incorrectGuessArray;
                // console.log(`incorrect guess ${incorrectGuess}`);
                console.log(`incorrect guess array ${incorrectGuessArray}`);
            };
            
        // If the user guesses the word before the remaining guesses is 0 add 1 to their win
        if (remainingLetters <= 0) {
            alert("You win!");
            wins++;
            console.log(`WIN after if statement ${wins}`);
        };

        // If the user does not guess the word correctly and their remaining guesses is 0 add plus 1 to their lose score
        if ((remainingLetters >=0) && (remainingGuesses <= 0)) {
            alert("You lose!");
            loses++;
            console.log(`LOSE after if statement ${loses}`);
        };
        

        // Displays win and losses
        winsText.textContent = wins;
        lossesText.textContent = loses;

    }
}

mainGameLoop();

//////////////////////////////////////////////// end main game loop ///////////////////////////////////////////////////////////

// on restart click re-run main game loop function

document.getElementById("restart").onclick = function()
{
chooseWordtoGuess()
mainGameLoop();
}