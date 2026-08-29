({
    endMateria(pokemon) {
        if (pokemon.materiaActive) {
            pokemon.materiaActive = false;
            this.add("-end", pokemon, "Materia");
        }
    },
    onModifyStat(pokemon) {
        if (pokemon.materiaActive) {
            return this.chainModify(1.5);
        }
    },
    onPreStart(pokemon) {
        pokemon.materiaActive = false;
        if (pokemon.status) {
            return;
        }

        pokemon.materiaActive = true;
        this.add("-start", pokemon, "Materia");
    },
    onAfterEachBoost(boost, target, source, effect) {
        this.effect.endMateria.call(this, target);
    },
    onAfterSetStatus(status, target, source, effect) {
        this.effect.endMateria.call(this, target);
    },
    onModifyAtk(atk, pokemon) {
        return this.effect.onModifyStat.call(this, pokemon);
    },
    onModifyDef(def, pokemon) {
        return this.effect.onModifyStat.call(this, pokemon);
    },
    flags: {},
    name: "Materia",
    rating: 4
})