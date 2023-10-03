// DOM elements
var questionEl = document.querySelector("#question");
// var optionsEl = document.querySelector("#options");
// var submitBtn = document.querySelector("#submit");
// var startBtn = document.querySelector("#start");
// var initialsEl = document.querySelector("#initials");
// var feedback = document.querySelector("#feedback");

var currentQuestionIndex = 0;


document.getElementById("end-screen").innerHTML = "";

function playGame() {
    // hide start screen
    document.getElementById("start-now").innerHTML = "";
     
    questionEl.removeAttribute("class");
    timer();
    getQuestion();    
}

function timer() {
    var sec = question.length * 5;
    var timer = setInterval(function() {
        document.getElementById('time').innerHTML='00:'+sec;
        sec--;
        if (sec < 0) {
            clearInterval(timer);
        }
    }, 1000);
}


function getQuestion() {
    var questionContainer = document.getElementById("question");

    question.forEach(function(questionObj) {
        var questionElement = document.createElement("div");
        questionElement.innerText = questionObj.question;

        questionContainer.appendChild(questionElement);
    }) 

}

