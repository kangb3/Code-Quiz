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


  function startQuiz(){
    var message = document.getElementById("message");

    message.style.display = "block";

    if (message.style.display === "block"){
      message.style.display = "none";
    }
    else{
        message.style.display = "block";

    }
}

// function quizQuestions() {
//   var questionRow = document.getElementById("questionRow");

//   if (questionRow.style.display === "block"){
//     questionRow.style.display = "none";
//   }
//   else{
//       message.style.display = "block";

//   }
}