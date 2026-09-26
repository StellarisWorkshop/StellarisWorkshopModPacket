ServerEvents.recipes((event) => {
	const greg = event.recipes.gtceu;
	//氟石
    event.recipes.gtceu.chemical_reactor("fluorite_dust")
        .itemInputs('gtceu:calcium_dust')
        .inputFluids("gtceu:fluorine 2000")
        .itemOutputs('3x mekanism:dust_fluorite')
        .EUt(480)
        .duration(200)
		
	//Mek锭变成粉
    event.recipes.gtceu.macerator("dust_refined_obsidian")
        .itemInputs('mekanism:ingot_refined_obsidian')
        .itemOutputs('mekanism:dust_refined_obsidian')
        .EUt(120)
        .duration(60)
		
    event.recipes.gtceu.macerator("glowstone_dust")
        .itemInputs('mekanism:ingot_refined_glowstone')
        .itemOutputs('minecraft:glowstone_dust')
        .EUt(120)
        .duration(60)
});
