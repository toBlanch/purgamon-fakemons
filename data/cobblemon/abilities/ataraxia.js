({    
    onModifySpa(spa, pokemon) {
        if (pokemon.status){
            return;
        }
        for (stat in pokemon.boosts) {
            if (pokemon.boosts[stat] != 0) {
                return;
            }
        }
        return this.chainModify(1.5);
    },
    onModifySpd(spd, pokemon) {
        if (pokemon.status){
            return;
        }
        for (stat in pokemon.boosts) {
            if (pokemon.boosts[stat] != 0) {
                return;
            }
        }
        return this.chainModify(1.5);
    },
    flags: {},
    name: "Ataraxia",
    rating: 4
})