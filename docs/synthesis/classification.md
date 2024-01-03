# Synthesis methods

There are quite a few possible classifications of the synthesis methods. These two presented below are among the most useful. So, we can classify the methods by the aggregate states of the starting materials and by how the size of the particles changes during the process.

``` mermaid
graph TB
  A[Synthesis method classifications] --> B[by the aggregate states]
  A --> C[by the particle size change]
  B --> D[solid]
  B --> E[liquid]
  B --> F[gas]
  C --> G[top-down]
  C --> H[bottom-up]
```

### Aggregate states of precursors

You know that there are four states of the matter: gaseous, liquid, solid and plasma. The latter is usually disregarded in this classification, and the methods that use plasma are considered together with the gas phase techniques. Hence, we're left with three states in which the precursors may find themselves. Solid materials and nanomaterials can be condensed from the gas phase using, e.g., chemical vapor deposition, from the liquid state (and by "liquid" we usually understand some kind of solution, including colloid solutions), or from the solid state via pyrolysis, milling, decomposition, etc.

### Particle size change

The methods can also be divided into the top-down and bottom-up approaches.  With the top-down methods, you start with the bulk material, which is then transformed into either relatively thick powder or nanopowder. With the bottom-up, you start with materials that are already dispersed. In other words, the precursors are atomic- or molecular-scale. During the synthesis, these atoms, ions or molecules form clusters that subsequently aggregate into the (nano)particles.

``` mermaid
graph TB
  A[Top-down] --> B[Bulk]
  B --> C[Powder]
  C --> D["(Nano)particles"]
  E[Bottom-up] --> F[Molecules]
  E --> FF[Atoms]
  E --> FFF[Ions]
  F --> G[Clusters]
  FF --> G
  FFF --> G
  G --> D
```

## List of methods

Below is a list of methods that were, to some extent, discussed in this course. The methods are ordered according to the classifications given above.

### Top-down methods

This group includes:

- (Standard) ceramic technique
- Mechanical milling and mechanosynthesis
- Ultrasonic treatment
- Thermal decomposition

Interestingly, all of these methods use solid starting materials, although in the ultrasonic technique the precursors are dispersed in a liquid medium.

### Bottom-up methods

The bottom-up methods can be further subdivided into solution-based, where the starting materials exist as ions or complexes or some kinds of colloid particles in the respective solutions, and gas-phase condensation (*vapor deposition*) methods featuring the precursors as the components of the gaseous phase.

``` mermaid
graph TB
  A[Bottom-up] --> B[Solution syntheses]
  A --> C[Vapor deposition]
```

#### Solution syntheses

This broad group of synthesis techniques is also known as "Low Temperature", "Chimie Douce", or soft chemical methods because of the (generally) lower, then in the standard ceramic technique, process temperatures.

There are two to three main stages in a typical solution synthesis:

1. Preparation and processing of the precursor solutions
2. Dehydration / solvent removal
3. Annealing (optional)

While the third stage doesn't change much between methods, the first two may vary significantly, so they are what actually differentiates the methods within this group of synthesis approaches.

Solution synthesis methods include those that differ mostly in the preparation, mixing and treatment of the precursor solutions:

- Coprecipitation
- Hydrothermal synthesis
- Sol-gel synthesis
- Microwave-assisted synthesis
- Antisolvent precipitation

The following three solution synthesis techniques use supercritical fluids as solvents:

- Rapid Thermal Decomposition (of precursors) in Solution (RTDS)
- RESS (Rapid Expansion of a Supercritical Solution)
- Supercritical antisolvent precipitation (SAS)

The distinctive features of the following methods are the temperatures and the conditions of solvent removal:

- Cryochemical synthesis
- Spray drying
- Spray pyrolysis
- Combustion syntheses, including:
    - Pechini
    - modified Pechini
    - solution combustion syntheses
    - gel combustion
    - organic-nitrate methods
    - etc.



#### Gas phase syntheses

``` mermaid
graph TB
  A[Vapor deposition] --> B["Chemical (CVD)"]
  A --> C["Physical (PVD)"]
```

All the condensation, or vapor deposition, methods can be subdivided into chemical and physical. During the chemical condensation, as you may have guessed, chemical reaction occurs. Thus, the chemical composition of the gas and resulting solid are different. In contrast, the solid phase produced by one of the physical condensation methods usually possesses the same composition as the corresponding vapor.

- Chemical methods
    - Chemical vapor deposition (CVD), including:
        - thermally activated CVD
        - plasma-assisted CVD (PACVD, PECVD)
        - metalorganic CVD (MOCVD)
        - photo CVD (PCVD)
    - Flame hydrolysis
- Physical methods
    - Sputtering and sputter deposition
    - Pulsed laser deposition (PLD)
    - Thermal evaporation
    - Molecular beam epitaxy (MBE)
    - Detonation synthesis
    - Electric explosion of wires