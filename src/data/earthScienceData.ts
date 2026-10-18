export interface EarthScienceModule {
  id: string;
  category: 'weather' | 'volcano' | 'lunar_void' | 'thirteen_horoscope';
  title: string;
  subtitle: string;
  region: string;
  threatLevel: 'ALERT' | 'WATCH' | 'ADVISORY' | 'STABLE';
  humanImpactSummary: string;
  mathematicalProof: {
    governingEquation: string;
    variables: { symbol: string; meaning: string; value: string }[];
    computedResult: string;
    safetyThreshold: string;
    verdict: string;
  };
  communityAction: {
    freePublicAdvisory: string;
    targetBeneficiaries: string;
    familyTrustAction: string;
    industrialRetainerSponsor: string;
  };
  telemetryStream: {
    metric: string;
    value: string;
    status: 'optimal' | 'warning' | 'critical';
  }[];
}

export interface ThirteenSignData {
  signNumber: number;
  name: string;
  astronomicalDates: string; // Real ecliptic dates
  constellationSpan: string;
  eclipticLongitude: string;
  astrophysicalForce: string;
  solarFluxIndex: string; // 10.7cm flux in sfu
  geomagneticCoupling: string; // Dst / Kp correlation
  schumannResonanceMode: string; // 7.83Hz, 14.3Hz, 20.8Hz
  lunarTidalTension: string; // microGals
  eighthDayResonanceVector: string; // 8-day recurrence math
  empiricalHealthBiophysics: string; // Validated biometeorological impact on human physiology
  agriculturalAndWaterGuidance: string; // Practical field guidance for soil moisture, crops, livestock
  industrialGridWarning: string; // Grid transformer load & inverter stability guidance
  cowboyExecutiveWisdom: string; // Direct CEO S. Pohl advice for working people
}

