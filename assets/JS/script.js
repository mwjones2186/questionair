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


const questionId = document.getElementById("question");
const highScoreId = document.getElementById("highScore");
const button1Id = document.getElementById("button1");
const button2Id = document.getElementById("button2");
const button3Id = document.getElementById("button3");
const button4Id = document.getElementById("button4");
const answerStatus = document.getElementById("answerStatus");
const initials = document.getElementById("initials");
const questionForm = document.getElementById("questionForm");
const divHighScore = document.getElementById("divHighScore");
const startButton = document.getElementById("start");
const viewHighScores = document.getElementById("viewHighScores");









const questionArr = [
  {
    question: "what is my name?",
    answers: ['Mike', 'Joe', 'Billy', 'James'],
    correctAnswer: 0
  },

  {
    question: 'What color is the sky?',
    answers: ['Yellow', 'Green', 'Gold', 'Blue'],
    correctAnswer: 3
  },

  {
    question: "Where is the United States located?",
    answers: ['America', 'Africa', 'Europe', 'North America'],
    correctAnswer: 3
  },

  {
    question: 'What is the deepest lake in the United States?',
    answers: ['Crater Lake', 'Lake Superior', 'Lake Tahoe', 'Lake Michigan'],
    correctAnswer: 0
  },

  {
    question: "Where did the statue of Libery come from?",
    answers: ['I made it!', 'Gift from France', 'A gift from the Rockafellers', 'Gift from Australia'],
    correctAnswer: 1
  },

  {
    question: "True or False: Tigers are the largest Cat species",
    answers: ['True', 'False'],
    correctAnswer: 0
  },

  {
    question: "What planet is closest to the sun?",
    answers: ['Earth', 'Jupiter', 'Mercury', 'Venus'],
  correctAnswer: 2
  },

  {
    question: 'What is the 2+(2 x 2) - 3?',
    answers: ['5', '3', '6', 'No Idea!'],
    correctAnswer: 1
  },

  {
    question: 'Which is NOT a type of blood cell?',
    answers: ['Red', 'White', 'Platelets', 'Plasma'],
    correctAnswer: 3
  },

  {
    question: 'Which Shakespearan play features Ophelia?',
    answers: ['Hamlet', 'King Lear', 'Julius Ceasar', 'Macbeth'],
    correctAnswer: 0
  },


];
function start() {
  startButton.style.display = "none";
  showQuestion();
  intervalID = setInterval(function () {
    timeEl--;
    countDown.textContent = timeEl;
    if (timeEl <= 0) {
      stop()
    }
  }, 1000)
}


function showQuestion() {
  for (let i = 0; i < questionArr.question.length; i++) {
    const element = questionArr[i];
  
  }
  questionId.textContent = questionArr[i].question;
  button1Id.textContent = questionArr[i].answers[0];
  button2Id.textContent=questionArr[i].answers[1];
  button3Id.textContent=questionArr[i].answers[2];
  button4Id.textContent=questionArr[i].answers[3];
  questionForm.style.display = "show"
}




// function answer(ans) {
//   if (ans !== questionArr[answer].correctAnswer) {
    
    
//     answerStatus.textContent = "Incorrect";
//     timeEl -= 5;
//     countDown.textContent = timeEl;
//     if (timeEl <= 0) {
//       stop()
//     }
//   } else {
//     answerStatus.textContent = "Correct";
//   }
//   questionIndex++;
//   if (questionIndex >= questionArr.length) {
//     gameOver();
//   }
//   else {
//     showQuestion();
//   }
// }










// //work on a coundown timer

// var countDown = document.querySelector("#timer");
// var timeEl = 100;
// countDown.textContent = timeEl;
// var intervalID;


// var questionIndex = 0;
// //ar answersIndex = questionArr + answers;
// var score = 0;
// var highScores = [];

// function pageLoad() {
//   const temp = localStorage.getItem("highScores");
//   if (temp) {
//     highScores = JSON.parse(temp);

//   }
//   divHighScore.style.display = "none";
//   questionForm.style.display = "none";
//   viewHighScores.style.display = "none";
// }



// function stop() {
//   clearInterval(intervalID);
//   alert("The timer has reached 0!");

// }
// function gameOver() {
//   clearInterval(intervalID);
//   questionForm.style.display = "none";
//   divHighScore.style.display = "block";
// }
// function saveInitials() {
//   highScores.push({ initials: initials.value, score: timeEl });
//   highScores.sort((a, b) => {
//     return b.score - a.score
//   });
//   localStorage.setItem("highScores", JSON.stringify(highScores));

//   alert("Good Bye!");
// }
// function showHighScore() {
//   let list = "<ol>";
//   for (let i in highScores) {
//     let li = `<li>${highScores[i].initials} - ${highScores[i].score}</li>`
//     list += li;
//   }
//   viewHighScores.innerHTML = list + "</ol>";
//   viewHighScores.style.display = "block";
// }
pageLoad();
