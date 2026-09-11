({
    accuracy: 100,
    basePower: 0,
    category: "Status",
    name: "Crystalline Snare",
    pp: 15,
    priority: 0,
    flags: { protect: 1, mirror: 1, metronome: 1 },
    volatileStatus: "crystallinesnare",
    condition: {
      onStart(pokemon) {
        this.add("-start", pokemon, "move: Crystalline Snare");
        this.effectState.time = 3;
      },
      onResidualOrder: 14,
      onResidual(pokemon) {
        this.boost({ def: -1, spd: -1 }, pokemon, this.effectState.source, this.dex.getActiveMove("crystallinesnare"));
        pokemon.volatiles["crystallinesnare"].time--;
        if (!pokemon.volatiles["crystallinesnare"].time) {
          pokemon.removeVolatile("crystallinesnare");
          return;
        }
      },
      onTrapPokemon(pokemon) {
        pokemon.tryTrap();
      },
      onEnd(target) {
        this.add("-end", target, "crystallinesnare");
      },
    },
    secondary: null,
    target: "normal",
    type: "Rock"
})