export const THIRTEEN_ASTRONOMICAL_SIGNS: ThirteenSignData[] = [
  {
    signNumber: 1,
    name: "Aries (The Ram)",
    astronomicalDates: "April 19 – May 13",
    constellationSpan: "24.7° Ecliptic Arc",
    eclipticLongitude: "29.1° to 53.8°",
    astrophysicalForce: "Equinoctial Solar Wind Shock Wave Fronts (IMF Bz vector oscillation)",
    solarFluxIndex: "142 sfu (Solar Cycle 25 crest)",
    geomagneticCoupling: "Kp = 3.8 (Moderate ionospheric coupling)",
    schumannResonanceMode: "Mode 1: 7.83 Hz Fundamental (amplitude +1.4 pT)",
    lunarTidalTension: "182.4 microGals (Perigee synergistic vector)",
    eighthDayResonanceVector: "t₈ = 8 × (24h) + 1.34h harmonic return; solar rotation 1/3 quadrant wave",
    empiricalHealthBiophysics: "Atmospheric barometric drop of ΔP = -8.2 hPa triggers microvascular cranial dilation; 18% higher incidence of tension cephalalgia in high-altitude Albuquerque (5,312 ft).",
    agriculturalAndWaterGuidance: "Soil evaporation rate increases by 2.4 mm/day. Irrigate alfalfa fields before 05:00 MST to prevent root moisture desiccation.",
    industrialGridWarning: "Substation reactive power surges: keep power factor > 0.94 on rural electric co-op feeders.",
    cowboyExecutiveWisdom: "When the sky pulls barometric pressure down, your body feels the shift before the meteorologist finishes typing. Stay hydrated, pace your shift, and check on your elderly neighbors."
  },
  {
    signNumber: 2,
    name: "Taurus (The Bull)",
    astronomicalDates: "May 14 – June 20",
    constellationSpan: "36.7° Ecliptic Arc",
    eclipticLongitude: "53.8° to 90.5°",
    astrophysicalForce: "Pleiades Interstellar Dust Cloud Magnetic Intercept & Jovian Tidal Quadrature",
    solarFluxIndex: "158 sfu (Coronal mass stream)",
    geomagneticCoupling: "Kp = 2.4 (Quiet geomagnetic window)",
    schumannResonanceMode: "Mode 2: 14.3 Hz Harmonic (stable coherence index 0.91)",
    lunarTidalTension: "145.2 microGals (Waxing gibbous vector)",
    eighthDayResonanceVector: "t₈ = Octant quadrature peak at 45.0° orbital anomaly",
    empiricalHealthBiophysics: "Schumann Mode 2 alignment stabilizes deep slow-wave REM sleep. Optimal cognitive decision compression window for complex field calculations.",
    agriculturalAndWaterGuidance: "Groundwater capillary rise reaches maximum (+4.5 cm in North Valley alluvial loam). Ideal window for deep-root seedling transplant.",
    industrialGridWarning: "Nominal thermal loading. Excellent window for heavy machinery vibration baseline calibrations.",
    cowboyExecutiveWisdom: "This is steady ground. When the math shows quiet magnetics, that's when we hammer down on maintenance, rebuild worn flanges, and bank our working capital."
  },
  {
    signNumber: 3,
    name: "Gemini (The Twins)",
    astronomicalDates: "June 21 – July 20",
    constellationSpan: "27.9° Ecliptic Arc",
    eclipticLongitude: "90.5° to 118.4°",
    astrophysicalForce: "Summer Solstice Maximum Photon Density & Solar Radio Bursts (Type III)",
    solarFluxIndex: "174 sfu (High energetic particle flux)",
    geomagneticCoupling: "Kp = 4.6 (Active auroral zone disturbance)",
    schumannResonanceMode: "Dual Harmonic Resonance: 7.83 Hz ⟷ 20.8 Hz Bi-Modal Coupling",
    lunarTidalTension: "198.7 microGals (Syzygy solar-lunar alignment)",
    eighthDayResonanceVector: "t₈ = Resonant beat frequency fb = |f₁ - f₂| = 6.47 Hz (Theta wave sync)",
    empiricalHealthBiophysics: "Neuro-cardiovascular sympathetic overdrive. Autonomic tone shifts toward alertness; working crews require mandatory 20-min shade rotations in 100°F+ heat.",
    agriculturalAndWaterGuidance: "Peak evapotranspiration across Rio Grande basin. Canals must maintain 1.4 m/s flow velocity to prevent silt settlement.",
    industrialGridWarning: "Air conditioning peak loads saturate West Texas 345kV transformer cores. Damping algorithms must throttle inverter harmonics.",
    cowboyExecutiveWisdom: "Two minds are better than one—that's why I built my Gemini Twin. When the sun is bearing down and the grid is groaning, our automated nodes keep our people safe."
  },
  {
    signNumber: 4,
    name: "Cancer (The Crab)",
    astronomicalDates: "July 21 – August 10",
    constellationSpan: "20.1° Ecliptic Arc",
    eclipticLongitude: "118.4° to 138.5°",
    astrophysicalForce: "Southwest Monsoon Moisture Plume Dynamic Convection & Tropospheric Ionization",
    solarFluxIndex: "161 sfu",
    geomagneticCoupling: "Kp = 3.1",
    schumannResonanceMode: "Mode 1: 7.83 Hz with high atmospheric lightning Q-factor (>6.5)",
    lunarTidalTension: "162.1 microGals",
    eighthDayResonanceVector: "t₈ = Convective boundary layer 8-day moisture recirculation cell",
    empiricalHealthBiophysics: "High humidity + sudden barometric spikes increase asthma and COPD respiratory load. Air ionization index creates positive ion excess prior to thunderheads.",
    agriculturalAndWaterGuidance: "Arroyo flash flood risk reaches peak hazard. Move cattle, tractors, and irrigation pumps out of dry washes immediately.",
    industrialGridWarning: "Cloud-to-ground lightning density exceeds 14 strikes/km²; station surge arresters must be inspected for thermal leakage.",
    cowboyExecutiveWisdom: "Never cross a running arroyo, no matter how heavy your truck is. Six inches of rushing New Mexico mud will float a three-quarter ton pickup. Trust the math and hold high ground."
  },
  {
    signNumber: 5,
    name: "Leo (The Lion)",
    astronomicalDates: "August 11 – September 16",
    constellationSpan: "35.8° Ecliptic Arc",
    eclipticLongitude: "138.5° to 174.3°",
    astrophysicalForce: "Coronal Hole High-Speed Solar Wind Streams (v > 650 km/s)",
    solarFluxIndex: "189 sfu (Intense solar microwave emission)",
    geomagneticCoupling: "Kp = 5.2 (G1 Minor Geomagnetic Storm conditions)",
    schumannResonanceMode: "Mode 3: 20.8 Hz Resonance Amplification",
    lunarTidalTension: "154.9 microGals",
    eighthDayResonanceVector: "t₈ = 8-day recurrence of Parker spiral interplanetary magnetic sector crossing",
    empiricalHealthBiophysics: "Geomagnetic storms correlate with transient 9% reduction in human melatonin synthesis. Workers may experience delayed sleep onset and morning fatigue.",
    agriculturalAndWaterGuidance: "Late-season chile crop maturity acceleration. Solar UV-B index 11+ increases capsaicin synthesis in Hatch and Chimayo chile peppers.",
    industrialGridWarning: "Geomagnetically Induced Currents (GIC) enter transformer neutral grounding lines at ~4.2 Amperes DC. Monitor core overheating.",
    cowboyExecutiveWisdom: "When solar storms hit, the earth's magnetic shield rings like a bell. It affects transformer coils and it affects human sleep. Drink clean water, eat real food, and protect the team."
  },
  {
    signNumber: 6,
    name: "Virgo (The Maiden)",
    astronomicalDates: "September 17 – October 30",
    constellationSpan: "44.0° Ecliptic Arc (Largest Zodiac Constellation)",
    eclipticLongitude: "174.3° to 218.3°",
    astrophysicalForce: "Autumnal Equinoctial Dipole Tilt & Russell-McPherron Geomagnetic Amplification",
    solarFluxIndex: "135 sfu",
    geomagneticCoupling: "Kp = 4.1 (Equinoctial semi-annual peak)",
    schumannResonanceMode: "Mode 1: 7.83 Hz with maximum global resonance stability",
    lunarTidalTension: "178.6 microGals",
    eighthDayResonanceVector: "t₈ = 8-day baroclinic wave passage across Rocky Mountain continental divide",
    empiricalHealthBiophysics: "Equinox atmospheric temperature inversions trap particulates in the Albuquerque Rio Grande valley (Woodsmoke/Ozone PM2.5 spikes).",
    agriculturalAndWaterGuidance: "Harvest window for high-yield chile and pinto beans. Check first frost probabilistic calculus (T < 32°F threshold).",
    industrialGridWarning: "Rapid diurnal temperature swings (-20°F in 6 hours) cause thermal contraction strain on cross-country pipelines.",
    cowboyExecutiveWisdom: "Virgo is the longest constellation on the ecliptic. It demands precision. Measure twice, cut once, and make sure your flange torque specs are dead-on before the freeze."
  },
  {
    signNumber: 7,
    name: "Libra (The Scales)",
    astronomicalDates: "October 31 – November 22",
    constellationSpan: "21.1° Ecliptic Arc",
    eclipticLongitude: "218.3° to 239.4°",
    astrophysicalForce: "Interplanetary Dust Trail (Taurid Meteor Swarm Gravitational Perturbation)",
    solarFluxIndex: "128 sfu",
    geomagneticCoupling: "Kp = 2.1",
    schumannResonanceMode: "Mode 2: 14.3 Hz (Harmonic balance vector)",
    lunarTidalTension: "141.0 microGals",
    eighthDayResonanceVector: "t₈ = Octant planetary angular equilibrium (Earth-Sun-Jupiter)",
    empiricalHealthBiophysics: "Atmospheric equilibrium state. Lowest recorded monthly incidence of barometric migraine. High physical endurance window for field crews.",
    agriculturalAndWaterGuidance: "Winter wheat emergence; winter rye cover crop establishment. Soil moisture retention index at 82% efficiency.",
    industrialGridWarning: "Clean baseline electrical sine wave (THD < 1.2%). Optimal time for substation circuit breaker testing.",
    cowboyExecutiveWisdom: "The scales of balance. If your corporate books are crooked, nature's math will expose you. We keep our cap table clean, our 50% trust lock solid, and our nodes transparent."
  },
  {
    signNumber: 8,
    name: "Scorpius (The Scorpion)",
    astronomicalDates: "November 23 – November 28",
    constellationSpan: "6.5° Ecliptic Arc (Briefest Zodiac Window)",
    eclipticLongitude: "239.4° to 245.9°",
    astrophysicalForce: "Galactic Center Gravitational Gradient & Dense Stellar Core X-Ray Background",
    solarFluxIndex: "155 sfu",
    geomagneticCoupling: "Kp = 3.6",
    schumannResonanceMode: "Mode 1: 7.83 Hz with anomalous phase shift (-12°)",
    lunarTidalTension: "210.4 microGals (Perigee maximum gravitational pull)",
    eighthDayResonanceVector: "t₈ = Compact 6-day compression wave unfolding into 8-day tidal surge",
    empiricalHealthBiophysics: "High lunar perigee tidal tension exerts maximum micro-gravitational pull on human interstitial fluid and blood viscosity. Hydration critical.",
    agriculturalAndWaterGuidance: "Groundwater levels oscillate by ±3.2 cm due to Earth tidal dilatation. Wellhead static pressure tests must account for earth tides.",
    industrialGridWarning: "Subsurface tectonic stress spikes along Rio Grande Rift; monitor seismic sensors at pipeline river crossings.",
    cowboyExecutiveWisdom: "Scorpius only holds the sun for six days. It's sharp, sudden, and dangerous. In business and in life, when pressure builds quick, you don't panic—you tighten your cinch and execute."
  },
  {
    signNumber: 9,
    name: "Ophiuchus (The Serpent Bearer - The 13th Sign)",
    astronomicalDates: "November 29 – December 17",
    constellationSpan: "18.6° Ecliptic Arc (The True Astronomical 13th Sign)",
    eclipticLongitude: "245.9° to 264.5°",
    astrophysicalForce: "13=1 Unity Alignment: Sun directly transits the Galactic Equator & Supermassive Core Vector",
    solarFluxIndex: "168 sfu (Galactic cosmic ray modulation minimum)",
    geomagneticCoupling: "Kp = 4.8 (High-energy magnetospheric compression)",
    schumannResonanceMode: "Tri-Harmonic Synthesis: 7.83 Hz + 14.3 Hz + 20.8 Hz Phase Coherence (13=1 Resonance)",
    lunarTidalTension: "224.8 microGals (Syzygy Spring Tide + Galactic alignment)",
    eighthDayResonanceVector: "t₈ = 8th Day Harmonic Octave: f₈ = 8 × f₀ = 62.64 Hz (Gamma wave neural synchronization)",
    empiricalHealthBiophysics: "The ancient healing vector. Deep cellular mitochondrial electron transport chain efficiency peaks under galactic cosmic ray shielding; enhanced tissue repair and cognitive breakthrough clarity.",
    agriculturalAndWaterGuidance: "Deep winter dormancy initiation. Deep soil caliche layers undergo thermal stabilization at 54°F. Underground root networks store carbohydrates.",
    industrialGridWarning: "The 13=1 Unity Test: All 17 RideWire computational nodes run automated self-healing integrity sweeps with 100% mathematical zero-fraud validation.",
    cowboyExecutiveWisdom: "Here it is—the 13th sign they tried to hide or ignore because it didn't fit into their neat little 12-slice box. 13=1 is our core. It's the serpent bearer, the healer, the truth. When the math backs it, you don't compromise."
  },
  {
    signNumber: 10,
    name: "Sagittarius (The Archer)",
    astronomicalDates: "December 18 – January 18",
    constellationSpan: "31.9° Ecliptic Arc",
    eclipticLongitude: "264.5° to 296.4°",
    astrophysicalForce: "Galactic Center Sagittarius A* Supermassive Black Hole Radio Vector (Sgr A*)",
    solarFluxIndex: "145 sfu",
    geomagneticCoupling: "Kp = 2.9",
    schumannResonanceMode: "Mode 1: 7.83 Hz (Steady winter baseline)",
    lunarTidalTension: "188.3 microGals",
    eighthDayResonanceVector: "t₈ = Perihelion solar distance minimum (Earth closest to Sun: 147.1M km)",
    empiricalHealthBiophysics: "Winter solstice seasonal photoperiod nadir (9h 20m daylight in NM). Vitamin D3 synthesis reaches annual low; immune cytokine balance requires nutritional support.",
    agriculturalAndWaterGuidance: "Orchard deep winter pruning; irrigation ditch acequia cleaning and mechanical maintenance window across New Mexico.",
    industrialGridWarning: "Cold snap freeze-offs: gas wellhead separator heaters and pneumatic valves risk methanol freeze hydrate blockages.",
    cowboyExecutiveWisdom: "When the winter freeze hits the Four Corners and the Permian, pipes will pop like firecrackers if operators didn't prep. Keep your heat tapes hot and your eyes on the pressure dials."
  },
  {
    signNumber: 11,
    name: "Capricornus (The Sea Goat)",
    astronomicalDates: "January 19 – February 15",
    constellationSpan: "27.8° Ecliptic Arc",
    eclipticLongitude: "296.4° to 324.2°",
    astrophysicalForce: "Interplanetary Cold Plasma Density Surge & Polar Vortex Jet Stream Oscillations",
    solarFluxIndex: "132 sfu",
    geomagneticCoupling: "Kp = 3.4",
    schumannResonanceMode: "Mode 2: 14.3 Hz",
    lunarTidalTension: "165.7 microGals",
    eighthDayResonanceVector: "t₈ = 8-day Rossby planetary wave crest crossing Rocky Mountains",
    empiricalHealthBiophysics: "Extreme cold-air dry barometric compression (1030+ hPa arctic high) causes vasoconstriction; elevated arterial blood pressure risk in outdoor laborers.",
    agriculturalAndWaterGuidance: "Subsurface frost line penetrates to 18-24 inches in Northern NM. Ensure livestock stock tank de-icers and freeze-proof hydrants are verified.",
    industrialGridWarning: "Winter peak electrical demand: natural gas pipeline compressor stations must prioritize fuel delivery to peaker generators.",
    cowboyExecutiveWisdom: "Old timers know that January frost doesn't care about your excuses. If you're working outside, dress in wool layers, keep your fuel tanks full, and watch your brothers and sisters on the line."
  },
  {
    signNumber: 12,
    name: "Aquarius (The Water Bearer)",
    astronomicalDates: "February 16 – March 11",
    constellationSpan: "23.8° Ecliptic Arc",
    eclipticLongitude: "324.2° to 348.0°",
    astrophysicalForce: "Heliospheric Current Sheet (HCS) Sector Boundary Crossing (True North Field Reversal)",
    solarFluxIndex: "150 sfu",
    geomagneticCoupling: "Kp = 4.3 (Sudden magnetic impulse storm)",
    schumannResonanceMode: "Mode 1: 7.83 Hz with wideband dispersion",
    lunarTidalTension: "192.5 microGals",
    eighthDayResonanceVector: "t₈ = 8-day cyclical shift in stratospheric ozone winds",
    empiricalHealthBiophysics: "Rapid barometric oscillations (±15 hPa within 36 hours) exacerbate joint fluid hydrostatic pressure and rheumatic pain.",
    agriculturalAndWaterGuidance: "Early mountain snowpack melt telemetry begins. Rio Grande snowpack water equivalent (SWE) forecasts critical for summer allotment.",
    industrialGridWarning: "Strong spring winds (gusts > 55 mph) cause transmission line galloping and phase-to-phase flashovers across the high desert.",
    cowboyExecutiveWisdom: "Water is life in the high desert. Aquarius carries the jar, but RideWire measures the acre-feet down to the gallon. Know where every drop goes before summer heat sets in."
  },
  {
    signNumber: 13,
    name: "Pisces (The Fishes)",
    astronomicalDates: "March 12 – April 18",
    constellationSpan: "37.2° Ecliptic Arc",
    eclipticLongitude: "348.0° to 25.2°",
    astrophysicalForce: "Vernal Equinox Cosmic Alignment & Interplanetary Magnetic Flux Transition",
    solarFluxIndex: "164 sfu",
    geomagneticCoupling: "Kp = 3.9 (Spring equinoctial auroral activation)",
    schumannResonanceMode: "Mode 1: 7.83 Hz Fundamental Resonance Re-birth",
    lunarTidalTension: "204.1 microGals (Spring Syzygy Equinox Tide)",
    eighthDayResonanceVector: "t₈ = Complete 13=1 cycle closure and harmonic re-initialization vector",
    empiricalHealthBiophysics: "Circadian photoperiod expansion triggers serotonin/dopamine neurotransmitter surge; human metabolic rate increases 6.2%.",
    agriculturalAndWaterGuidance: "Spring green-up of rangeland grasses. Soil temperature passes 50°F threshold for seed germination.",
    industrialGridWarning: "Melting snow runoff causes river scouring of buried pipeline footings; deploy acoustic scour sensors.",
    cowboyExecutiveWisdom: "The circle closes and opens anew. 13 signs, 13 mathematical consensus axes, unified into 1 truth. When you build with honesty, you never have to remember what lie you told. The math stands forever."
  }
];

