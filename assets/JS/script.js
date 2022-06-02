//omg so much to do!!

//page layout
//containers


//first things first-HEADER HEADER HEADER!!!!!
//work on a high score link


// want to create a prompt on page open stating welcome. get 
//need to display questions with answers
var questionArr [
    {
      text: 'What is my favorite color?';
      a: "Yellow";
      b: "Green";
      c: "Blue";
      d: "Whats a color?"
      correctAnswer: 'c'

    };
    {
      text: 'What is my favorite sport?';
      a: 'Soccer';
      b: 'Football';
      c: 'Zumba';
      d: 'Underwater Basket weaving';
      correctAnswer: 'a'
    };
    {
      text: 'Do I like pizza?';
      a: 'Duh!';
      b: 'Like? More like LUV!';
      c: "I dont like pizza....said no one ever...";
      d: "Is that a dessert?";
      correctAnswer: 'a';
    }

];

const container = document.createElement('div');








//work on a coundown timer
var countDown = document.querySelector("#timer");
var timeEl = 100;
countDown.textContent= timeEl;
var intervalID;

intervalID = setInterval(function(){
    timeEl--;
    countDown.textContent= timeEl;
    if (timeEl <= 0) {
        
        stop()
  }
}, 1000)

function stop(){
  clearInterval(intervalID);
  alert ("The timer has reached 0!");
  
}



//BODY BODY
//need a first page. are you ready to start the questionaire?
//start quiz button

//10 questions
//4 multiple choice answers
//display a "correct" or "wrong" display at bottom when an answer is choosen 



// some of the codes i need to create 
//while loops?
//for loops?
//