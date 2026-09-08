({
    onSourceAfterFaint(length, target, source, effect) {
      if (effect && effect.effectType === "Move" && effect.flags["contact"]) {
        this.heal(source.baseMaxhp / 5, source);
      }
    },
    flags: {},
    name: "Carnivorous",
    rating: 4
})