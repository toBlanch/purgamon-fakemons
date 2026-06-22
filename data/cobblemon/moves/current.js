({
    accuracy: true,
    basePower: 0,
    category: "Status",
    name: "Current",
    pp: 20,
    priority: 0,
    flags: { snatch: 1, metronome: 1 },
    sideCondition: "current",
    onTry() {
      return !source.isGrounded();
    },
    condition: {
      duration: 5,
      durationCallback(target, source, effect) {
        if (source?.hasItem("lightclay")) {
          return 8;
        }
        return 5;
      },
      onAnyModifyDamage(damage, source, target, move) {
        if (target !== source && this.effectState.target.hasAlly(source)) {
          return this.chainModify([4096, 2732]);
        }
      },
      onSideStart(side) {
        this.add("-sidestart", side, "move: Current");
      },
      onSideResidualOrder: 26,
      onSideResidualSubOrder: 10,
      onSideEnd(side) {
        this.add("-sideend", side, "move: Current");
      }
    },
    secondary: null,
    target: "allySide",
    type: "Flying",
    zMove: { boost: { spe: 1 } },
    contestType: "Beautiful"
  })