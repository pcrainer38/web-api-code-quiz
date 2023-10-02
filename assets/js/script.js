var startButton = document.querySelector(".button");
var questionEl = document.querySelector("#question");
var optionsEl = document.querySelector(".options");
var timerEl = document.getElementById(".time");
var initialsEl = document.querySelector("#initials");
var submitBtn = document.querySelector("#submit");

var currentQuestionIndex = 0;
var time = question.length * 15;
var timeLeft = 10;

// startButton.addEventListener("click", function () {
//     console.log("click");
// })

function playGame() {
    //hide start screen
    var startScreenEl = document.getElementById("start-screen");
    startScreenEl.setAttribute("class", "hide");
    
    // unhide question section
    questionEl.removeAttribute("class");

    //start timer
    timeID = setInterval(clockTick, 1000);

    //show starting time
    timeLeft.textContent = time;

    getQuestion();
}

function getQuestion() {
    var currentQuestion = question[currentQuestionIndex];

    // update title with current question
    var questionEl = document.getElementById("question");
    questionEl.textContent = currentQuestion.question;

    //clear out any old question options
    optionsEl.innerHTML = "";

    // loop over options
    currentQuestion.options.forEach(function(option, i) {
        // create a new button for each option
        var choiceNode = document.createElement("button");
        choiceNode.setAttribute("class", "choice");
        choiceNode.setAttribute("value", option);

        choiceNode.textContent = i + 1 + ". " + option;

        //attache click event listener to each option
        choiceNode.onclick = questionClick;

        //display on the page
        optionsEl.appendChild(choiceNode);
    
    });
}

function questionClick() {
    //check if user guessed wrong
    if (this.value !== questions[currentQuestionIndex].answer) {
        // penalize time
        time -= 15;

        if (time < 0) {
            time = 0;
        }
        // display new time on page
        timerEl.textContent = time;
        feedbackEl.textContent = "Wrong!";
        feedbackEl.style.color = "red";
        feedbackEl.style.fontSize = "400%";

    } else {
        feedbackEl.textContent = "Correct!";
        feedbackEl.style.color = "green";
        feedbackEl.style.fontSize = "400%";
    }
    
    // flash right/wrong feedback
    feedbackEl.setAttribute("class", "feedback");
    setTimeout(function() {
        feedbackEl.setAttribute("class", "feedback hide");
    },1000);

    // next question
    currentQuestionIndex++;

    //time checker
    if (currentQuestionIndex === questions.length) {
        quizEnd();
    } else {
        getQuestion();
    }
}

function quizEnd() {
        // stop timer
        clearInterval(timerId);
    

        // show end screen
    var endScreenEl = document.getElementById("end-screen");
    endScreenEl.removeAttribute("class");

    // show final score
    var finalScoreEl = document.getElementById("final-score");
    finalScoreEl.textContent = time;

    //hide questions section
    questionEl.setAttribute("class", "hide");
}

function clockTick() {
    // update time
    time--;
    timerEl.textContent = time;

    // check if user ran out of time
    if (time <= 0) {
        quizEnd();
    }
}

function saveHighScore() {
    //get value of input box
    var initials = initialsEl.value.trim();
    if (initials !== "") {
        //get saved scores from localstorage, or if not any, set to empty array
        var highscores =
        JSON.parse(window.localStorage.getItem("highscores")) || [];
    
        //format new score object for current user
        var newScore = {
            score: time,
            initials: initials
        };

        // save to localstorage
        highscores.push(newScore);
        window.localStorage.setItem("highscores", JSON.stringify(highscores));

        //redirect to next page
        window.location.href = "score.html";
    }
}

function checkforEnter(event) {
    // "13" represents the enter key
    if (event.key === "Enter") {
        saveHighScore();
    }
}

// submit initials
// submitBtn.onclick = saveHighscore;

// start quiz
// startButton.onclick = startQuiz;

// initialsEl.onkeyup = checkForEnter;


