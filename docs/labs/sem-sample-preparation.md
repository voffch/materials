# Sample preparation for SEM and EDS

Scanning electron microscopy (SEM)[^1] is an imaging technique that is based on the interaction of a high-energy (up to 30 keV) electron beam with the objects of study. Energy-dispersive spectrometry (EDS) capability is realized in some microscopes via a separate EDS detector. This technique enables the elemental analysis by quantifying the characteristic X-ray radiation emitted from the sample under the electron beam.

## Requirements

The things that we can put into a scanning electron microscope for imaging and elemental analysis had better be:

1. **Stable in vacuum**, which in the SEM specimen chamber is usually high (e.g., $10^{-2}$ Pa). Low-vacuum imaging (Variable Pressure SEM) is available as an option only in some microscopes.
2. **Stable under the electron beam**, which due to its high energy and small diameter can cause radiation damage to some (mostly, but not only, organic) materials.
3. **Conductive**. "How conductive exactly" is a tricky question and it's mostly a matter of trial and error to determine whether the sample is conductive enough. What's perfectly clear is that there should be a path to the electrical ground from any point onto which the electron beam falls during the SEM measurements. Consider this: where do all the electrons from the beam go after encountering the sample? The equation for the electron currents is as follows:

$$ i_\mathrm{B} = i_\mathrm{BSE} + i_\mathrm{SE} + i_\mathrm{SC}, $$

where $i_\mathrm{B}$, $i_\mathrm{BSE}$, $i_\mathrm{SE}$, and $i_\mathrm{SC}$ are the incident beam current, the backscattered electron (BSE) current, the secondary electron (SE) current and the specimen current, respectively. Both BSE and SE electrons fly away, and some of them hit the respective detectors and produce the useful signals for the SEM imaging. However, the fraction of the electron beam current that is absorbed by the sample, $i_\mathrm{SC}$, should also go somewhere. If there is no path to the ground from the sample via the specimen stage of the microscope, the absorbed electrons will accumulate in the sample, and their electrostatic field will decelerate and deflect the incident beam, producing the so-called charging artefacts in the SEM images.

Those three in the list above are the most general requirements. The first condition is absolute - if a sample is not stable in any vacuum, it cannot be used for SEM. The issues arising from the non-compliance with the second and third requirements are the radiation damage and the charging, respectively. Both can be, to some extent, compensated (but not eliminated!) by adjusting the measurement parameters such as the electron beam energy and current and the frame time (or scanning rate) of the image acquisition.

For the most accurate (semi-quantitative or quantitative) EDS analysis, the sample should also be:

1. **Homogeneous** in terms of the density and the chemical composition throughout the entire volume in which the characteristic X-rays are generated under the incident electron beam;
2. **Flat** and highly polished so that no physical surface defects, such as scratches, pits, and so on, could either modify the interaction of the electron beam with the specimen or alter the subsequent X-ray absorption path length to the detector compared to an ideal flat bulk specimen. This is because the underlying assumption in the EDS quantification algorithms is that the incident electron beam falls perpendicular to the smooth sample surface, and any deviation from this geometry may influence the results obtained.

See also the Goldstein's[^2] very detailed discussions on how the unevenness of the sample surface may distort the EDS results.

## Samples

The following short discussion is related primarily to the *polycrystalline ceramic materials*. Quite exhaustive information on various other sample preparation, from inorganics to biological specimens, can be found in the textbooks such as this one.[^3]

So, we may be interested in the following properties of powdered or sintered ceramics:

- *microstructure*, or [morphology](https://doi.org/10.1351/goldbook.MT07285). In this case, only the [coating](#coating) may be required if the material is not conductive enough and exhibits charging. Depending on the task at hand, either *powders* or *sintered ceramic products* can be used.
- *composition*, in which case we definitely need EDS analysis. As the interpretation of the EDS results from the *powders* or *sintered ceramic products* may be hindered by the complex microstructure of the raw sample surfaces,[^2] for the best EDS analysis, [polishing](#polishing) is required. If the sample is small and does not allow its convenient handling during polishing, an additional [mounting](#mounting) step is necessary. The subsequent [coating](#coating) may or may not be needed depending on the conductivities of the sample and the mounting medium.

Please also note that some morphological studies may also benefit from mounting and polishing, as it is easier to determine the grain sizes and grain boundaries from the images of the polished surfaces.

For various reasons, and not in the least because of the practical importance of metals and alloys, the combination of mounting, polishing and coating is often called "metallographic sample preparation".

## Mounting

**TO BE WRITTEN**

## Polishing

**TO BE WRITTEN**

<figure markdown>
  ![Polylab](../img/sem-sample-preparation-lab/polylab-machine.jpg)
  <figcaption markdown>ПОЛИЛАБ П12Лб grinder/polisher ([source](http://polylab.info/%d0%be%d0%b1%d0%be%d1%80%d1%83%d0%b4%d0%be%d0%b2%d0%b0%d0%bd%d0%b8%d0%b5-%d0%b8-%d1%80%d0%b0%d1%81%d1%85%d0%be%d0%b4%d0%bd%d1%8b%d0%b5-%d0%bc%d0%b0%d1%82%d0%b5%d1%80%d0%b8%d0%b0%d0%bb%d1%8b-%d0%b4/probopodgotovka-oborudovanie-i-stanki/shlifovalno_polirovalnye_stanki/polylab_p12/), Russian)</figcaption>
</figure>

## Coating

**TO BE WRITTEN**

## Selected videos

Below are two different videos showing how the metallographic sample preparation is actually performed.

<iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/UuHofNW40Yw?si=hEyZP640yvAVuBEQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

<p></p>

<iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/ok42dVq2CU0?si=2l4H-wg7Qzb2s-qN" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

If you'd like to delve deeper, there's also a [YouTube channel](https://www.youtube.com/channel/UCP8i7-Oi78qvo2EyqV3BdiA/videos) with several long detailed videos on the aspects of mounting and polishing. Or just search for the "metallographic sample preparation" techniques.

[^1]: See also the [IUPAC definition](https://doi.org/10.1351/goldbook.S05484)
[^2]: Joseph I. Goldstein et al., Scanning Electron Microscopy and X-Ray Microanalysis, 4th ed., Springer New York, 2017, eISBN 978-1-4939-6676-9, [https://doi.org/10.1007/978-1-4939-6676-9](https://doi.org/10.1007/978-1-4939-6676-9)
[^3]: Patrick Echlin, Handbook of Sample Preparation for Scanning Electron Microscopy and X-Ray Microanalysis, Springer New York, 2011, eISBN 978-0-387-85731-2, [https://doi.org/10.1007/978-0-387-85731-2](https://doi.org/10.1007/978-0-387-85731-2)