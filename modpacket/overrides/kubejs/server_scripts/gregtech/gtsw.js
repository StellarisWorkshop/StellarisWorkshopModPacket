ServerEvents.recipes(event => {
    event.shaped(
        Item.of('gtsw:hp_steam_sieve', '{}'),
        [
            'ABA',
            'BCB',
            'ABA'
        ],
        {
            C: Item.of('gtsw:lp_steam_sieve', '{}'),
            A: Item.of('gtceu:steel_plate', '{}'),
            B: Item.of('gtceu:steel_bolt', '{}')
        }
    )
});
