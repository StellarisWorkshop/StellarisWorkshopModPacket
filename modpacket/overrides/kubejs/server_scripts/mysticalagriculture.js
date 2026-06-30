ServerEvents.recipes(event => {
	event.remove({ output: "mysticalagriculture:aluminum_crop" })
    event.shaped(
		'mysticalagriculture:aluminum_seeds',
        [
            'ABA',
            'BCB',
            'ABA'
        ],
        {
            C: 'mysticalagriculture:prosperity_seed_base',
            A: 'gtceu:aluminium_ingot',
            B: 'mysticalagriculture:prudentium_essence'
        }
    )
	
	event.shaped(
        'mysticalagriculture:chrome_seeds',
        [
            'ABA',
            'BCB',
            'ABA'
        ],
        {
            C: 'mysticalagriculture:prosperity_seed_base',
            A: 'gtceu:chromium_ingot',
            B: 'mysticalagriculture:prudentium_essence'
        }
    )
	
	event.shaped(
        'mysticalagriculture:rubber_seeds',
        [
            'ABA',
            'BCB',
            'ABA'
        ],
        {
            C: 'mysticalagriculture:prosperity_seed_base',
            A: 'gtceu:rubber_ingot',
            B: 'mysticalagriculture:prudentium_essence'
        }
    )
});
