# Homework

In this homework assignment, you will analyze the data obtained during some of our labs. You will use the thermoanalytical data (thermogravimetric and dilatometric) and the X-ray diffraction results. Hopefully, this will give you a glimpse into possible relationships between the chemical composition and the properties in solids. 

We will focus on the $\ce{BaFe_{0.8}Co_{0.2}O_{3-\delta}}$ oxide, for which we have the most data. Our main goals are as follows: we need to determine the oxygen content (i.e., $3-\delta$), find out how it changes with temperature in air, and figure out whether this change influences the observed thermal expansion of the complex oxide.

I'm going to outline what you have to do below. I expect a written and illustrated report (in MS Word format or handwritten). You can use any software to perform calculations and make plots, although in Originlab Origin all this would be easier to do. The questions that I'd like to see answered and the tasks that I need you to perform are given below **in bold**.

## Oxygen content

To determine the absolute oxygen content, we reduced our sample in the thermogravimetric setup. After that, we performed the XRD analysis to find out what the products of the decomposition are. So, first,

**1. Perform the phase analysis using the XRD pattern of the products of reduction in hydrogen. Identify the phases present in the powder.**

The phase analysis can be done in Crystal Impact Match! with ICDD PDF-2 or Crystallography Open databases. The report should contain the XRD pattern where the positions of the peaks corresponding to different phases are labelled (e.g., by dashes below the pattern, as Match! does by default with selected matching phases).

Hints:

- Not all metals can be obtained by hydrogen reduction. In other words, not all oxides can be reduced in hydrogen. Some oxides remain oxides.
- Some metals tend to form alloys easily. This may even happen during the reduction.
- Obviously, no XRD database contains the data for all possible chemical compositions. However, there is a high chance to find a phase with the crystal structure and the chemical composition both quite similar to those of a substance you need.
- Remember that in-between the reduction and the actual XRD analysis the sample was stored and handled in ambient air. Some substances are highly reactive and interact with components of the ambient air, especially with water vapor, and to a lesser extent with $\ce{CO2}$. This means that the composition of what we took out of the thermobalance (i.e., of the reduction products) may not be exactly the same as the composition of what was analyzed by XRD.

**2. Write down the chemical reaction of the reduction of the complex oxide.**

Hints:

- For the purpose of our calculations, we don't need the most exact reaction, so all (if any) alloys identified among the products can be written as individual metals.
- The phases identified in the XRD pattern during the previous step may not be the same as the actual reduction products (see the hints above).

**3. Plot the mass (in %) vs time (in h or min) during the TG reduction experiment. Determine the total mass loss during the reduction. Calculate the oxygen nonstoichiometry and the oxygen content in the complex oxide in air at room temperature.**

The TGA setup that we used in our measurements is *special* because, after it was repaired, the factory calibration doesn't work well anymore. This is why we have a manually determined calibration coefficient,[^1] so please remember that *all the mass changes measured with this TGA should be multiplied by* $S = 1.03551$ *before using them for plotting or calculations*. Clearly, if 

$$\Delta m_\mathrm{true} = \Delta m_\mathrm{meas} \cdot S,$$

where $\Delta m_i = m_i - m_0$ is the absolute mass change, then

$$100\% \frac{m_\mathrm{true}}{m_0} = 100\% + (A - 100\%) \cdot S,$$

where $A = 100\% m_\mathrm{meas} / m_0$ is the remaining sample mass, in %, that's in your measurement file. In our case, this ($A$) is the measurement units set by default in the TGA analysis software that is used to export the data.

You may also remember that before the reduction experiment, we performed the TGA in dry air, where the last step was slow (2 K/min) cooling in air. Hence, the starting mass in the TGA reduction experiment is the mass of the sample with known history (slowly cooled in air) at room temperature. This mass and the mass of reduced oxide are the only numbers we actually need here from the TGA reduction data to find out what the value of $\delta$ is. The mass of reduced oxide (i.e., of the reduction products) is defined as the mass at the plateau (where the mass is more or less stable) during the high-temperature isothermal step.

The detailed instructions on how to perform these kinds of calculations are given on the [thermogravimetry](./labs/thermogravimetry.md) page.

## Oxygen content change

