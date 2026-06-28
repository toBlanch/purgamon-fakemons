({
  onStart(pokemon) {
    if (pokemon.hasType("Electric")) {
      pokemon.volatiles["magnetrise"] = {
        id: "magnetrise",
        name: "Magnet Rise",
        target: pokemon
      };
    }
  },
  onUpdate(pokemon) {
    if (pokemon.hasType("Electric") || pokemon.species.name === "Ryunit-Berserk") {
      return;
    }

    if (pokemon.volatiles["magnetrise"]) {
      delete pokemon.volatiles["magnetrise"];
    }

    pokemon.formeChange("Ryunit-Berserk", this.effect, true, "[silent]");
  },
  flags: { failroleplay: 1, noreceiver: 1, noentrain: 1, notrace: 1, failskillswap: 1 },
  name: "Back Unit",
  rating: 3.5
})