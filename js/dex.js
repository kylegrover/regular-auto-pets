const dex = {
    '🐜': {
        emoji: '🐜',
        tier: 1,
        atk: 3,
        hp: 1,
        skill: {
            when: 'faint',
            what: 'buff',
            who: 'random_friend',
            value: [1,2]
        }
    },
    '🐎': {
        emoji: '🐎',
        tier: 1,
        atk: 2,
        hp: 2,
        skill: {
            when: 'faint',
            what: 'buff',
            who: 'random_friend',
            value: [1,2]
        }
    },
    '🐍': {
        emoji: '🐍',
        tier: 6,
        atk: 6,
        hp: 6,
        skill: {
            when: 'friend_ahead_attacks',
            what: 'attack',
            who: 'random_enemy',
            value: 5
        }
    },
    '🐧': {
        emoji: '🐧',
        tier: 4,
        atk: 3,
        hp: 3,
        skill: {
            when: 'end_turn',
            what: 'buff',
            who: 'level2s',
            value: [1,1]
        }
    }
}

function getTier(tier) {
    let tier_dex = [];
    for (let item in dex) {
        if (dex[item].tier === tier) {
            tier_dex.push(item);
        }
    }
    return tier_dex;
}

function makeCopy(obj) {
    return JSON.parse(JSON.stringify(obj));
}