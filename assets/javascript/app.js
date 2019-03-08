$(document).ready(function(){
  var audioElement = document.createElement("audio");
  audioElement.setAttribute("src", "../TriviaGame/stranger-things-theme-song.mp3");
  $("#playtheme").click(function() {
      audioElement.play()
  });

  var answersRight = 0;
  var answersWrong = 0; 
  var totalScore = 0;
   
  $('#startbutton').click(function() {
    function timer() {
      count=count-1;
      if (count <= 0) {
        clearInterval(counter);
        document.getElementById("loser1").innerHTML="You lose!";
      }
      document.getElementById("timer").innerHTML=count + " secs";
      return;
      //Do code for showing the number of seconds here
    }

    var count=46;
    var counter=setInterval(timer, 1000); //1000 will  run it every 1 second 
  });

  function pushQuestion(stQuestion) {
    $("#questions").html(stQuestion.question);
    console.log(stQuestion.answers);
    $("#a").html(stQuestion.answers[0]); 
    $("#b").html(stQuestion.answers[1]);  
    $("#c").html(stQuestion.answers[2]);
    $("#d").html(stQuestion.answers[3]);    
  }

  // function pushQuestion() {
  //   $(this).hide();
  //   $("#questions").html(stQuestion2.questions2);
  //   console.log(stQuestion1.answers);
  //   $("#a").html(stQuestion2.answers[0]); 
  //   $("#b").html(stQuestion2.answers[1]);  
  //   $("#c").html(stQuestion2.answers[2]);
  //   $("#d").html(stQuestion2.answers[3]);    
  // }
 
  var questionIndex = 0;
  pushQuestion(game.questions[questionIndex]);
  // for (var i = 0; i < stQuestion1.questions1.length; i++) {
//   console.log(stQuestion1.question);
//   $("#questions").html(stQuestion1.questions1);
//   console.log(stQuestion1.answers);
//  $("#a").html(stQuestion1.answers[0]); 
//  $("#b").html(stQuestion1.answers[1]);  
//  $("#c").html(stQuestion1.answers[2]);
//  $("#d").html(stQuestion1.answers[3]);  

 $("form").click(function() {
   var question = game.questions[questionIndex];
   var nextQuestion = game.questions[++questionIndex];
   question.choice = $("input:checked").val();
   console.log(question.choice);
   if (question.answer === question.choice){
      answersRight++;
      pushQuestion(nextQuestion);
   }
   else{
     answersWrong++;
     pushQuestion(nextQuestion);
  }
    
 })
  

 
});


var game = {
  answersRight: 0,
  answersWrong: 0,
  totalScore: 0,
  
  questions: [
    { 
      question: "What are mornings for?",
      answer: "b",
      choice: "",
      answers:["yoga and calisthenics", "coffee and contemplation", "donuts and lattes", "answering phone calls"]
    },  
    { 
      question: "What does eleven eat for breakfast?",
      answer: "a",
      choice: "",
      answers:["eggo waffles", "cereal", "yogurt", "oatmeal"],
    },
    { 
      question: "Where does the demagorgon take Will?",
      answer: "c",
      choice: "",
      answers:["to a friend's house", "to his school", "to the upside down", "to the right side up"],
    },
    { 
      question: "What is Steve's hair secret?",
      answer: "a",
      choice: "",
      answers:["Faberge with Farah Fawcet hair spray", "Loreal with Aquanet", "Pantene with Herbal Essence", "Redken"]
    },
    { 
      question: "Friends don't what?",
      answer: "d",
      choice: "",
      answers:["Cheat", "Steal", "Yell", "Lie"]
    },
    { 
      question: "Where was Barbara before she went missing?",
      answer: "c",
      choice: "",
      answers:["At Nancy's house", "In bathroom at home", "In the pool at a party", "In school at her desk"]
    }
  ]
}






// 

      




