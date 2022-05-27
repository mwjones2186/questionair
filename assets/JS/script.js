//omg so much to do!!

//page layout
//containers


//first things first-HEADER HEADER HEADER!!!!!
//work on a high score link
var welcome = 
var userName = 

function welcome() {
    prompt = ("Welcome to Questionaire! Please enter your initials")
    
}





//work on a coundown timer
var countDown = document.querySelector("#timer");
var timeEl = 10;
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
//while loops
//for loops
//