({
    onBeforeSwitchIn(pokemon) {
      pokemon.atkBoost = false;
      pokemon.defBoost = false;
      pokemon.spaBoost = false;
      pokemon.spdBoost = false;
      pokemon.speBoost = false;
      let possessionTarget = null;

      for (let i = pokemon.side.pokemon.length - 1; i > pokemon.position; i--) {
        const possibleTarget = pokemon.side.pokemon[i];
        if (!possibleTarget.fainted) {
          if (!pokemon.terastallized || possibleTarget.species.baseSpecies !== "Ogerpon") {
            possessionTarget = possibleTarget;
          }
          break;
        }
      }

      if (possessionTarget == null){
        return;
      }

      let bestStat = possessionTarget.getBestStat();
      
      if(bestStat == "hp"){
        pokemon.atkBoost = true;
      }
      if(bestStat == "atk"){
        pokemon.atkBoost = true;
      }
      else if(bestStat == "def"){
        pokemon.defBoost = true;
      }
      else if(bestStat == "spa"){
        pokemon.spaBoost = true;
      }
      else if(bestStat == "spd"){
        pokemon.spdBoost = true;
      }
      else if(bestStat == "spe"){
        pokemon.speBoost = true;
      }
    },
    onModifyAtk(atk, pokemon) {
        if (!pokemon.atkBoost || pokemon.status){
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
        if (!pokemon.defBoost || pokemon.status){
            return;
        }
        for (stat in pokemon.boosts) {
            if (pokemon.boosts[stat] != 0) {
                return;
            }
        }
        return this.chainModify(1.5);
    },
    onModifySpA(spa, pokemon) {
        if (!pokemon.spaBoost || pokemon.status){
            return;
        }
        for (stat in pokemon.boosts) {
            if (pokemon.boosts[stat] != 0) {
                return;
            }
        }
        return this.chainModify(1.5);
    },
    onModifySpD(spd, pokemon) {
        if (!pokemon.spdBoost || pokemon.status){
            return;
        }
        for (stat in pokemon.boosts) {
            if (pokemon.boosts[stat] != 0) {
                return;
            }
        }
        return this.chainModify(1.5);
    },
    onModifySpe(spe, pokemon) {
        if (!pokemon.speBoost || pokemon.status){
            return;
        }
        for (stat in pokemon.boosts) {
            if (pokemon.boosts[stat] != 0) {
                return;
            }
        }
        this.add("-singleturn", pokemon, "Possession spe boost");
        return this.chainModify(1.5);
    },
    flags: {},
    name: "Possession",
    rating: 4
})