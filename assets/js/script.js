var startButton = document.querySelector(".button");
var timeEl = document.getElementById(".time");

var secondsLeft = 10;

startButton.addEventListener("click", function () {
    console.log("click");
})

function setTime() {
    var timerInterval = setInterval (function(){
        secondsLeft--;
        // timeEl.textContent = secondsLeft;

        if (secondsLeft === 0) {
            clearInterval(timerInterval);

            console.log("times up");
        }
    }, 10000);
}

setTime();

// Question and answers 
var Questions = [ {  
q: "A ___ is used to iterate throught an array.",
a: [{text: "for loop", isCorrect: true},
{text: "if statement", isCorrect: false},
{text: "object", isCorrect: false},
{text: "eventListener", isCorrect: false}
]
},

{q: "An else...if statement must end with ____.",
a: [{text: "an else", isCorrect: true},
{text: "an if", isCorrect: false},
{text: "a for loop", isCorrect: false},
{text: "an array", isCorrect: false}
]
}

// {q: "An array can contain a list of numbers, objects or ____.",
// a: [{text: "variables", isCorrect: false},
// {text: "meta-data", isCorrect: false},
// {text: "strings", isCorrect: true},
// {text: "if statements", isCorrect: false}
// ]}
 
]

var currQuestion = 0;
var score = 0;

function loadQues() {
    var question = document.getElementById("#ques");
    var opt = document.getElementById("#opt");

    question.textContent = Questions[currQuestion].q;
    opt.innerHTML = "";

}

loadQues();