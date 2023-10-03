// DOM elements
var optionsEl = document.querySelector("#options");
var initialsEl = document.querySelector("#initials");
var feedbackEl = document.querySelector("#feedback");
var timerEl = document.querySelector("#time");
var submitEl = document.querySelector("#submit");

var currentQuestionIndex = 0;


document.getElementById("end-screen").setAttribute("hidden", "");

function playGame() {
    // hide start screen
    document.getElementById("start-now").innerHTML = "";
    

    document.getElementById("question").removeAttribute("hidden", "");
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
        var userChoice = document.createElement("button");
        userChoice.setAttribute("class", "options");
        userChoice.setAttribute("value", choice);

        userChoice.textContent = i + 1 + ". " + choice;

        userChoice.onclick = checkAnswers;

        optionsEl.appendChild(userChoice);
        
    });
}

function checkAnswers() {
    // check user's answer
    if (this.value !== question[currentQuestionIndex].answer) {
        time -= 5;

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
    // advances question
    currentQuestionIndex++;

    // if all questions have been answered end quiz
    if (currentQuestionIndex == question.length) {
        quizEnd();
    } else {
        getQuestion();
    }
}

function quizEnd() {
    // stop timer
    clearInterval(timer);

    // unhide end screen
    document.getElementById("end-screen").removeAttribute("hidden", "");

    // show final score
    var finalScoreEl = document.getElementById("final-score");
    finalScoreEl.textContent = time;

    // hide questions section
    document.getElementById("question").setAttribute("hidden", "");
}

