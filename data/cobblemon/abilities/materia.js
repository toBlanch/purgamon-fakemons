({
    onModifyAtk(atk, pokemon) {
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
    onModifyDef(def, pokemon) {
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
    name: "Materia",
    rating: 4
})