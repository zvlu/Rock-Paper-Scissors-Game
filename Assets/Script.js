//        ***Cache DOM***      //

// 2 Score Variables for Game

const userScore = 0;
const computerScore = 0;

// ****DOM element VARIABLES (What User Sees)***

//User and Computer Scores
const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("computer-score");

//Scoreboard itself
const scoreBoard_div = document.querySelector (".score-board");

const result_div = document.querySelector(".result");

// Selections
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissors_div = document.getElementById("s");

// Random Computer Choice

function getCompChoice () {
    const choices = ["r", "p" , "s"];
    // Randomizer
    const randomNumber = Math.floor(Math.random()*3);
    // return with random choice array
    return choices[randomNumber];
    
}
var wins = userScore +1;
var tie = userScore + computerScore +1;
var loss = computerScore +1;
var computerGuess = getCompChoice(); 

function game (userChoice) {
    const computerChoice = getCompChoice();
    // console.log("comp ===>" + computerChoice);
    // console.log("userchoice =====>" + userChoice);
    if (userChoice === "r" || userChoice === "p" || userChoice === "s") {
        // Win/lose conditions:
        if  ((userChoice === "r" && computerGuess === "s") ||
        (userChoice === "s" && computerGuess === "p") || 
        (userChoice === "p" && computerGuess === "r")){
            console.log("User Wins");
            wins ++;
        } else if (userChoice === computerChoice) {
            console.log("Tie");
            tie ++;
        } else {
            console.log("Loss");
            loss++;

        }
    }

}




// Event Listeners for selections
function main () { 
    rock_div.addEventListener("click", function(){
        game ("r")
        
    })

    paper_div.addEventListener ("click", function(){
        game ("p")
        
    })

    scissors_div.addEventListener ("click", function(){
        game ("s")
       
    })
}
main ();
