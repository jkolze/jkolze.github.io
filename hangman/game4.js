// Word option
var wordList = ["Pacman", "Mario", "Asteriods", "Defenders", "Centopede", "Galaxian"]

var chosenWord = "";
var letterInChosenWord = [];
var numberBlanks= 0;
var blanksAndSuccesses =[];
var wrongGuesses= [];

//Wins, loses, and guesses

var winCounter = 0;
var lossCounter = 1;
var numberGuesses = 6;
console.log("winCounter");
console.log("lossCounter");
console.log("numberGuesses");


//Start
function startGame(){
wrongGuesses=[];
console.log("wrong guess");

// User only gets 6 guesses
numberGuesses=6;
blanksAndSuccesses=[];

// Randomly Picks word and number of blanks
chosenWord = wordList[Math.floor(Math.random() * wordList.length)];
lettersInChosenWord = chosenWord.split("");
numberBlanks= lettersInChosenWord.length;

console.log(chosenWord);
console.log(numberBlanks);

// Determines amount of blank spaces needed
    for(var i= 0; i < numberBlanks; i++){
        blanksAndSuccesses.push("_");
    }

console.log(blanksAndSuccesses);

document.getElementById('word-blank').innerHTML = blanksAndSuccesses.join(" ");
document.getElementById('guesses-left').innerHTML = numberGuesses;
}

// Checks if letters are in picked word
function checkLetters(letter){

    var letterInWord = false;

    for(var i=0; i < numberBlanks; i++){
       
        if(chosenWord[i] === letter){
            letterInWord=true;
        }
    }
    if(letterInWord){
        for (i = 0; i < numberBlanks; i++){
            if(chosenWord[i] === letter){
                blanksAndSuccesses[i]=letter;
            }
        }

    }else{
            numberGuesses --;
            wrongGuesses.push(letter)
            
        }

    }
// function
function roundDone() {
document.getElementById('word-blank').innerHTML= blanksAndSuccesses.join(" ");
document.getElementById('guesses-left').innerHTML = numberGuesses;
document.getElementById('wrong-guesses').innerHTML= wrongGuesses.join(" ");

// if(blanksAndSuccesses.indexOf(letter >= 1)){
//     console.log(Blanks and successes);
// }
    
    if(lettersInChosenWord.join(" ") === blanksAndSuccesses.join (" ")){
        winCounter++;
        window.alert("You are a winner!");
        document.getElementById('win-counter').innerHTML = winCounter;

    startGame();

    } else if(numberGuesses=== 0) { // If user loses or runs out of guesses
        document.getElementById('loss-counter').innerHTML = lossCounter ++;
        document.getElementById('wrong-guesses').innerHTML = "";
        alert("You have no more guesses, bummer!");
        startGame();
        console.log("actual letters in word");
    }
}
    startGame ();
    document.onkeyup = function(event){
        // Makes answers lowercase
        var letterGuessed = String.fromCharCode(event.keyCode).toLowerCase();
        checkLetters(letterGuessed);
        roundDone();
        console.log("Letter typed");

    }
