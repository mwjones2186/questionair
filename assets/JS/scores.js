const highscore = document.getElementById('highscores');


    highscore.innerHTML = '';
    var highscores = JSON.parse(localStorage.getItem('highscores')) || [];
    highscores.sort(function(a,b){
        return Number(b.score)-Number(a.score)
    })
    for (let i = 0; i < highscores.length; i++) {
        
        const highscoreEl = document.createElement('li')
        highscoreEl.textContent = `${highscores[i].initials}: ${highscores[i].score}`
        highscore.append(highscoreEl)


    }
    
    

    
  

  