Now we know what the initial oxygen nonstoichiometry at room temperature is, but how does it change with temperature? To find out how, we performed the experiment in air right before the reduction experiment.

**4. Plot the mass (in %) vs temperature (in °C) for the whole experiment. Is there a noticeable mass change during the several-hour dwell time at the highest temperature? Why? Do the thermogravimetric curves measured during heating and cooling coincide? Why?**

You may not know *why* exactly, but you should be able to make an educated guess. Remember also that our TGA experiments were performed in the flow of dry air.

**5. Now make the same mass-temperature plot but for the cooling step only. Enlarge the low-temperature (up to 300 °C) part of the curve. Why do we see a small "hump" at low temperatures?**

Hint: this is not necessarily related to the sample. In fact, the answer to this question is on the [thermogravimetry](./labs/thermogravimetry.md) page.

Now reset the axes scale and look at the whole thermogravimetric cooling curve. The higher-temperature mass loss is due to the oxygen loss.

**6. Determine the onset temperature for the oxygen release process.**

**7. Calculate and plot the $\delta$ values in the whole measured temperature range using the thermogravimetric data obtained on cooling.**

I explained both how to find the extrapolated starting point temperature and how to calculate $\Delta \delta$ on the [thermogravimetry](./labs/thermogravimetry.md) page.

We already know the $\delta$ value in the sample at room temperature in air, right? And, from the TGA data, we can also calculate $\Delta \delta$, i.e., the change in $\delta$ relative to the initial point at room temperature. By summing up the $\Delta \delta$ values and the $\delta$ value, we obtain the temperature-dependent oxygen nonstoichiometry in the sample in air.

## Expansion

Let's now analyze the results of the dilatometric measurements, which, too, were performed in dry air. To carry out the analysis, you need to read and understand the content of the [dilatometry](./labs/dilatometry.md) page.

**8. Plot the relative expansion ($\Delta L/L_0$) vs temperature (in °C) for the whole experiment. Is there a noticeable length change during the several-hour dwell time at the highest temperature? Why? Do the dilatometric curves measured during heating and cooling coincide? Why?**

**9. Plot the dilatometric curve on cooling only. Find out the temperature at which the curve becomes noticeably steeper.**

By analogy with TGA results, use straight lines to extrapolate the lower- and higher-temperature curves, taking their intersection point as the temperature of interest.

Now look closely at your analysis of the TGA results (the $\delta$ plot) and the dilatometric curve.

**10. Why does the dilatometric curve become steeper at higher temperatures?**

**11. Plot the thermal expansion coefficient ($\alpha$) curve corresponding to the cooling step. Find out the average low-temperature (50-200 °C) and high-temperature (800-950 °C) values of $\alpha$. Which one is greater? Why?**

The answers to these two questions are actually similar.

There's an $\alpha$ column with the thermal expansion coefficient values in your measurement file, although you should be able to calculate $\alpha$ from $\Delta L/L_0$ by now.

**12. Fit a straight line to the low-temperature (up to 250 °C) range of the dilatometric $\Delta L/L_0$ curve. What is the physical meaning of the slope of this line? What is it equal to?**

In order to do this, you have to know how the curve fitting works.

## Comparison

The prior tasks were performed using the data for the $\ce{BaFe_{0.8}Co_{0.2}O_{3-\delta}}$ oxide only. The next two require the data for the other oxide, $\ce{BaFe_{0.6}Co_{0.4}O_{3-\delta}}$. It is true that we didn't reduce it in hydrogen and, hence, we don't know the absolute oxygen content in it. However, some primitive comparisons between the properties of these two oxides can be made even with our limited data.

**13. Plot the cooling steps of the thermogravimetric curves (remaining mass in %, vs the temperature in °C) for both oxides together in one plot. The curves should start at 100% (the mass at room temperature should be 100%). Which oxide loses more oxygen upon heating up to 1100 °C?**

**14. Plot the dilatometric curves for both oxides together in one plot. Which oxide possesses higher chemical expansion? How different are their low-temperature (up to 250 °C) thermal expansion coefficients?**

[^1]: Turns out this is a standard TGA calibration method, ASTM E 2040 "Standard Test Method for Mass Scale Calibration of Thermogravimetric Analyzers", [https://doi.org/10.1520/E2040-19](https://doi.org/10.1520/E2040-19)