// DOM elements
var questionEl = document.querySelector("#question");
var optionsEl = document.querySelector("#options");
// var submitBtn = document.querySelector("#submit");
// var startBtn = document.querySelector("#start");
// var initialsEl = document.querySelector("#initials");
var feedbackEl = document.querySelector("#feedback");
var timerEl = document.querySelector("#time");

var currentQuestionIndex = 0;


document.getElementById("end-screen").innerHTML = "";

function playGame() {
    // hide start screen
    document.getElementById("start-now").innerHTML = "";
     
    questionEl.removeAttribute("class");
    timer();
    getQuestion();    
}
// timer
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
    var currentQuestion = question[currentQuestionIndex];

    var titleEl = document.getElementById("questiontitle");
    titleEl.textContent = currentQuestion.questiontitle;
    
    // clears out old question choices
    optionsEl.innerHTML = "";

    // loops over options
    currentQuestion.options.forEach(function(choice, i) {
        // creates button for each option
        var choiceNode = document.createElement("button");
        choiceNode.setAttribute("class", "options");
        choiceNode.setAttribute("value", choice);

        choiceNode.textContent = i + 1 + ". " + choice;

        choiceNode.onclick = questionClick;

        optionsEl.appendChild(choiceNode);
        
    });
}

function questionClick() {
    // check user's answer
    if (this.value !== question[currentQuestionIndex].answer) {
        time -= 10;

        if (time < 0) {
            time = 0;
        }

        timerEl.textContent = time;
        feedbackEl.textContent = "Nope!";
        feedbackEl.style.color = "red";
        feedbackEl.style.fontSize = "300%";
    } else {
        feedbackEl.textContent = "You got it!";
        feedbackEl.style.color = "green";
        feedbackEl.style.fontSize = "300%";
    }

    currentQuestionIndex++;

    if (currentQuestionIndex === question.length) {
        quizEnd();
    } else {
        getQuestion();
    }
}

function quizEnd() {
    // stop timer
    clearInterval(timer);

    // unhide end screen
    var endScreenEl = document.getElementById("end-screen");
    endScreenEl.removeAttribute("class");

    // show final score
    var finalScoreEl = document.getElementById("final-score");
    finalScoreEl.textContent = timer;

    // hide questions section
    questionEl.setAttribute("class", "hide");
}

function clock() {
    time--;
    timerEl.textContent = time;

    if (time <= 0) {
        quizEnd();
    }
}