({
    accuracy: 100,
    basePower: 40,
    category: "Special",
    name: "Absolute Salvo",
    pp: 5,
    priority: 0,
    flags: { protect: 1, mirror: 1, metronome: 1 },
    onTryMove(pokemon, target, move) {
      if (pokemon.hasType("Electric"))
        return;
      this.add("-fail", pokemon, "move: Absolute Salvo");
      this.attrLastMove("[still]");
      return null;
    },
    onHit(target, source, move) {
      move.category = "Physical";
    },
    self: {
      onHit(pokemon) {
        if (!pokemon.hasType("Electric"))
          return;
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