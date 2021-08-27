var Q1 = "What is the name of the HTML element that we put JavaScript in?";

var Q2 = "Where is the correct place to insert a JavaScript?";

var Q3 ="What is the correct syntax for referring to an external script called 'xxx.js'?";

var Q4 = "What is the correc way to write 'message' in an alert box?";

var Q5 = "How do you create a function in JavaScript?";

var Q6 = "How do you call a function named xFunction?";


var start = document.querySelector("#startQuiz");
var printQuestion = document.querySelector("#question");
var multipleAnswers = document.querySelector("#choices");
var timex = document.querySelector("#timer");
//  var currentQuestion = start;

var questionCounter = 0;
// var answerCounter = 0;

start.addEventListener("click", startQuiz);

function startQuiz() {
  // <button onclick="w3.hide('#start')">Hide</button>;
  document.getElementById("startQuiz").style.display= "none";
  startTimer();
  printQuestion.textContent = variable1[questionCounter].question;
  viewAnswers();
  }

function viewAnswers() {
  for (var i = 0; i < 4; i++) {
    var singleChoice = document.createElement("button");
    singleChoice.onclick = checkAnswer;
    singleChoice.textContent = variable1[questionCounter].choices[i];
    multipleAnswers.append(singleChoice);
    // checkAnswer();
  }
}

//check answer before answerCounter
// answerCounter++;

//   if (answerCounter > 5) {
//     answerCounter = 0;
//   }
// }

function checkAnswer() {
  console.log("I was checked");
  console.log(this.textContent);
  if (this.textContent === variable1[questionCounter].correctAnswer) {
    //thie is code to add points to score sheet and move to next question

    console.log("correct");
    questionCounter++;
  } else{
    console.log("incorrect");
    secondsLeft=secondsLeft-5;
    //subtract points?  definitely subtract time
  }
  // questionCounter++;
  //question counter here
  //recall function of viewAnswers
}

secondsLeft = 30;

function startTimer() {
  var timerInterval = setInterval(function () {
    secondsLeft--;
    timex.textContent = secondsLeft + "seconds left";

    if (secondsLeft === 0) {
      clearInterval(timerInterval);
    }
  }, 1000);
}

// function endGame() {
//   alert("hello");
//   return;
// }

var variable1 = [
  {
    question: "What is the name of the HTML element that we put JavaScript in?",
    choices: [
      "a) <script>",
      "b) <h> ",
      "c)  <p>",
      "d)  what is an HTML element?",
    ],
    correctAnswer: "a) <script>",
  },
  {
    question: "Where is the correct place to insert a JavaScript?",
    choices: [
      "a) In the body of the HTML.  ",
      "b) In the heading of the HTML.    ",
      "c)  In the CSS file.   ",
      "d)  It is the lefover code, we put it in the trash.    ",
    ],
    correctAnswer: "a) In the body of the HTML.  ",
  },

  {
    question:
      "What is the correct syntax for referring to an external script called 'xxx.js'?",
    choices: [
      " a) href=xxx.js  ",
      " b) <link rel='stylesheet'  ",
      " c) <script src='xxx. js'>    ",
      " d) type=xxx.js   ",
    ],
    correctAnswer: " c) <script src='xxx. js'>    ",
  },

  {
    question: " What is the correct way to write 'message' in an alert box?",
    choices: [
      " a) message:alert   ",
      " b) message:'alert'     ",
      " c) alert!(message)     ",
      " d) alert('message')",
    ],
    correctAnswer: " d) alert('message')",
  },

  {
    question: " How do you create a function in JavaScript?",
    choices: [
      " a) call function{entercode here}    ",
      " b) function(function name){lines of code here}    ",
      " c) function functionName(){lines of code here};     ",
      " d)  alert(function)(lines of code here)   ",
    ],
    correctAnswer: " c) function functionName(){lines of code here};     ",
  },
  {
    question: " How do you call a function named xFunction?",
    choices: [
      " a) call xFunction{xFunction}    ",
      " b) xFunction();     ",
      " c) xFunction911(in emergencies only)    ",
      "d) callElementByID.xFunction     ",
    ],
    correctAnswer: " b) xFunction();     ",
  },
];

// console.log(variable1[questionCounter].question)
// // questionCounter++;
// console.log(variable1[questionCounter].question)
