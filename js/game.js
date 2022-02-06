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
        let picked = this.pickItem()
        if (!picked) {
            Vue.set(this.shop, i, null)
        } else {
            console.log('picked is true',picked)
            let new_item = makeCopy(dex[picked])
            Vue.set(this.shop, i, new_item)
        }
    }
}

battleStart() {
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

alignTeam(team) {
    team = team.filter(item => item !== null)
    while (team.length < 5) {
        team.push(null)
    }
    return team
}

alignTeams() {
    this.battleTeam = this.alignTeam(this.battleTeam)
    this.enemy = this.alignTeam(this.enemy)
}

battleStep() {
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
    console.log(options)
    if (options.length === 0) return false
    let item = options[Math.floor(Math.random() * options.length)]
    return item
}

makeEnemy() {
    let enemy_name = this.pickItem()
    if (!enemy_name) return null
    let enemy = makeCopy(dex[enemy_name])
    return enemy
}

buy(from, to) {
    let buying_item = from > 4
    let has_pet = this.team[to] !== null
    if (buying_item && !has_pet) return false
    if (buying_item && has_pet) {
        // buy item for pet
        slot_pet.hp += selected_item.hp
        slot_pet.atk += selected_item.atk
        slot_pet.xp += selected_item.xp
        if (selected_item.fx)
            slot_pet.fx = selected_item.fx

        return true
    }
    if (!buying_item && has_pet) {
        // upgrade pet
        let from_pet = this.shop[from]
        let to_pet = this.team[to]
        if (from_pet.emoji === to_pet.emoji) {
            // take max stats
            this.team[to].hp = Math.max(to_pet.hp, from_pet.hp)
            this.team[to].atk = Math.max(to_pet.atk, from_pet.atk)
            this.team[to].def = Math.max(to_pet.def, from_pet.def)
            this.shop[from] = null
            // add xp, hp, and atk
            this.team[to].xp++
            this.team[to].hp++
            this.team[to].atk++
            return true
        }
        return false
    }
    if (!buying_item && !has_pet) {
        // buy pet
        this.team[to] = makeCopy(this.shop[from])
        this.team[to].xp = 1
        this.shop[from] = null
        return true
    }
}

tryBuy(from, to) {
    if (this.gold < 3) {
        alert('Not enough gold')
        return false
    }
    const bought = this.buy(from, to)
    if (bought) {
        this.gold -= 3
        this.selected = null
        if (this.frozen.includes(from))
            freeze(from)
    }
    return bought
}

select(slot) {
    if (this.selected === null) {
        // if nothing selected, select
        this.selected = slot
        return
    } else if (this.selected === slot) {
        // if same slot, deselect
        this.selected = null
        return
    }
    // something's already selected, what to do?
    const slot_type = slot.substring(0,1)
    const slot_num = slot.substring(1)
    const selected_type = this.selected.substring(0,1)
    const selected_num = this.selected.substring(1)
    if (slot_type !== 't') {
        // if not applying to team, just update selection
        this.selected = slot
        return
    }
    if (selected_type === 't') {
        // swapping team members
        let temp = this.team[selected_num]
        this.team[selected_num] = this.team[slot_num]
        this.team[slot_num] = temp
        this.selected = null
        return
    }
    // we selected non-team and then team, try to buy
    this.tryBuy(selected_num, slot_num)
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