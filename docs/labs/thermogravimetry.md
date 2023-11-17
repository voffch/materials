## Definitions

Thermogravimetry, which is often abbreviated as TG or TGA (from *thermogravimetric analysis*), is one of the thermal analysis techniques, defined by IUPAC as[^1]:

> A technique in which the mass of a substance (and/or its reaction product(s)) is measured as a function of temperature whilst the substance is subjected to a controlled temperature program.

Weighing something is a major method of quantifying its amount. Consequently, thermogravimetry is an extension of this method, allowing us to study how the amount of something changes with temperature or in time in different conditions. In addition to temperature ($T$), pressure ($p$) and the composition of the gas atmosphere are the main variable parameters in TGA.

## Basics

The basics of the method are fairly easy to understand, if not outright intuitive: we heat something up, its mass changes, the "balance" part of the "thermobalance" measures this change and records it along with the temperature as the useful signal. The interpretation of the nature of the mass changes often relies on the general knowledge and the magnitude of observed mass changes. Consider, for example, the following thermogravimetric curve for the decomposition of calcium oxalate monohydrate, $\ce{CaC2O4*H2O}$:

<figure markdown>
  ![TGA of CaC2O4*H2O](../img/thermogravimetry-lab/netzsch-calcium-oxalate-tg.webp){ width="600" }
  <figcaption markdown>Thermogravimetric curves for $\ce{CaC2O4*H2O}$ (source - [Netzsch](https://analyzing-testing.netzsch.com/en/application-literature/tga-measurements-on-calcium-oxalate-monohydrate))</figcaption>
</figure>

Even without knowing the exact stages in the decomposition, it is reasonable to suppose that the first step would consist of the loss of the crystal hydrate water. Indeed, the mass change observed during the first decomposition step, ≈12.3%, closely corresponds to the water content in the crystal hydrate (12.33%). Likewise, the other stages can be identified based on the temperatures at which they occur and on the corresponding mass losses:

$$\ce{CaC2O4*H2O -> CaC2O4 + H2O}$$

$$\ce{CaC2O4 -> CaCO3 + CO}$$

$$\ce{CaCO3 -> CaO + CO2}$$

However, this was a rather simple example, and the chemistry of the processes may not always be obvious from the TGA data alone. By the mass conservation law, when the mass of the sample changes, the composition of the atmosphere should change as well. In some cases, if the nature of observed mass changes is unclear, thermogravimetry can be coupled with evolved gas analysis (EGA) techniques to find out, for example, what gaseous products are released from the sample. In EGA, the gas outlet of the thermobalance is connected to the equipment (e.g., the mass spectrometer) that allows determining the gas composition. In turn, other methods, such as X-ray diffraction or elemental analysis, can be used to identify the composition of the solid residue after the TGA experiments.

### Buoyancy and corrections

**TO BE WRITTEN**

### TGA of nonstoichiometric oxides

**TO BE WRITTEN**

## Equipment

There are many scientific equipment manufacturers with thermobalances among their products, from the widely known, such as [Netzsch](https://analyzing-testing.netzsch.com/en/products/thermogravimetric-analysis-tga-thermogravimetry-tg), [Setaram](https://setaramsolutions.com/standard-solutions), [Linseis](https://www.linseis.com/en/products/thermogravimetric-analyzer-tga/), and
[TA Instruments](https://www.tainstruments.com/products/thermal-analysis/thermogravimetric-analysis/)
to the less well-known such as [CI Precision](https://www.ciprecision.com/products/recording-microbalances/). Accordingly, there are several different designs, from the Setaram's hang-down
symmetrical beam balance to the TA's (Rubotherm) magnetic suspension balance.

In this lab, we use one of the relatively basic (and, for that reason, one of the sturdiest) TGA setups, Netzsch STA 409 PC. The schematic of the setup is given in the figure below. The main parts are, of course, the furnace and the balance, which in this setup is placed underneath the furnace. The constant temperature of the balance is maintained with a curculating water bath thermostat (not shown). The protective dense alumina tube along with the gas sweep system allow controlling and maintaining the required gas atmosphere inside the thermobalance. There are two interchangeable sample holders (see *sensor* in the figure below) for Netzsch STA 409: for the differential scanning calorimetry (DSC) and for the thermogravimetry. In this lab, we're using the latter, which is basically a thermocouple onto which the thermogravimetric crucible is placed.

<figure markdown>
  ![Netzsch STA 409 PC](../img/thermogravimetry-lab/netzsch-sta-409.png)
  <figcaption>Netzsch STA 409 PC schematic</figcaption>
</figure>

## Measurements

1. First, the measurement crucible should be cleaned after the previous experiments. Cleaning the crucible involves the following steps:
    1. Dissolving the solid residues in acid ($\ce{HCl}$ or, even better, $\ce{HNO3}$) upon heating on a hot plate.
    2. Boiling the crucible in distilled water on a hot plate.
    3. Drying the thermogravimetric crucible (completely) in a big clean alumina crucible on a hot plate.
    4. Annealing the thermogravimetric crucible in an oven at 1100 °C for at least a few dozen minutes.
    5. Cooling the crucible down to room temperature.

    The thermogravimetric crucible should be handled only in gloves (especially after annealing) to prevent its contamination by grease from the hands.

2. Weigh the crucible on analytical balances and record its mass.
3. Put the sample powder (e.g., ≈1 g) into the crucible. Do not spill the sample onto the rim and the sides of the crucible.
4. Weigh the crucible with the sample inside on analytical balances and record the mass.
5. Place the crucible onto the thermocouple (sample holder) in the thermobalance and close the oven.
6. Now we should set the experiment parameters, including the name of the sample, the initial masses, the temperature program, the sweep gases, and so on. All of it is done in the software.

[^1]: IUPAC Gold Book: [thermogravimetry](https://doi.org/10.1351/goldbook.T06324) and [thermal analysis](https://doi.org/10.1351/goldbook.T06295) definitions