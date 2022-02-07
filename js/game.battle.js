Game.prototype.battleStart = function() {
    // instance team
    this.battleTeam = makeCopy(this.team)
    // instance enemy
    Vue.set(this.enemy, 0, this.makeEnemy())
    Vue.set(this.enemy, 1, this.makeEnemy())
    Vue.set(this.enemy, 2, this.makeEnemy())
    Vue.set(this.enemy, 3, this.makeEnemy())
    Vue.set(this.enemy, 4, this.makeEnemy())
    // set screen
    this.alignTeams()
    this.screen = 'battle'
}

Game.prototype.alignTeam = function(team) {
    team = team.filter(item => item !== null)
    while (team.length < 5) {
        team.push(null)
    }
    return team
}

Game.prototype.alignTeams = function() {
    this.battleTeam = this.alignTeam(this.battleTeam)
    this.enemy = this.alignTeam(this.enemy)
}

Game.prototype.battleStep = function() {
    this.checkWin()
    this.alignTeams()

    let a = this.battleTeam
    let b = this.enemy
    
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

    this.alignTeams()
}

Game.prototype.endBattle = function(result) {
    this.screen = 'battle_results'
    this.battle_results = result
}

Game.prototype.checkWin = function() {
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

Game.prototype.makeEnemy = function() {
    let enemy_name = this.pickItem()
    if (!enemy_name) return null
    let enemy = makeCopy(dex[enemy_name])
    return enemy
}