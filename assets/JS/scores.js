const highscore = document.getElementById('highscores');

const highscores = []

function highScore(){
    var highscores = JSON.parse(localStorage.getItem('highscores')) || [];
    var score = {initials:initials.value, score: time }
    highscores.push(score)
  
    highscores.innerhtml = '';
    const highscoreEl = document.createElement('li')

    highscoreEl.append(highscore)
  }

  