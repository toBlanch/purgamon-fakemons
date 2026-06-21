({
  accuracy: 100,
  basePower: 50,
  category: "Special",
  name: "Morning Breeze",
  pp: 10,
  priority: 0,
  flags: { protect: 1, mirror: 1, heal: 1 },
  selfSwitch: true,
  onAfterMoveSecondarySelf(source, target, move) {
    if (!this.canSwitch(source.side)) {
      return;
    }

    if (source.lastDamage <= 0) {
      return;
    }

    const healAmount = Math.floor(source.lastDamage / 2);
    if (healAmount <= 0) {
      return;
    }

    this.add("-message", "The breeze restores the ally Pokemon.");
    if (source.side.addSlotCondition(source, "wish", source, move) || source.side.slotConditions[source.position]?.["wish"]) {
      const wishState = source.side.slotConditions[source.position]["wish"];
      wishState.hp = healAmount;
      wishState.duration = 1;
    }
  },
  secondary: null,
  target: "normal",
  type: "Flying",
})