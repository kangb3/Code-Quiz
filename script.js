var questions = [
    {
      title: 'Commonly used data types DO NOT include:',
      choices: ['strings', 'booleans', 'alerts', 'numbers'],
      answer: 'alerts'
    },
    {
      title: 'The condition in an if / else statement is enclosed within ____.',
      choices: ['quotes', 'curly brackets', 'parentheses', 'square brackets'],
      answer: 'parentheses'
      
    }
  ];

  var score = 0;
  var time;
  var questionNumber = 0;
  var userChoice;

  function startQuiz(){
    var message = document.getElementById("message");
    var quizSelection = document.getElementById("quizSelection");

    message.style.display = "block";
    quizSelection.style.display = "none";
    if (message.style.display === "block"){
        message.style.display = "none";
        quizSelection.style.display = "block";
    }
    else{
        message.style.display = "block";
        quizSelection.style.display = "none";

   
}

$("#comQuest").on("click", function(){
  countDown();
  });

function quizQuestions() {
  var questionRow = document.getElementById("questionRow");

  quizSelection.style.display = "block"
  quizOption.style.display = "none";
  if (quizSelection.style.display === "block"){
    quizSelection.style.display = "none"
    questionRow.style.display = "block";
  }
  else{
    quizSelection.display = "block";
      questionRow.style.display = "none";

  }
  

  $("#title").children().hide();
  $("#choices").children().hide();
  $("#answer").children().hide();
  // $("#sign").children().hide();
  // $("#timer").children().hide();

  var showQuestion = $("<h2>");
  showQuestion.attr("id", questions[questionNumber].choices);
  showQuestion.append(questions[questionNumber].title);
  $("#title").append(showQuestion);

  

  for (var i = 0; i < 4; i++) {

    var choiceList = $("<button>");
    choiceList.attr("type", "button");
    choiceList.attr("value", questions[questionNumber].choices[i]);
    choiceList.css("margin-top", "50px");
    choiceList.addClass("btn btn-secondary btn-lg btn-block choices");
    choiceList.append(questions[questionNum].choices[i]);
    $("#choices").append(choiceList);
  }

  function countDown(){
    $("#timer").empty();
    timer = 75;
    var timeDiv = $("<h6>");
    timeDiv.append("Time remaining: " + timer + "seconds");
    $("#timer").append(timeDiv);
    time = setInterval(clock, 1000);
    
    }
    
    function clock(){
    $("#timer").empty();
    timer--;
    var timeDiv = $("<h6>");
    timeDiv.append("Time remaining: " + timer + "seconds");
    $("#timer").append(timeDiv);
    
    if(timer < 1){
        $("#title").children().hide();
        $("#choices").children().hide();
        $("#answer").children().hide();
        $("#sign").children().hide();
        $("#timer").children().hide();
    
        setTimeout(finalPage, 1000);
        clearInterval(time);


  
}