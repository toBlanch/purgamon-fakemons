({
    onSourceDamagingHit(damage, target, source, move) {
      if (target.hasAbility("shielddust") || target.hasItem("covertcloak"))
        return;
      if (move.type === "Fire" && this.randomChance(3, 10)) {
        target.trySetStatus("psn", source);
      }
    },
    flags: {},
    name: "Chemical",
    rating: 4.5
})