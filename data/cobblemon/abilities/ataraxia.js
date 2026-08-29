({
    endAtaraxia(pokemon) {
        if (pokemon.ataraxiaActive) {
            pokemon.ataraxiaActive = false;
            this.add("-end", pokemon, "Ataraxia");
        }

    },
    onModifyStat(pokemon) {
        if (pokemon.ataraxiaActive) {
            return this.chainModify(1.5);
        }
    },
    onPreStart(pokemon) {
        pokemon.ataraxiaActive = false;
        if (pokemon.status) {
            return;
        }

        pokemon.ataraxiaActive = true;
        this.add("-start", pokemon, "Ataraxia");
    },
    onAfterEachBoost(boost, target, source, effect) {
        this.effect.endAtaraxia.call(this, target);
    },
    onAfterSetStatus(status, target, source, effect) {
        this.effect.endAtaraxia.call(this, target);
    },
    onModifySpA(spa, pokemon) {
        return this.effect.onModifyStat.call(this, pokemon);
    },
    onModifySpD(spd, pokemon) {
        return this.effect.onModifyStat.call(this, pokemon);
    },
    flags: {},
    name: "Ataraxia",
    rating: 4
})