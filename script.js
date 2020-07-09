var questions = [{
  title: 'Commonly used data types DO NOT include:',
  choices: ['strings', 'booleans', 'alerts', 'numbers'],
  answer: 'alerts'
},
{
  title: 'The condition in an if / else statement is enclosed within ____.',
  choices: ['quotes', 'curly brackets', 'parentheses', 'square brackets'],
  answer: 'parentheses'

},

{
  title: 'Which built-in method combines the text of two strings and returns a new string?',
  choices: ['append()', 'concat()', 'parentheses', 'attach()'],
  answer: 'concat()'

},

{
  title: 'Which built-in method returns the string representation of the number\'s value?',
  choices: ['toValue()', 'toNumber()', 'toString()', 'attach()'],
  answer: 'toString()'

},

{
  title: 'Which of the following function of String object returns the characters in a string between two indexes into the string?',
  choices: ['slice()', 'split()', 'substr()', 'substring()'],
  answer: 'substring()'

}
];


var score = 0;
var time;
var questionNumber = 0;
var userChoice;


function startQuiz() {
var message = document.getElementById("message");
var quizSelection = document.getElementById("quizSelection");

message.style.display = "block";
quizSelection.style.display = "none";
if (message.style.display === "block") {
  message.style.display = "none";
  quizSelection.style.display = "block";
} else {
  message.style.display = "block";
  quizSelection.style.display = "none";
}

$("#comQuest").on("click", function () {
  countDown();
});


}

var userList = [];


$(document).ready(function () {
init();

function renderPreviousUser() {
  for (var i = 0; i < userList.length; i++) {
    var oldUser = userList[i];
    var previousUser = $("<li>");

    previousUser.append(oldUser);

    $("#previousUser").append(previousUser);
  }
}

function init() {


  var storedUser = JSON.parse(localStorage.getItem("userList"));

  if (storedUser !== null) {
    userList = storedUser;
  }
  renderPreviousUser();
}
});


function quizQuestions() {
var questionRow = document.getElementById("questions");
var quizSelection = document.getElementById("quizSelection");

quizSelection.style.display = "block";
if (quizSelection.style.display === "block") {
  quizSelection.style.display = "none";
  questionRow.style.display = "block";
} else {
  quizSelection.style.display = "block";
  questionRow.style.display = "none";
}

$("#title").children().hide();
$("#choices").children().hide();
$("#answer").children().hide();
$("#sign").children().hide();
$("#time").children().hide();


var showQuestion = $("<h2>");

showQuestion.append(questions[questionNumber].title);
$("#title").append(showQuestion);

for (i = 0; i < 4; i++) {

  var choiceOptions = $("<button>");
  choiceOptions.attr("type", "button");
  choiceOptions.attr("value", questions[questionNumber].choices[i]);
  choiceOptions.css("margin-top", "50px");
  choiceOptions.addClass("btn btn-primary btn-lg btn-block choices");
  choiceOptions.append(questions[questionNumber].choices[i]);
  $("#choices").append(choiceOptions);
}

}
var displayMessage = {
correct: "Correct",
incorrect: "Incorrect",
answerDisplay: "Correct answer: ",
quizComplete: "Quiz is complete",
finalScore: "Final score: ",
initials: "Enter initials: "
}


$(document).on("click", ".choices", function () {
userChoice = $(this).attr("value");
$("answer").empty


if (userChoice === questions[questionNumber].answer && timer > 0) {
  var result = $("<p>");
  result.append(displayMessage.correct);
  $("#answer").append(result)

  score += 2;

  questionNumber++;

  setTimeout(quizQuestions, 1500);


  if (questionNumber === questions.length) {
    setTimeout(finalPage, 2500);
    clearInterval(time);
  }
} else if (userChoice != questions[questionNumber].answer && timer > 0) {

  var result = $("<h5>");
  result.append(displayMessage.incorrect);
  $("#sign").append(result);

  var answer = $("<p>");
  answer.append(displayMessage.answerDisplay, questions[questionNumber].answer);
  $("#answer").append(answer);

  timer -= 5;
  score -= 2;
  questionNumber++;
  setTimeout(quizQuestions, 2000);


  if (questionNumber === questions.length) {
    setTimeout(finalPage, 2500);
    clearInterval(time);
  }
}
})


function finalPage() {
$("#completeMessage").children().show();
$("#finalScore").children().show();
$("#initials").children().show();

var comepleteMessage = $("<h5>");
comepleteMessage.append(displayMessage.quizComplete);
$("#completeMessage").append(comepleteMessage);


var finalScoreMsg = $("<p>");
finalScoreMsg = displayMessage.finalScore + score;
$("#finalScore").append(finalScoreMsg);


var initialMsg = $("<p>");
initialMsg.append(displayMessage.initials);
var initialBox = $("<input>");
initialBox.attr("type", "text");
initialBox.attr("id", "initialBox");
$("#initials").append(initialMsg, initialBox);


var initialSubmit = $("<button>");
initialSubmit.attr("type", "button");
initialSubmit.attr("id", "submitButton");
initialSubmit.css("margin-top", "50px");
initialSubmit.addClass("btn btn-primary btn-lg btn-block");
initialSubmit.html("Submit");
$("#submitButton").append(initialSubmit);


$("#submitButton").on("click", function () {
  var initialInput = document.getElementById("initialBox").value;
  var nameList = $("<p>");
  nameList.append(initialInput + " score is " + score);
  $("#nameList").append(nameList);

  $("#submitButton").children().hide();
  $("#resetButton").children().show();

  if (initialInput === "") {
    return;
  }

  userList.push(initialInput, score);
  console.log(userList);

  function storeUser() {
    localStorage.setItem("userList", JSON.stringify(userList));
  }

  storeUser();
  renderPreviousUser();

});


}


function countDown() {
$("#timer").empty();
timer = 75;
var timeDiv = $("<h6>");
timeDiv.append("Time left: " + timer + " seconds");
$("#timer").append(timeDiv);
time = setInterval(clock, 1000);

}

function clock() {
$("#timer").empty();
timer--;
var timeDiv = $("<h6>");
timeDiv.append("Time left: " + timer + " seconds");
$("#timer").append(timeDiv);

if (timer < 1) {
  $("#title").children().hide();
  $("#choices").children().hide();
  $("#answer").children().hide();
  $("#sign").children().hide();
  $("#timer").children().hide();

  setTimeout(finalPage, 1000);
  clearInterval(time);

}
}