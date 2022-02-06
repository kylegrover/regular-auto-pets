// initiate game
var sak_el = document.getElementById('sak');

// top level game object
class Sak {
    startGame = function() {
        // create a new game
        this.game = new Game();
        this.gameOver = false;
        this.gameStarted = true;
        this.gamePaused = false;
    }
    
    constructor(el) {
        this.el = el;
        this.gameOver = false;
        this.gameStarted = false;
        this.gamePaused = false;
        this.startGame()
    }
}

var sak = new Sak()

var app = new Vue({
    el: '#sak',
    data: {
        game: sak.game,
        startGame: sak.startGame
    }
})