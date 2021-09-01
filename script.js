// var Q1 = "What is the name of the HTML element that we put JavaScript in?";

// var Q2 = "Where is the correct place to insert a JavaScript?";

// var Q3 =
//   "What is the correct syntax for referring to an external script called 'xxx.js'?";

// var Q4 = "What is the correc way to write 'message' in an alert box?";

// var Q5 = "How do you create a function in JavaScript?";

// var Q6 = "How do you call a function named xFunction?";

var start = document.querySelector("#startQuiz");
var printQuestion = document.querySelector("#question");
var multipleAnswers = document.querySelector("#choices");
var timex = document.querySelector("#timer");
var score = document.querySelector("#score");

var scoreLog = document.querySelector("#highscore");
var congrats = document.querySelector("#Congratulations");
var playAgain = document.querySelector("#playAgain");
var init = document.querySelector("#initials");
var tG = JSON.parse(window.localStorage.getItem("highscore")) || [];
var questionCounter = 0;
var scoreKeeper = 0;

// var answerCounter = 0;

start.addEventListener("click", startQuiz);

function startQuiz() {
  document.getElementById("startQuiz").style.display = "none";
  startTimer();
  // var firstQuestion = variable1[questionCounter].question;
  // printQuestion = firstQuestion.textContent;
  viewAnswers();
}
// viewAnswers();
// nextQuestion();

// function quizFlow(){
//   viewAnswers()
// }
// }

function viewAnswers() {
  multipleAnswers.innerHTML = "";
  printQuestion.textContent = variable1[questionCounter].question;
  for (var i = 0; i < 4; i++) {
    var singleChoice = document.createElement("button");
    singleChoice.onclick = checkAnswer;
    singleChoice.textContent = variable1[questionCounter].choices[i];
    multipleAnswers.append(singleChoice);

    // }questionCounter++;
  }

  function checkAnswer() {
    console.log("I was checked");
    console.log(this.textContent);
    if (this.textContent === variable1[questionCounter].correctAnswer) {
      //thie is code to add points to score sheet and move to next question
      scoreKeeper += 5;
      console.log(scoreKeeper);
      score.textContent = "your score is " + scoreKeeper;
      console.log("correct");
    } else {
      console.log("incorrect");
      secondsLeft = secondsLeft - 5;

      //subtract points?  definitely subtract time
    }
    if (questionCounter < variable1.length - 1) {
      questionCounter++;
    } else questionCounter = 0;

    viewAnswers();
  }
  printQuestion.textContent = variable1[questionCounter].question;
}

secondsLeft = 30;

function startTimer() {
  var timerInterval = setInterval(function () {
    secondsLeft--;
    timex.textContent = secondsLeft + "seconds left";

    if (secondsLeft <= 0) {
      clearInterval(timerInterval);
      gameOver();
    }
  }, 1000);
}

function scLog() {
  var output = "";
  for (var i = 0; i < tG.length; i++) {
    output += "<li> Player: " + tG[i].initials + " Score: " + tG[i].score + "</li>";
  }
  document.getElementById("tG").innerHTML = output;
  console.log(tG);
}

function gameOver() {
  document.querySelector(".questionCard").classList.add("hidden");
  document.querySelector(".scoresheet").classList.remove("hidden");
  console.log("testing gameOver function");
  
}


document.getElementById("submitInit").addEventListener("click",topGun);


function topGun() {
  var initials = init.value.trim();
  console.log(tG)
  if (initials !== "") {
    var newScore = {
      score: scoreKeeper,
      initials: initials,
    };
    tG.push(newScore);
    window.localStorage.setItem("highscore", JSON.stringify(tG));
    scLog()
  }
}

// if (scoreKeeper > highscoreKeeper) {
//   var tG = localStorage.getItem("highscore");
//   localStorage.setItem("highscore", highscoreKeeper);
//   console.log("This should log for new highscore");
//   highscoreKeeper = scoreKeeper;
//   congrats.textContent =
//     "Congratulations!  You have the new high score record of " +
//     highscoreKeeper;
//   highscoreKeeper.textContent = highscore;
// playAgain.addEventListener("click", startQuiz);
// } else {
//   console.log("display old high score");
// totalEnd.textContent = "This was your total score:" + scoreKeeper;
// tG.textContent = highscore;
//     // playAgain.addEventListener("click", startQuiz);
//   }
// // }
playAgain.addEventListener("click", restart);

function restart() {
  // document.getElementById("startQuiz").style.display = "none";
  // document.getElementsByClassName("questionCard")[0].style.visibility =
  //   "visible ";
  document.querySelector(".scoresheet").classList.add("hidden");
  document.querySelector(".questionCard").classList.remove("hidden");
  secondsLeft = 30;
  // scoreKeeper = 0;
  startTimer();
  viewAnswers();
}

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
