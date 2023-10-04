// DOM elements
var optionsEl = document.querySelector("#options");
var initialsEl = document.querySelector("#initials");
var feedbackEl = document.querySelector("#feedback");
var timerEl = document.querySelector("#time");
var submitEl = document.querySelector("#newsubmit");
var hscoresEl = document.querySelector("#hscores");

var currentQuestionIndex = 0;


document.getElementById("end-screen").setAttribute("hidden", "");
document.getElementById("highscores").setAttribute("hidden", "");


var timer;
var sec;

 

function playGame() {
    // hide start screen
    document.getElementById("start-now").innerHTML = "";
    document.getElementById("highscores").innerHTML = "";

    document.getElementById("question").removeAttribute("hidden", "");
    clock();
    getQuestion();    
}

// timer
function clock() {
    sec = question.length * 5;
    timer = setInterval(function() {
        document.getElementById('time').innerHTML='00:'+sec;
        sec--;
        if (sec <= 0) {
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
        sec -= 5;

        if (sec < 0) {
            sec = 0;
        }

        timerEl.textContent = sec;
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
    finalScoreEl.textContent = sec;

    // hide questions section
    document.getElementById("question").setAttribute("hidden", "");

    // hide feedback
    document.getElementById("feedback").setAttribute("hidden", "");
}

function getHighScores () {
    document.getElementById("end-screen").setAttribute("hidden", "");
    document.getElementById("highscores").removeAttribute("hidden", "");
    var savedScores = JSON.parse(localStorage.getItem("savedScores"));     
    for (var i = 0; i < savedScores.length; i++) {
        var newLi = document.createElement("li");
        newLi.textContent = savedScores[i].initials + " - " + savedScores[i].score;
        document.getElementById("highscores").append(newLi);
    }
}
hscoresEl.onclick = getHighScores;

function saveScore () {
    console.log("savescore");
    var data = {
        initials: initialsEl.value,
        score: sec
    }
    console.log(data);

    var highscores = JSON.parse(window.localStorage.getItem('savedScores')) || [];
      highscores.push(data);
      console.log("HS" + highscores);
      window.localStorage.setItem('savedScores', JSON.stringify(highscores));

    
    getHighScores();
}
submitEl.onclick = saveScore;