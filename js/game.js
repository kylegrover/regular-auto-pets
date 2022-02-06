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


// shop methods
roll() {
    if (this.gold < 1) return false
    this.gold--
    for (let i = 0; i < this.shop_slots; i++) {
        let new_item = makeCopy(dex[this.pickItem()])
        new_item.xp = 0
        Vue.set(this.shop, i, new_item)
    }
}

battleStart() {
    // instance team
    this.battleTeam = makeCopy(this.team)
    this.battleTeam = this.alignTeam(this.battleTeam)
    // instance enemy
    Vue.set(this.enemy, 0, this.makeEnemy())
    Vue.set(this.enemy, 1, this.makeEnemy())
    Vue.set(this.enemy, 2, this.makeEnemy())
    Vue.set(this.enemy, 3, this.makeEnemy())
    Vue.set(this.enemy, 4, this.makeEnemy())
    // set screen
    this.screen = 'battle'
}

alignTeam(team) {
    team = team.filter(item => item !== null)
    while (team.length < 5) {
        team.push(null)
    }
    return team
}

battleStep() {
    let a = this.battleTeam
    let b = this.enemy
    // align teams to front
    a = this.alignTeam(a)
    b = this.alignTeam(b)

    // battle
    a[0].hp -= b[0].atk
    b[0].hp -= a[0].atk

    // do skills

    // check if dead
    if (a[0].hp <= 0) a[0] = null
    if (b[0].hp <= 0) b[0] = null

    this.battleTeam = a
    this.enemy = b

    this.checkWin()
}

endBattle(result) {
    this.screen = 'battle_results'
    this.battle_results = result
}

endGame(result) {
    this.screen = 'game_results'
    this.game_results = result
}

checkWin() {
    let team_dead = this.battleTeam.filter(item => item !== null).length === 0
    let enemy_dead = this.enemy.filter(item => item !== null).length === 0

    if (team_dead && enemy_dead) {
        this.endBattle('tie')
    } else if (team_dead) {
        this.lives--
        if (this.lives <= 0) {
            this.endGame('lose')
            return
        }
        this.endBattle('lose')
    } else if (enemy_dead) {
        this.wins++
        if (this.wins === 10) {
            this.endGame('win')
            return
        }
        this.endBattle('win')
    }
}

pickItem() {
    let maxtier = Math.floor((this.turn - 1) * 0.5) + 1
    let tier = Math.floor(Math.random() * maxtier) + 1
    let options = getTier(tier)
    let item = options[Math.floor(Math.random() * options.length)]
    // console.log('picked item: ' + item)
    return item
}

makeEnemy() {
    let enemy_name = this.pickItem()
    let enemy = makeCopy(dex[enemy_name])
    return enemy
}

select(shop) {
    this.selected = this.selected === shop ? null : shop
}

buy(from, to) {
    if (this.gold < 3) {
        alert('Not enough gold')
        return false
    }
    let buying_item = from > 4
    let has_pet = this.team[to] !== null
    if (buying_item && !has_pet)
        return false
    if (!buying_item && has_pet)
        return false
    if (this.frozen.includes(from))
        freeze(from)

    this.team[to] = this.shop[from]
    this.shop[from] = null

    this.gold -= 3
    this.selected = null
}

freeze(item = null) {
    if (item === null) 
    item = this.selected
    if (this.frozen.includes(item)) {
        this.frozen.splice(this.frozen.indexOf(item), 1)
    } else {
        this.frozen.push(item)
    }
}

turnStart() {
    this.turn++
    this.gold = 11
    this.roll()
    this.screen = 'shop'
}

}