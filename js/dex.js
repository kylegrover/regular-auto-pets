const dex = pets_standard;

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