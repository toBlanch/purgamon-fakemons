({
  onStart(pokemon) {
    this.effectState.berserkTriggered = false;
    if (pokemon.hasType("Electric")) {
      pokemon.volatiles["magnetrise"] = {
        id: "magnetrise",
        name: "Magnet Rise",
        target: pokemon
      };
    }
  },
  onUpdate(pokemon) {
    if (pokemon.hasType("Electric")) {
      return;
    }

    if (pokemon.volatiles["magnetrise"]) {
      delete pokemon.volatiles["magnetrise"];
    }

    if (this.effectState.berserkTriggered) return;

    this.effectState.berserkTriggered = true;
    if (pokemon.formeChange("Ryunit-Berserk", this.effect, true, "[silent]")) {
      this.add("-activate", pokemon, "ability: Back Unit", "Berserk Mode");
    }
  },
  flags: { failroleplay: 1, noreceiver: 1, noentrain: 1, notrace: 1, failskillswap: 1 },
  name: "Back Unit",
  rating: 3.5
})