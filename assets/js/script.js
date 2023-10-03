// DOM elements
var questionEl = document.querySelector("#question");
var optionsEl = document.querySelector("#options");
// var submitBtn = document.querySelector("#submit");
// var startBtn = document.querySelector("#start");
// var initialsEl = document.querySelector("#initials");
var feedback = document.querySelector("#feedback");

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
    titleEl.textContent = currentQuestion.title;

    optionsEl.innerHTML = "";

    currentQuestion.options.forEach(function(choice, i) {
        var choiceNode = document.createElement("button");
        choiceNode.setAttribute("class", "options");
        choiceNode.setAttribute("value", options);

        choiceNode.textContent = i + 1 + ". " + options;

        choiceNode.onclick = questionClick;

        optionsEl.appendChild(choiceNode);
    });
}

function questionClick() {
    if (this.value !== question[currentQuestionIndex].answer) {
        time -= 10;

        if (time < 0) {
            time = 0;
        }

        timerEl.textContent = time;
        feedbackEl.textContent = "Wrong!";
        feedbackEl.style.color = "red";
        feedbackEl.style.fontSize = "400%";
    } else {
        feedbackEl.textContent = "Correct!";
        feedbackEl.style.color = "green";
        feedbackEl.style.fontSize = "400%";
    }

    feedbackEl.setAttribute("class", "feedback");
    setTimeout(function() {
        feedbackEl.setAttribute("class", "feedback hide");
    }, 1000);

    currentQuestionIndex++;

    if (currentQuestionIndex === question.length) {
        quizEnd();
    }
}

