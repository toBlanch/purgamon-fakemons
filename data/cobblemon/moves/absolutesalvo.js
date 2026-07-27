({
    accuracy: 100,
    basePower: 50,
    category: "Special",
    name: "Absolute Salvo",
    pp: 10,
    priority: 0,
    flags: { protect: 1, mirror: 1, metronome: 1 },
    onTryMove(pokemon, target, move) {
      if (pokemon.hasType("Electric"))
        return;
      this.add("-fail", pokemon, "move: Absolute Salvo");
      this.attrLastMove("[still]");
      return null;
    },
    self: {
      onHit(pokemon) {
        pokemon.setType(pokemon.getTypes(true).map((type) => type === "Electric" ? "???" : type));
        this.add("-start", pokemon, "typechange", pokemon.getTypes().join("/"), "[from] move: Absolute Salvo");
      }
    },
    target: "normal",
    type: "Electric",
    secondary: null,
    multihit: 2,
    contestType: "Clever",
    zMove: { basePower: 140 },
    maxMove: { basePower: 130 }
})