({
    onSwitchOut(pokemon) {
        const secondWindDuration = 2;

        if(pokemon.side.sideConditions["tailwind"] &&
           pokemon.side.sideConditions["tailwind"].duration >= secondWindDuration) {
            return;
        }

        pokemon.side.addSideCondition("tailwind");

        if (pokemon.side.sideConditions["tailwind"]) {
            pokemon.side.sideConditions["tailwind"].duration = secondWindDuration;
        }
    },
    flags: {},
    name: "Second Wind",
    rating: 4
})