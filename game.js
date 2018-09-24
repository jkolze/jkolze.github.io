//Crystal collecter

//var elements wins, loses, total
var wins = 0;
var losses = 0;
var userTotal = 0;

// Sets up numbers to crystals
var number1= Math.floor(Math.random()*11+1);
var number2= Math.floor(Math.random()*11+1);
var number3= Math.floor(Math.random()*11+1);
var number4= Math.floor(Math.random()*11+1);

//# between 19 and 120 is selected
$(document ).ready(function(){
var Random=Math.floor(Math.random()*101+19);

// Calls to HTML
$("#randomNumber").text(Random);

//Declares variables for points
$("#numberWins").text(wins);
$("#numberLosses").text(losses);

//Reset function
function reset(){
Random=Math.floor(Math.random()*101+19);
console.log(Random)
$('#randomNumber').text(Random);
num1= Math.floor(Math.random()*11+1);
num2= Math.floor(Math.random()*11+1);
num3= Math.floor(Math.random()*11+1);
num4= Math.floor(Math.random()*11+1);
userTotal= 0;
$('#finalTotal').text(userTotal);
} 


//Wins, add to total
function winner(){
    alert ("You win this round! Woo!");
    wins++;
    $('#numberWins').text(wins);
    reset();
}

//Loses, add to score
function lose(){
    alert("You lost!");
    losses++;
    $('#numberLosses').text(losses);
} 

// clicks for jewels
$('#one').on ('click', function(){
userTotal= userTotal + number1;
$('#finalTotal').text(userTotal);
if (userTotal == Random){
    winner();
}

else if (userTotal > Random) {
    lose();

}
})

$('#two').on ('click', function(){
    userTotal= userTotal + number2;
    $('#finalTotal').text(userTotal);
    if (userTotal == Random){
        winner();
    }
    
    else if (userTotal > Random) {
        lose();
    
    }
    })
    $('#three').on ('click', function(){
        userTotal= userTotal + number3;
        $('#finalTotal').text(userTotal);
        if (userTotal == Random){
            winner();
        }
        
        else if (userTotal > Random) {
            lose();
        
        }
        })
        $('#four').on ('click', function(){
            userTotal= userTotal + number4;
            $('#finalTotal').text(userTotal);
            if (userTotal == Random){
                winner();
            }
            
            else if (userTotal > Random) {
                lose();
            
            }

});
});