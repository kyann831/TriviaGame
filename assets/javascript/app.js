$(document).ready(function(){
    var audioElement = document.createElement("audio");
    audioElement.setAttribute("src", "../TriviaGame/stranger-things-theme-song.mp3");
    $("#playtheme").click(function() {
        audioElement.play()
    });
     
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
});
  



stQuestion1 = { 
    questions1: ["What are mornings for?"],
    answer: "coffee and contemplation",
    choice: "",
    answers:["yoga and calisthenics", "coffee and contemplation", "donuts and lattes", "answering phone calls"]
}
for (var i = 0; i < stQuestion1.length; i++) {
 if (answer === answers);
  document.getElementById("questions").innerHTML="You got it right!";
}

stQuestion2 = { 
          questions2: ["What does eleven eat for breakfast?"],
          answer: "eggo waffles",
          choice: "",
          answers:["eggo waffles", "cereal", "yogurt", "oatmeal"],
}
stQuestion3 = { 
            questions3: ["Where does the demagorgon take Will?"],
            answer: "to the upside down",
            choice: "",
            answers:["to a friend's house", "to his school", "to the upside down", "to the right side up"]
            }
stQuestion4 = { 
              items: ["What is Steve's hair secret?"],
              answer: "Faberge with Farah Fawcet hair spray",
              choice: "",
              answers:["Faberge with Farah Fawcet hair spray", "Loreal with Aquanet", "Pantene with Herbal Essence", "Redken"]
              }
stQuestion5 = { 
                items: ["Friends don't what?"],
                answer: "Lie",
                choice: "",
                answers:["Cheat", "Steal", "Yell", "Lie"]
                }
stQuestion6 = { 
                  items: ["Where was Barbara before she went missing?"],
                  answer: "In the pool at a party",
                  choice: "",
                  answers:["At Nancy's house", "In bathroom at home", "In the pool at a party", "In school at her desk"]
                  }
        