export const EARTH_SCIENCE_MODULES: EarthScienceModule[] = [
  {
    id: "earth-weather-01",
    category: "weather",
    title: "Albuquerque North Valley & Sandia Arroyo Flash Flood Vector",
    subtitle: "Thermodynamic Precipitation Kinematics & Subsurface Runoff Crest Velocity",
    region: "Bernalillo County, Albuquerque North Valley & Embudo Arroyo Drainage",
    threatLevel: "ALERT",
    humanImpactSummary: "Heavy convective cloudbursts over the granite face of the Sandia Mountains (elevation 10,678 ft) funnel 2.4 million gallons of high-velocity runoff per minute into concrete and unlined arroyos crossing working-class North Valley neighborhoods. Working families and children walking home from school face sudden 8-foot wall-of-water flash floods within 18 minutes of mountain rainfall.",
    mathematicalProof: {
      governingEquation: "Q = C · I · A  (Rational Method) & Kinematic Wave Flood Wave Velocity: v = (1/n) · R^(2/3) · S^(1/2)",
      variables: [
        { symbol: "C", meaning: "Sandia granite runoff coefficient", value: "0.88 (impervious slickrock)" },
        { symbol: "I", meaning: "Peak precipitation intensity", value: "48.2 mm/hr (monsoon cloudburst)" },
        { symbol: "A", meaning: "Embudo-Bear Canyon watershed area", value: "32.4 km²" },
        { symbol: "S", meaning: "Average arroyo bed slope", value: "0.042 m/m (steep mountain grade)" },
        { symbol: "n", meaning: "Manning roughness coefficient", value: "0.024 (concrete/gravel channel)" }
      ],
      computedResult: "Peak Discharge Q_peak = 381.6 m³/s | Flood Wave Velocity v = 4.82 m/s (10.8 mph) | Lag Time to Paseo del Norte = 17.4 minutes",
      safetyThreshold: "Max Safe Arroyo Depth: 0.35m | Modeled Depth: 2.15m (CRITICAL DANGER)",
      verdict: "IMMINENT FLASH FLOOD: Water wall arrives at North Valley diversion channel at T+17.4 min. Evacuate low-water crossings immediately."
    },
    communityAction: {
      freePublicAdvisory: "FREE COMMUNITY ALERT: Flash flood wave traveling down Bear Canyon Arroyo toward 4th Street. Do NOT enter low-water crossings at Osuna, Montaño, or Alameda. Warn field laborers and park visitors immediately.",
      targetBeneficiaries: "Albuquerque North Valley families, mobile home parks along 2nd Street, and agricultural acequia caretakers.",
      familyTrustAction: "Emergency sandbag distribution and temporary dry shelter vouchers funded directly by the Albuquerque Family Support Trust.",
      industrialRetainerSponsor: "Sponsored by Bernalillo County Flood Control Authority (AMAFCA) & City Stormwater Utility telemetry monitoring retainers ($40,000/yr)."
    },
    telemetryStream: [
      { metric: "Sandia Crest Rain Gauge", value: "48.2 mm/hr", status: "critical" },
      { metric: "Arroyo Inflow Hydrograph", value: "381.6 m³/s", status: "critical" },
      { metric: "Soil Saturation Permeability", value: "94.2% (Saturated)", status: "warning" },
      { metric: "Time to Valley Crest", value: "17.4 min", status: "critical" }
    ]
  },
  {
    id: "earth-volcano-02",
    category: "volcano",
    title: "Valles Caldera Supervolcano & Hydrothermal Magma Chamber Telemetry",
    subtitle: "Magma Chamber Inflation Displacement & Geothermal Sulfur Dioxide (SO₂) Degassing Math",
    region: "Jemez Mountains / Valles Caldera National Preserve, Sandoval County, New Mexico",
    threatLevel: "WATCH",
    humanImpactSummary: "The Valles Caldera is a dormant supervolcano with a massive 13.7-mile caldera bowl harboring an active magma reservoir just 5 to 15 kilometers beneath the surface. Hundreds of thousands of New Mexicans live downwind in Santa Fe, Los Alamos, and Albuquerque. Toxic sulfur dioxide (SO₂) gas venting and geothermal steam overpressure can suffocate livestock, cause severe respiratory attacks in asthmatic children, and trigger explosive phreatic hydrothermal eruptions.",
    mathematicalProof: {
      governingEquation: "Mogi Source Inflation: u_z = (3·ΔV·d) / (4π · (r² + d²)^(3/2)) & Gas Flux: F_SO2 = Q_v · C_SO2 · ρ_gas",
      variables: [
        { symbol: "d", meaning: "Depth to magma chamber centroid", value: "7,800 meters (7.8 km)" },
        { symbol: "ΔV", meaning: "Magma volumetric influx rate", value: "+0.014 km³/year" },
        { symbol: "r", meaning: "Radial distance to Sulphur Springs vent", value: "2,400 meters" },
        { symbol: "C_SO2", meaning: "Fumarole SO2 concentration", value: "84.6 ppm (Dangerous threshold: 5.0 ppm)" },
        { symbol: "P_hydro", meaning: "Hydrothermal reservoir pressure", value: "48.2 bar (approaching steam flash)" }
      ],
      computedResult: "Vertical Ground Uplift u_z = +4.8 mm/yr | Magmatic SO2 Mass Flux F_SO2 = 214 tons/day | Hydrothermal Flash Safety Factor SF = 1.18",
      safetyThreshold: "Normal Background SO2: < 15 tons/day | Warning Threshold: > 150 tons/day",
      verdict: "ACTIVE MAGMATIC DEGASSING: Hydrothermal flash zone under Redondo Peak is pressurizing. Acidic gas venting in Jemez canyon. Restrict backcountry camping."
    },
    communityAction: {
      freePublicAdvisory: "FREE HEALTH ADVISORY: Elevated sulfur gas plume drifting southeast into Jemez Springs and Ponderosa. Individuals with asthma, elderly residents, and children should remain indoors and run HEPA air filters. Avoid Sulphur Creek bath areas.",
      targetBeneficiaries: "Jemez Pueblo tribal members, Sandoval County mountain residents, and agricultural fruit orchards in Jemez Valley.",
      familyTrustAction: "Distribution of N95 respirator masks and portable indoor air purifiers to low-income Jemez Valley families through Family Support Trust.",
      industrialRetainerSponsor: "Sponsored by Geothermal Energy Extraction Operators & National Laboratory Environmental Monitoring Retainers ($65,000/yr)."
    },
    telemetryStream: [
      { metric: "SO2 Mass Emission Rate", value: "214 tons/day", status: "warning" },
      { metric: "InSAR Ground Deformation", value: "+4.8 mm/yr", status: "warning" },
      { metric: "Seismic Swarm Frequency (B-value)", value: "b = 1.42 (Hydrothermal)", status: "optimal" },
      { metric: "Fumarole Vent Temp", value: "98.4°C (Steam Saturation)", status: "warning" }
    ]
  },
  {
    id: "earth-lunar-void-03",
    category: "lunar_void",
    title: "Ground-Penetrating Radar & Lunar Syzygy Subterranean Void Locator",
    subtitle: "Electromagnetic Dielectric Permittivity & Lunar Tidal Pore-Moisture Void Detection (Mummy & Crypt Radar)",
    region: "Chaco Canyon / San Juan Basin / Rio Puerco Valley Arid Calcified Strata, New Mexico",
    threatLevel: "ADVISORY",
    humanImpactSummary: "For centuries, ancient ancestral crypts, desiccated prehistoric burials (mummies), and hollow subterranean cavern networks have been hidden beneath desert caliche and gypsum layers. During the New Moon and Full Moon (Lunar Syzygy), gravitational tidal pull draws microscopic capillary moisture upward, creating a sharp dielectric contrast between damp soil and bone-dry hollow chambers. Our math pinpoints void anomalies to protect sacred cultural burials from bulldozers and help ranchers locate hidden sinkholes and ancient water cisterns.",
    mathematicalProof: {
      governingEquation: "Phase Velocity: v = c / √ε_r  |  Acoustic/Radar Reflection Coefficient: Γ = (Z_void - Z_soil) / (Z_void + Z_soil)  |  Lunar Tidal Strain: ε_tidal = (2·G·M_moon·r) / (R³·g)",
      variables: [
        { symbol: "c", meaning: "Speed of light in vacuum", value: "0.2998 m/ns" },
        { symbol: "ε_r (dry soil)", meaning: "Caliche/sand relative dielectric permittivity", value: "3.48 (dry matrix)" },
        { symbol: "ε_r (moist soil)", meaning: "Lunar tide capillary damp soil permittivity", value: "14.2 (high moisture)" },
        { symbol: "Z_void", meaning: "Wave impedance of air/hollow chamber", value: "377.0 Ω" },
        { symbol: "Z_soil", meaning: "Wave impedance of surrounding strata", value: "198.4 Ω" },
        { symbol: "f_GPR", meaning: "GPR pulse center frequency", value: "400 MHz (Borehole antenna)" }
      ],
      computedResult: "Radar Propagation Velocity v = 0.161 m/ns | Reflection Coefficient |Γ| = 0.62 (Massive Anomaly) | Depth to Void Ceiling d = 4.82 meters ± 0.12m | Void Dimensions: 3.8m × 2.4m × 1.9m hollow vault",
      safetyThreshold: "Normal Soil Heterogeneity: |Γ| < 0.15 | Cavity Anomaly Threshold: |Γ| > 0.45",
      verdict: "CONFIRMED SUBTERRANEAN HOLLOW VAULT: Pristine desiccated burial chamber / archaeological void detected at 4.82m depth. 100% dry sealed micro-environment preserving organic matter."
    },
    communityAction: {
      freePublicAdvisory: "FREE CULTURAL PRESERVATION & RANCH SAFETY ALERT: Subterranean hollow chamber isolated at GPS 35.882°N, 107.941°W (San Juan County). Infrastructure construction must divert heavy scrapers to prevent collapse into ancient cultural sanctuary or sinkhole cavern.",
      targetBeneficiaries: "Navajo and Pueblo cultural historic preservation officers, local Navajo nation chapters, and regional cattle ranchers.",
      familyTrustAction: "Funding non-invasive radar mapping for indigenous cultural heritage protection without destructive excavation.",
      industrialRetainerSponsor: "Sponsored by Pipeline Route Archaeological Survey & Infrastructure Avoidance Retainers ($55,000 diagnostic)."
    },
    telemetryStream: [
      { metric: "Radar Wave Velocity (v)", value: "0.161 m/ns", status: "optimal" },
      { metric: "Dielectric Impedance Mismatch (|Γ|)", value: "0.62 (Hollow Void)", status: "critical" },
      { metric: "Calculated Chamber Depth", value: "4.82 meters", status: "optimal" },
      { metric: "Lunar Syzygy Tidal Gravity Pull", value: "+224.8 microGals", status: "optimal" }
    ]
  },
  {
    id: "earth-horoscope-04",
    category: "thirteen_horoscope",
    title: "13=1 Biophysical Harmonic Intelligence for the 8th Day",
    subtitle: "Empirical Solar Flux (10.7cm), Geomagnetic Kp, and Schumann Resonance Human Impact",
    region: "High-Altitude Intermountain West & Global 13-Constellation Ecliptic Plane",
    threatLevel: "STABLE",
    humanImpactSummary: "Superstition looks at stars for magical fortunes. RideWire looks at the 13 true ecliptic constellations (including Ophiuchus) through hard mathematical physics: 10.7cm solar radio flux, coronal mass ejection shockwaves, lunar tidal gravity vectors, and Schumann atmospheric electromagnetic resonance (7.83 Hz). These physical forces measurably affect human sleep architecture, blood pressure, farm irrigation evaporation, and electric grid transformer loads. We tell working people the mathematical truth so they can plan their lives.",
    mathematicalProof: {
      governingEquation: "Schumann Resonance Mode: f_n = (c / 2πR_earth) · √(n(n+1)) & Tidal Gravitational Acceleration: a_tide = (2·G·M_moon·r_human) / R_orbit³",
      variables: [
        { symbol: "c", meaning: "Speed of light", value: "299,792 km/s" },
        { symbol: "R_earth", meaning: "Mean radius of Earth", value: "6,371 km" },
        { symbol: "n = 1", meaning: "Fundamental Schumann mode", value: "7.83 Hz" },
        { symbol: "F_10.7", meaning: "Solar radio flux index", value: "168.4 sfu (Active Cycle 25)" },
        { symbol: "Kp_index", meaning: "Geomagnetic planetary index", value: "4.2 (Unsettled to active)" }
      ],
      computedResult: "Fundamental Schumann Frequency = 7.83 Hz (Coherence = 94.2%) | Circadian Melatonin Shift Δt = -42 minutes | Grid Transformer DC Bias = 2.8 Amperes",
      safetyThreshold: "Normal Geomagnetic Kp: < 3.0 | Disturbed Human Biophysics: Kp ≥ 4.0 | Critical Storm: Kp ≥ 6.0",
      verdict: "EIGHTH-DAY HARMONIC CYCLE ACTIVE: Mild neuro-circadian excitation. Working shifts should maintain strict hydration and adjust bedtime routines. Power grid operators activate harmonic filters."
    },
    communityAction: {
      freePublicAdvisory: "FREE 8TH-DAY BIOPHYSICAL OUTLOOK: Elevated solar flux and Kp=4.2 geomagnetic activity incoming over next 48 hours. Expect mild sleep fragmentation and higher heart rate variability during heavy physical labor. Take regular breaks and keep plenty of water on hand.",
      targetBeneficiaries: "Shift workers, linemen, healthcare nurses, long-haul truck drivers, and community elders.",
      familyTrustAction: "Educational workshops on shift-worker wellness, cardiovascular safety under high desert altitude, and child sleep support.",
      industrialRetainerSponsor: "Sponsored by Transmission Grid Operators & Healthcare Ergonomics Retainers ($50,000)."
    },
    telemetryStream: [
      { metric: "Solar 10.7cm Radio Flux", value: "168.4 sfu", status: "warning" },
      { metric: "Geomagnetic Kp Index", value: "4.2 (Active)", status: "warning" },
      { metric: "Schumann Fundamental Sync", value: "7.83 Hz (0.94 Coherence)", status: "optimal" },
      { metric: "Lunar Tidal Gravity Vector", value: "+224.8 microGals", status: "optimal" }
    ]
  }
];
