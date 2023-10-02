// DOM elements
var questionEl = document.querySelector("#question");
// var optionsEl = document.querySelector("#options");
// var submitBtn = document.querySelector("#submit");
// var startBtn = document.querySelector("#start");
// var initialsEl = document.querySelector("#initials");
// var feedback = document.querySelector("#feedback");

// var currentQuestionIndex = 0;
var timeLeft = question.length * 5;



function playGame() {
    // hide start screen
    document.getElementById("start-now").innerHTML = "";
    document.getElementById("end-screen").innerHTML = ""; 

    questionEl.removeAttribute("class");

    // getQuestion();    
}

// start timer
var timeInterval = setInterval (function() {
    if (timeLeft > 0) {
        timeInterval.textContent = timeLeft;
        timeLeft--;  
    } 
})

function getQuestion() {
    var questionContainer = document.getElementById("question");

    question.forEach(function(questionObj) {
        var questionElement = document.createElement("div");
        questionElement.innerText = questionObj.question;

        questionContainer.appendChild(questionElement);
    }) 

}

