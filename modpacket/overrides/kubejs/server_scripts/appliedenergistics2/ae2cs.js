ServerEvents.recipes(event => {
	event.remove({ output: "ae2cs:circuit_etcher" })
    event.shaped(
        Item.of('ae2cs:circuit_etcher', '{}'),
        [
            'ABA',
            'BCB',
            'ABA'
        ],
        {
            C: Item.of('gtceu:mv_circuit_assembler', '{}'),
            A: Item.of('ae2cs:purified_meteor_crystal', '{}'),
            B: Item.of('ae2:engineering_processor', '{}')
        }
    )
	
    event.shaped(
        Item.of('advanced_ae:adv_pattern_encoder', '{}'),
        [
            'ABA',
            'BCB',
            'ABA'
        ],
        {
            C: Item.of('ae2:engineering_processor', '{}'),
            A: Item.of('ae2:charged_certus_quartz_crystal', '{}'),
            B: Item.of('minecraft:redstone_wire', '{}')
        }
    )
});
