## Basics

This lab demonstrates a typical "soft-chemical" combustion synthesis of complex oxide materials. As a material to synthesize, we'll use a perovskite-type $\ce{BaFe_{0.8}Co_{0.2}O_{3-\delta}}$ oxide. The procedure is quite general and can be adapted to many other oxides.

The following starting materials are used:

- $\ce{BaCO3}$ (pre-annealed at 400 °C)
- $\ce{FeC2O4*2H2O}$ (taken "as is")
- $\ce{Co}$ (prepared by reducing $\ce{Co3O4}$ during [the other lab](./co-preparation.md))

The synthesis consists of the following steps:

1. Dissolution of stoichiometric amounts of precursors in a slight excess of nitric acid upon heating.
2. Mixing together the prepared solutions.
3. Addition of the pre-calculated amount of glycerol, which will act first as a complexing agent and then as a fuel in the subsequent combustion.
4. Further heating. The solvent evaporates, and then the resulting gel-like substance, upon further heating, self-ignites, resulting in thin cation-containing ash.
5. Post-annealing the precursor ash at different elevated temperatures.

The purpose of the whole process is to prepare a stable cation-containing nitrate solution, which, upon further heating, will transform into a gel-like solid with more or less homogeneous distribution of cations. The green ash, resulting from the subsequent self-combustion, in most cases still requires post-annealing at elevated temperatures to synthesize the required oxide phase. However, because, initially, all the cations were well mixed on an ionic level, this post-processing should require less time, effort, and lower temperatures than a similar solid-state synthesis.

## Calculations

