ServerEvents.recipes(event => {
	//
	event.remove({ output: 'mysticalagriculture:infusion_altar' })
	event.remove({ output: 'mysticalagriculture:infusion_pedestal' })
	event.remove({ output: 'mysticalagriculture:awakening_altar' })
	event.remove({ output: 'mysticalagriculture:awakening_pedestal' })
	
	// 灌注祭坛
    event.shaped(
        Item.of('mysticalagriculture:infusion_altar'),
        [
            'ABA',
            'BCB',
            'ABA'
        ],
        {
            A: 'botania:manasteel_ingot',
            B: 'minecraft:stone',
            C: 'mysticalagriculture:prosperity_shard'
        }
    )

    // 灌注基座
    event.shaped(
        Item.of('mysticalagriculture:infusion_pedestal', 4),
        [
            ' A ',
            'ABA',
            ' A '
        ],
        {
            A: 'botania:manasteel_ingot',
            B: 'minecraft:stone'
        }
    )

    // 觉醒祭坛
    event.shaped(
        Item.of('mysticalagriculture:awakening_altar'),
        [
            'ABA',
            'BCB',
            'ABA'
        ],
        {
            A: 'botania:terrasteel_ingot',
            B: 'minecraft:obsidian',
            C: 'mysticalagriculture:prosperity_shard'
        }
    )

    // 觉醒基座
    event.shaped(
        Item.of('mysticalagriculture:awakening_pedestal', 4),
        [
            ' A ',
            'ABA',
            ' A '
        ],
        {
            A: 'botania:terrasteel_ingot',
            B: 'minecraft:obsidian'
        }
    )
	
	//作物
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
