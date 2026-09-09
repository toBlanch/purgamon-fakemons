({
    accuracy: 100,
    basePower: 25,
    category: "Special",
    name: "Feather Barrage",
    pp: 5,
    priority: 0,
    flags: { protect: 1, mirror: 1, metronome: 1 },
    onTryMove(attacker, defender, move) {
        if(!this.queue.willMove(defender)){
            if (defender.lastMove) {
                move.multihit = 1;
            }
            else {
                move.multihit = 5;
            }
            return;
        }

        const ratio = attacker.getStat("spe") / defender.getStat("spe");
        const additionalHits = Math.max(Math.floor((ratio - 1) * 4), 0);
        const hits = 1 + Math.min(additionalHits, 4);
        move.multihit = hits;
    },
    target: "normal",
    type: "Flying",
    secondary: null,
    multihit: 1,
    contestType: "Clever",
    zMove: { basePower: 140 },
    maxMove: { basePower: 130 }
})