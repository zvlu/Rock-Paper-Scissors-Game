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
    console.log(Math.random()* 3);
}

getCompChoice();

function game (userChoice) {
    

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
