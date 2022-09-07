// AS A coding boot camp student
// I WANT to take a timed quiz on JavaScript fundamentals that stores high scores
// SO THAT I can gauge my progress compared to my peers
// GIVEN I am taking a code quiz
// WHEN I click the start button
// THEN a timer starts and I am presented with a question
// WHEN I answer a question
// THEN I am presented with another question
// WHEN I answer a question incorrectly
// THEN time is subtracted from the clock
// WHEN all questions are answered or the timer reaches 0
// THEN the game is over
// WHEN the game is over
// THEN I can save my initials and score

const timer = document.getElementById('timer');

const startDiv = document.getElementById('start');
const startBtn = document.getElementById("startBtn");

const questionForm = document.getElementById("questionForm");
const questionId = document.getElementById("question");
const choices = document.getElementById('choices');


// const answerStatus = document.getElementById("answerStatus");
const divHighScore = document.getElementById("divHighScore");
const yourscore = document.getElementById('yourScore');
const initials = document.getElementById("initials");
const saveScore = document.getElementById('saveScore');

const viewHighScores = document.getElementById("viewHighScores");

let time = 100;
let questionIndex = 0
let intervalID;

const questionArr = [
  {
    question: "what is my name?",
    answers: ['Mike', 'Joe', 'Billy', 'James'],
    correctAnswer: 'Mike'
  },

  {
    question: 'What color is the sky?',
    answers: ['Yellow', 'Green', 'Gold', 'Blue'],
    correctAnswer: 'Blue'
  },

  {
    question: "Where is the United States located?",
    answers: ['America', 'Africa', 'Europe', 'North America'],
    correctAnswer: 'North America'
  },

  {
    question: 'What is the deepest lake in the United States?',
    answers: ['Crater Lake', 'Lake Superior', 'Lake Tahoe', 'Lake Michigan'],
    correctAnswer: 'Crater Lake'
  },

  {
    question: "Where did the statue of Libery come from?",
    answers: ['I made it!', 'Gift from France', 'A gift from the Rockafellers', 'Gift from Australia'],
    correctAnswer: 'Gift from France'
  },

  {
    question: "True or False: Tigers are the largest Cat species",
    answers: ['True', 'False'],
    correctAnswer: 'True'
  },

  {
    question: "What planet is closest to the sun?",
    answers: ['Earth', 'Jupiter', 'Mercury', 'Venus'],
  correctAnswer: 'Mercury'
  },

  {
    question: 'What is the 2+(2 x 2) - 3?',
    answers: ['5', '3', '6', 'No Idea!'],
    correctAnswer: '3'
  },

  {
    question: 'Which is NOT a type of blood cell?',
    answers: ['Red', 'White', 'Platelets', 'Plasma'],
    correctAnswer: 'Plasma'
  },

  {
    question: 'Which Shakespearan play features Ophelia?',
    answers: ['Hamlet', 'King Lear', 'Julius Ceasar', 'Macbeth'],
    correctAnswer: 'Hamlet'
  },


];


function start() {
  
  timer.textContent = time;
  intervalID = setInterval(function () {
    time--;
    timer.textContent = time;
    if (time <= 0) {
      gameOver()
    }
  }, 1000)

  startDiv.classList.add('hide')
  questionForm.removeAttribute('class')
  showQuestion();
}


function showQuestion() {
var question = questionArr[questionIndex]
questionId.textContent = question.question;

choices.innerHTML = '';
for (let i = 0; i < question.answers.length; i++) {
var btn = document.createElement('button');
  btn.textContent = question.answers[i]
  btn.setAttribute('value', question.answers[i])

  btn.onclick = checkAnswer;

  choices.append(btn)
}

}

function checkAnswer(e){
  console.log(e.target.value)

  if(e.target.value !==  questionArr[questionIndex].correctAnswer){
    time-=5
    timer.textContent = time;

  }
  
  questionIndex++
  if(questionArr.length === questionIndex){
    gameOver()
  }else{
    showQuestion()
  }
}

function gameOver(){
clearInterval(intervalID);
questionForm.classList.add('hide')
  divHighScore.removeAttribute('class')
  //display your score
  yourscore.textContent = time
}
function highScore(){
  var highscores = JSON.parse(localStorage.getItem('highscores')) || [];
  var score = {initials:initials.value, score: time }
  highscores.push(score)

  localStorage.setItem('highscores', JSON.stringify(highscores))
  window.location.href = '../../highscore.html'
}

saveScore.addEventListener('click', highScore)

startBtn.addEventListener('click', start);