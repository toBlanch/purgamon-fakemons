({
    accuracy: 100,
    basePower: 80,
    category: "Special",
    name: "Crystalline Snare",
    pp: 20,
    priority: 0,
    flags: { protect: 1, mirror: 1, metronome: 1 },
    volatileStatus: "octolock",
    condition: {
      onStart(pokemon, source) {
        this.add("-start", pokemon, "move: Crystalline Snare", "[of] " + source);
      },
      onResidualOrder: 14,
      onResidual(pokemon) {
        this.boost({ def: -1, spd: -1 }, pokemon, this.effectState.source, this.dex.getActiveMove("crystallinesnare"));
      }
    },
    secondary: null,
    target: "normal",
    type: "Rock",
    contestType: "Beautiful"
  })