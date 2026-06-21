({
  onStart(pokemon) {
    this.effectState.berserkTriggered = false;
    if (pokemon.hasType("Electric")) {
      this.add("-ability", pokemon, "Levitate");
    }
  },
  onUpdate(pokemon) {
    if (this.effectState.berserkTriggered || pokemon.hasType("Electric")) return;

    this.effectState.berserkTriggered = true;
    if (pokemon.formeChange("Ryunit-Berserk", this.effect, true, "[silent]")) {
      this.add("-activate", pokemon, "ability: Back Unit", "Berserk Mode");
    }
  },
  onTryHit(target, source, move) {
    if (move.type === 'Ground' && !this.effectState.berserkTriggered) {
      return false;
    }
  },
  flags: { failroleplay: 1, noreceiver: 1, noentrain: 1, notrace: 1, failskillswap: 1 },
  name: "Back Unit",
  rating: 3.5
})