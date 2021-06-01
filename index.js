var readlineSync = require('readline-sync');

var userName = readlineSync.question("What's your Name \t");
 console.log("Welcome " +userName+ " Let's check how well you know me");
 console.log("-----------------------------------------------");

var score = 0;
var HighScore = 10;

//play function
function play(question,answers,answer){
  console.log(question);
   var answersObj = [answers.a,answers.b,answers.c];
      for(var k=0;k<answersObj.length;k++){
        console.log(Object.keys(answers)[k] +" : "+ answersObj[k]);
      }
    var que = "Enter your Answer Here: \t";
    var userAnswer = readlineSync.question(que);

  if(userAnswer.toUpperCase()==answer.toUpperCase()){
    score = score+1;
    console.log("right");
  }else{
    console.log("wrong");
  }

  console.log("Current score is = "+score);
  console.log("------------------------------\n");
}

questionOne = {
  question: "Favourite Food ",
  answers: {
      a: "Samosa",
      b: "Pizza",
      c: "Nothing",
    },   
  answer: "a"
}

questionTwo = {
  question: "Favourite Place",
  answers: {
      a: "ladakh",
      b: "Ahmedabad",
      c: "Forest",
    },
  answer: "a"
}

questionThree = {
  question: "Favourite Book",
  answers: {
      a: "A birth of prisoner",
      b: "To kill a mokingbird",
      c: "harry potter"
    },
  answer: "a"
}

questionFour = {
  question: "Favourite Hobby",
  answers: {
      a: "art and craft",
      b: "Coding",
      c: "Travel"
    },
  answer: "a"
}

questionFive = {
  question: "Favourite Movie",
  answers: {
      a: "Harry Potter",
      b: "Shawshank redemption",
      c: "A walk to remember"
    },
  answer: "a"
}
questionSix = {
  question: "Favourite Class",
  answers: {
      a: "Maths",
      b: "Science",
      c: "Ss"
    },
  answer: "a"
}
questionSeven = {
  question: "Favourite flower",
  answers: {
      a: "rose",
      b: "lotus",
      c: "hibiscus"
    },
  answer: "b"
}
questionEight = {
  question: "What i prefer",
   answers: {
      a: "colddrink",
      b: "tea",
      c: "coffee"
    },
  answer: "c"
}
questionNine = {
  question: "Best moment",
   answers: {
      a: "Salary Day",
      b: "Admission in apollo",
      c: "Got opportunity at Cignex"
     
    },
  answer: "c"
}
questionTen = {
  question: "Best friend",
  answers: {
      a: "Nikunj",
      b: "Foram",
      c: "Sweta",
     
    },
  answer: "a"
}

var Questions = [questionOne,questionTwo,questionThree,questionFour,questionFive,questionSix,questionSeven,questionEight,questionNine,questionTen];
for(var i=0;i<Questions.length;i++){

  play(Questions[i].question,Questions[i].answers,Questions[i].answer);
  
}
 if(score < HighScore-1){
    console.log("You did well! Please Try Again");
  }
  if(score==HighScore-1){ 
    console.log("You are one point down to win! Please Try Again");
  }
else if(score==HighScore){
  console.log("Yeahhhhhhhhh "+ userName +"! You won the Game");
}