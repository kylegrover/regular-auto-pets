class Game {

constructor(mode = 'arena') {
    this.mode = mode

    this.wins = 0
    this.lives = 4
    this.turn = 0
    
    this.shop_slots = 3
    this.shop = [null,null,null,null,null]
    this.team = [null,null,null,null,null]
    this.enemy = [null,null,null,null,null]
    this.frozen = []
    this.selected = null
    
    this.screen = 'start'
}

endGame(result) {
    this.screen = 'game_results'
    this.game_results = result
}

turnStart() {
    this.turn++
    this.gold = 11
    this.roll()
    this.screen = 'shop'
}

}