The precursors we need to know the amounts of include cation-containing compounds (salts, metals, etc., such as the ones listed [above](#basics)) as well as $\ce{HNO3}$ and the fuel (e.g., glycerol, $\ce{C3H8O3}$). The amount of fuel depends on the amount of oxidizer (both nitrates and an excess of nitric acid), which depends on the amounts of metal cations.

### Solids

The amounts of solid salts and metals can be calculated using the overall synthesis reaction, such as

$$\ce{5BaCO3 + 4FeC2O4*2H2O + Co + 5O2 = 5BaFe_{0.8}Co_{0.2}O_{3} + 13CO2 + 8H2O}.$$

In these calculations, if the actual nonstoichiometry index $\delta$ is unknown, the oxide is often assumed to be stoichiometric. Obviously, this assumption is only valid here because it doesn't influence cationic stoichiometry. Note also that the chemical equations can be balanced automatically, and the masses of the precursors - calculated conveniently using specialized tools.[^1]

### Nitric acid

Next, the amounts of nitric acid required for dissolving the solid precursors should be found out. However, the calculations according to the corresponding chemical equations, e.g.,

$$\ce{BaCO3 + 2HNO3 = Ba(NO3)2 + H2O + CO2}, \label{dissol1}$$

$$\ce{FeC2O4*2H2O + 6HNO3 = Fe(NO3)3 + 5H2O + 2CO2 + 3NO2}, \label{dissol2}$$

$$\ce{Co + 4HNO3 = Co(NO3)2 + 2H2O + 2NO2}, \label{dissol3}$$

yield the amounts and masses of "100% $\ce{HNO3}$". To calculate the volume of the actual aqueous $\ce{HNO3}$ solution in which we're going to dissolve the precursors, we need to know the concentration and the density of this solution. The concentration of commercially available $\ce{HNO3}$ is usually around 65 wt.%, and the density can be found in reference textbooks.[^2] Thus, we can easily calculate the ratio such as

$$\frac{V(\ce{65\% HNO3 solution})}{m(\ce{100\% HNO3})} = 1.10587 \pu{\frac{ml}{g}},$$

where the denominator follows from the mass balance of the respective equations ($\ref{dissol1}$-$\ref{dissol3}$). The as-obtained volumes of $\ce{HNO3}$ should be rounded up and then may be slightly increased to ensure both the complete dissolution of the precursors and an acidic pH of the resulting nitrate solutions, which is necessary to prevent unwanted hydrolysis. Please also note that reactions $\ref{dissol2}$-$\ref{dissol3}$ are written for the "worst possible case" of the dissolution, in which some nitric acid is transformed into $\ce{NO2}$. While these reactions may not be strictly correct from the chemical viewpoint, the amounts of acid calculated in accordance with them will definitely be somewhat excessive, just as we need them to be.

### Fuel

The fuel oxidation reaction is usually written for the complete combustion process, resulting in gaseous $\ce{N2}$, $\ce{CO2}$ and $\ce{H2O}$, such as:

$$\ce{5C3H8O3 + 14HNO3 = 15CO2 + 27H2O + 7N2}. \label{glycerolcombustion}$$

There are different ways of calculating the amount of fuel, especially if you'd like to fine-tune the oxidizer/fuel ratio, purposefully creating fuel-lean, fuel-rich or stoichiometric mixtures. If so, you would probably need to approach more thoroughly the dissolution reactions such as $\ref{dissol2}$-$\ref{dissol3}$ so as to be able to evaluate the exact content of the oxidizers - nitrates and nitric acid - in the mixed nitrate solution to which the fuel will be added.

If you don't need such thorough synthesis optimization, which is usually the case, then, perhaps, the easiest and the most straightforward way is to add an excess of fuel. In our case, we can estimate the amount of glycerol by assuming that all the added [nitric acid](#nitric-acid) that we use to dissolve the precursors has to be reduced by glycerol according to Equation $\ref{glycerolcombustion}$. Again, these calculations do not take into account that some $\ce{HNO3}$ may fly away as $\ce{NO}_x$; however, if it does so, then we'll definitely get the fuel in excess.

It can be easily proven that we need to add 0.472 g of glycerol per each ml of concentrated (ca 65%) $\ce{HNO3}$ solution.

## Procedure

1. Calculate the required masses (for the solids and glycerol) and volumes (for nitric acid) of the precursors. The calculations should be performed for around 10 g of resulting product, which is a typical amount for a small-batch synthesis. This should be enough for all the subsequent measurements.
2. Weigh the calculated amounts of the solid precursors into separate small (e.g., 100-200 ml) beakers using the analytical balance.
3. Pour small amounts of distilled water into the beakers so as to cover the powders. Then, add the calculated volumes of nitric acid solution into the beakers. The reactions may be highly exothermic. The acid addition must be done carefully, literally dropwise (use glass stirring rods), with periodic mixing of the beaker contents.
4. If the powders are not fully dissolved, heat the beakers on a hot plate. Do not allow excessive boiling to prevent the loss of the solutions. Some nitrates are relatively poorly soluble, in which case more distilled water should be added. Such is the case, for example, for $\ce{Ba(NO3)2}$.
5. After everything dissolves, take an evaporating dish and weigh into it the required amount of glycerol.
6. Pour all the nitrate solutions into the evaporating dish and mix everything with a glass rod.
7. Place the evaporating dish on a hot plate, regulating the heat so as to prevent excessive boiling. At this stage, too, we need simmering to evaporate the solvent, but not vigorous boiling that will result in the loss of the solution.
8. When the water has evaporated completely, you can top up the heat to aid in the subsequent self-ignition.
9. If no self-ignition occurs, you may help the process by carefully dripping small amount of ethanol into the evaporating dish and setting it on fire with a lighter.
10. Turn off the heat, gather the resulting green ash into the crucible and calcine it several times at high temperatures (depends on the oxide, 900-1100 °C in this case), starting with the lowest and sequantially raising the temperature for 100 °C, for 8-12 h at each temperature, with intermediate regrindings.
11. Find out what the phase composition of the sample is by taking a small fraction of the powder for X-ray diffraction analysis. You may need a [paper packet](../origami.md) for this purpose.

[^1]: Such as this one: [https://chemcalc.xyz/](https://chemcalc.xyz/)
[^2]: Handbook Of Analytical Chemistry by Ju. Lurie, Mir Publishers, 1978, available at [archive.org](https://archive.org/details/lurie-handbook-of-analytical-chemistry-mir-1978/page/159/mode/2up)