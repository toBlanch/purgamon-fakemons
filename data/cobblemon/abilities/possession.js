({
    clearPossessionBoosts(pokemon) {
        if (pokemon.possessionAtkActive) {
            this.add("-end", pokemon, "Possession" + "atk");
        }
        pokemon.possessionAtkActive = false;

        if (pokemon.possessionDefActive) {
            this.add("-end", pokemon, "Possession" + "def");
        }
        pokemon.possessionDefActive = false;

        if (pokemon.possessionSpAActive) {
            this.add("-end", pokemon, "Possession" + "spa");
        }
        pokemon.possessionSpAActive = false;

        if (pokemon.possessionSpDActive) {
            this.add("-end", pokemon, "Possession" + "spd");
        }
        pokemon.possessionSpDActive = false;

        if (pokemon.possessionSpeActive) {
            this.add("-end", pokemon, "Possession" + "spe");
        }
        pokemon.possessionSpeActive = false;
    },
    possessionActive(pokemon) {
        return pokemon.possessionAtkActive ||
               pokemon.possessionDefActive ||
               pokemon.possessionSpAActive ||
               pokemon.possessionSpDActive ||
               pokemon.possessionSpeActive;
    },
    endPossession(pokemon) {
        if (this.effect.possessionActive(pokemon)) {
            this.effect.clearPossessionBoosts.call(this, pokemon);
        }
    },
    getPossessionTarget(pokemon) {
        for (let i = pokemon.side.pokemon.length - 1; i > pokemon.position; i--) {
            const possibleTarget = pokemon.side.pokemon[i];
            if (!possibleTarget.fainted) {
                return possibleTarget;
            }
        }
    },
    onModifyStat(isActive) {
        if (isActive) {
            return this.chainModify(1.5);
        }
    },
    onPreStart(pokemon) {
        this.effect.clearPossessionBoosts.call(this, pokemon);
        const possessionTarget = this.effect.getPossessionTarget(pokemon);

        if (!possessionTarget) {
            return;
        }

        const stats = [
            { name: "atk", value: possessionTarget.storedStats.atk, prop: "possessionAtkActive" },
            { name: "def", value: possessionTarget.storedStats.def, prop: "possessionDefActive" },
            { name: "spa", value: possessionTarget.storedStats.spa, prop: "possessionSpAActive" },
            { name: "spd", value: possessionTarget.storedStats.spd, prop: "possessionSpDActive" },
            { name: "spe", value: possessionTarget.storedStats.spe, prop: "possessionSpeActive" },
        ];

        stats.sort((a, b) => b.value - a.value);
        for (let i = 0; i < 2; i++) {
            const stat = stats[i];
            this.add("-start", pokemon, "Possession" + stat.name);
            pokemon[stat.prop] = true;
        }
    },
    onAfterEachBoost(boost, target) {
        this.effect.endPossession.call(this, target);
    },
    onAfterSetStatus(status, target, source, effect) {
        this.effect.endPossession.call(this, target);
    },
    onModifyAtk(atk, pokemon) {
        return this.effect.onModifyStat.call(this, pokemon.possessionAtkActive);
    },
    onModifyDef(def, pokemon) {
        return this.effect.onModifyStat.call(this, pokemon.possessionDefActive);
    },
    onModifySpA(spa, pokemon) {
        return this.effect.onModifyStat.call(this, pokemon.possessionSpAActive);
    },
    onModifySpD(spd, pokemon) {
        return this.effect.onModifyStat.call(this, pokemon.possessionSpDActive);
    },
    onModifySpe(spe, pokemon) {
        return this.effect.onModifyStat.call(this, pokemon.possessionSpeActive);
    },
    flags: {},
    name: "Possession",
    rating: 4
})