// shop methods
Game.prototype.roll = function() {
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

Game.prototype.pickItem = function() {
    let maxtier = Math.floor((this.turn - 1) * 0.5) + 1
    let tier = Math.floor(Math.random() * maxtier) + 1
    let options = getTier(tier)
    console.log(options)
    if (options.length === 0) return false
    let item = options[Math.floor(Math.random() * options.length)]
    return item
}

Game.prototype.buy = function(from, to) {
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

Game.prototype.tryBuy = function(from, to) {
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

Game.prototype.sell = function(slot = null) {
    if (slot === null)
        slot = this.selected
    if (slot === null)
        return false
    if (slot.substring(0,1) !== 't')
        return false
    let slot_num = slot.substring(1)
    this.team[slot_num] = null
    this.selected = null
    this.gold++
    return true
}

Game.prototype.select = function(slot) {
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

Game.prototype.freeze = function(item = null) {
    if (item === null) 
    item = this.selected
    if (this.frozen.includes(item)) {
        this.frozen.splice(this.frozen.indexOf(item), 1)
    } else {
        this.frozen.push(item)
    }
}