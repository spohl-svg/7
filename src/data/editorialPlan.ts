export interface SevenDayEditorialPlan {
  dayNumber: number;
  dayName: string;
  cycleColor: string;
  hexCode: string;
  breakingEvent: string;
  location: string;
  thirteenLogicAngle: string;
  ridewireSolution: string;
  targetAudience: string;
  primaryDecisionMaker: string;
  distributionChannel: string;
  estimatedRetainerValue: string;
  rwJitCode: string;
  shockAndAweHeadline: string;
}

export interface TargetAudienceProfile {
  id: string;
  title: string;
  category: string;
  decisionMakers: string[];
  acutePainPoint: string;
  how13LogicSolvesIt: string;
  distributionChannels: {
    primary: string;
    secondary: string;
    directDispatch: string;
  };
  retentionPricing: string;
  conversionStrategy: string;
}

export const SEVEN_DAY_EDITORIAL_CALENDAR: SevenDayEditorialPlan[] = [
  {
    dayNumber: 1,
    dayName: "Day 1 (Monday)",
    cycleColor: "Terracotta / Copper (#C2593F)",
    hexCode: "#C2593F",
    breakingEvent: "Delaware Basin Transmission Trunk Line 4B Flange Weld Shear (168.4 MPa overpressure spike)",
    location: "Eddy County, NM / Loving County, TX (Permian Basin)",
    thirteenLogicAngle: "Traditional SCADA monitors average line volume but fails to detect cyclic micro-harmonic cavitation. The 13=1 consensus core reduces 14,000 live sensor streams to isolate a 110 Hz acoustic shear wave traveling through junction flange bolts before physical rupture.",
    ridewireSolution: "Automated DevilsQC verification in 1.34 hrs; deployment of RW-JIT-PERM-4B emergency depressurization sequence and localized acoustic clamp isolation, preventing a $42M environmental blow-out and federal PHMSA shut-in.",
    targetAudience: "Midstream Pipeline Operators & Energy Infrastructure Asset Managers",
    primaryDecisionMaker: "VP of Pipeline Operations & Chief Risk Officer",
    distributionChannel: "Direct RW-JIT SMS to Field Foremen + Targeted LinkedIn InMail to Midstream VPs + Oil & Gas Journal Intelligence Wire",
    estimatedRetainerValue: "$35,000 - $75,000",
    rwJitCode: "RW-JIT-PERM-4B",
    shockAndAweHeadline: "CRITICAL 168.4 MPa FLANGE SHEAR ISOLATED ON DELAWARE BASIN TRUNK 4B BEFORE $42M BLOWOUT"
  },
  {
    dayNumber: 2,
    dayName: "Day 2 (Tuesday)",
    cycleColor: "Terracotta / Copper (#B87333)",
    hexCode: "#B87333",
    breakingEvent: "Permian Saltwater Disposal (SWD) Injection Well Seismicity Swarm & Annular Cement Degradation",
    location: "Lea County, NM / Reeves County, TX",
    thirteenLogicAngle: "Disposal backpressure waves correlate with non-random Bible Code cycle harmonics and ancient megalithic acoustic fault benchmarks. RideWire maps underground pressure wavefronts exceeding 220 bar, proving injection pulse synchronization is fracturing caprock.",
    ridewireSolution: "Dynamic injection rate balancing algorithm executed by Node 4 (SubsurfaceTelemetry). Eliminates induced micro-quakes while keeping 180,000 barrels/day flowing safely under state EMNRD compliance limits.",
    targetAudience: "Commercial Water Midstream Networks & State Environmental Compliance Regulators",
    primaryDecisionMaker: "Chief Petroleum Engineer & OCD Environmental Compliance Director",
    distributionChannel: "Hart Energy Midstream Dispatch + Direct Executive Dossier to EMNRD Santa Fe Bureau + Society of Petroleum Engineers (SPE) Channels",
    estimatedRetainerValue: "$40,000 - $85,000",
    rwJitCode: "RW-JIT-SWD-919",
    shockAndAweHeadline: "UNREGULATED INJECTION PULSE THREATENS 180K BBL/DAY DISPOSAL PERMITS: RIDEWIRE 13=1 ALGORITHM BALANCES WELLHEADS IN 78 MINUTES"
  },
  {
    dayNumber: 3,
    dayName: "Day 3 (Wednesday)",
    cycleColor: "Slate Turquoise / Deep Slate (#366470)",
    hexCode: "#366470",
    breakingEvent: "Middle Rio Grande Aquifer Choke-Point Drawdown & Deep-Well Impeller Cavitation Shock",
    location: "Albuquerque North Valley, Sandoval & Bernalillo Counties, NM",
    thirteenLogicAngle: "Aquifer compaction follows hydraulic resonance mathematics governed by ancient hydrological vectors. Negative 4.2 bar vacuum at 800-foot wellheads is destroying high-performance municipal impellers in under 90 days due to supersonic micro-bubble collapse.",
    ridewireSolution: "Node 14 (MunicipalAquifer) acoustic resonance telemetry recalibrates variable frequency pump drives to neutralize the 78 Hz cavitation frequency, saving $1.2M in destroyed impellers while preserving water delivery to local communities.",
    targetAudience: "Municipal Water Utility Authorities & Regional Irrigation Conservation Districts",
    primaryDecisionMaker: "Executive Director of Water Operations & Plant Reliability Lead",
    distributionChannel: "American Water Works Association (AWWA) Bulletin + Bernalillo County Commission Direct Docket + Local Albuquerque Business First Executive Desk",
    estimatedRetainerValue: "$45,000 - $60,000",
    rwJitCode: "RW-JIT-AQUIFER-505",
    shockAndAweHeadline: "ALBUQUERQUE DEEP-WELL IMPELLERS DESTROYED BY -4.2 BAR CAVITATION: RIDEWIRE JIT BALANCING RESTORES NORTH VALLEY WELLS"
  },
  {
    dayNumber: 4,
    dayName: "Day 4 (Thursday)",
    cycleColor: "Sandstone / Warm Gold (#DAA520)",
    hexCode: "#DAA520",
    breakingEvent: "ERCOT West Texas 345kV Autotransformer Sub-Synchronous Resonance (18.2 Hz Core Saturation)",
    location: "Odessa-Midland Transmission Loop, West Texas",
    thirteenLogicAngle: "Unbuffered wind farm inverters interacting with gas peaker cycling generate an 18.2 Hz sub-harmonic wave invisible to 60 Hz digital fault recorders. Transformer core temperatures spike to 138°C, threatening a 3-year supply chain blackout nightmare.",
    ridewireSolution: "Node 7 (CostShield) and Node 15 (GridTelemetry) compute localized active inverter damping coefficients, neutralizing the 18.2 Hz resonant wave within 55 minutes without requiring line disconnect.",
    targetAudience: "Regional Transmission Organizations (RTOs), Power Cooperatives, & Industrial Grid Off-Takers",
    primaryDecisionMaker: "VP of Grid Reliability & Substation Engineering Operations Manager",
    distributionChannel: "Utility Dive Power Wire + ERCOT Market Notice System + Direct High-Priority Courier to Transmission Control Centers",
    estimatedRetainerValue: "$50,000 - $100,000",
    rwJitCode: "RW-JIT-GRID-771",
    shockAndAweHeadline: "345kV TRANSFORMER CORE AT 138°C UNDER 18.2 Hz RESONANCE: RIDEWIRE DAMPING ENGINE STABILIZES WEST TEXAS LOOP TODAY"
  },
  {
    dayNumber: 5,
    dayName: "Day 5 (Friday)",
    cycleColor: "Terracotta / Copper (#C2593F)",
    hexCode: "#C2593F",
    breakingEvent: "San Juan Basin Legacy Gas Well Casing Integrity Loss & Methane Annular Migration",
    location: "San Juan & Rio Arriba Counties, Northwestern New Mexico",
    thirteenLogicAngle: "Subterranean acoustic telemetry reduced through 13 consensus axes isolates gas bubbling through micro-fissures in 40-year-old annular cement sheaths, distinguishing genuine casing leaks from superficial surface soil moisture readings.",
    ridewireSolution: "DevilsQC-certified zero-fraud diagnostic mapping pinpointing the exact leak depth (2,430 ft) for precision squeeze cementing, avoiding a $350,000 full well plug-and-abandon and shielding operators from EPA Super-Emitter fines.",
    targetAudience: "Upstream Natural Gas Producers & State Mineral Regulators",
    primaryDecisionMaker: "VP of Asset Management & Regulatory Affairs Director",
    distributionChannel: "Oil & Gas Investor Magazine + New Mexico Oil & Gas Association (NMOGA) Dispatch + Direct Wire to Operations Desks",
    estimatedRetainerValue: "$30,000 - $65,000",
    rwJitCode: "RW-JIT-CHAC-882",
    shockAndAweHeadline: "$4.8M EPA EMISSION PENALTIES SHIELDED: RIDEWIRE PINPOINTS ANNULAR CASING FISSURE AT 2,430 FT FOR FRACTION OF PLUG COST"
  },
  {
    dayNumber: 6,
    dayName: "Day 6 (Saturday)",
    cycleColor: "Desert Sage / Slate (#8A9A86)",
    hexCode: "#8A9A86",
    breakingEvent: "Southwest Critical Railway Track Harmonic Buckling & Thermal Rail Expansion Under Desert Sun",
    location: "BNSF Southern Transcon Corridor / Belen to Gallup, NM",
    thirteenLogicAngle: "Continuous welded rail (CWR) experiences non-random stress cycles driven by intense diurnal desert temperature swings (50°F to 110°F). Telemetry nodes measure longitudinal acoustic strain waves that precede catastrophic rail warp (sun kinks).",
    ridewireSolution: "Autonomous Node 9 (JITDispatch) predicts exact milepost track buckling points 18 hours in advance, giving track maintenance gangs precision stress-neutralization cut-points before high-speed freight derailment occurs.",
    targetAudience: "Class I Railroad Chief Engineers & Federal Railroad Administration (FRA) Inspectors",
    primaryDecisionMaker: "VP of Engineering & Track Maintenance Superintendent",
    distributionChannel: "Railway Age Industrial Wire + Direct Rail Operations Center Dispatch + State Transportation Board Executive Portal",
    estimatedRetainerValue: "$40,000 - $80,000",
    rwJitCode: "RW-JIT-RAIL-319",
    shockAndAweHeadline: "SUN KINK DERAILMENT PREVENTED ON BNSF TRANSCON: RIDEWIRE 13=1 STRAIN HARMONICS ISOLATE MILEPOST 892 RAIL WARP"
  },
  {
    dayNumber: 7,
    dayName: "Day 7 (Sunday)",
    cycleColor: "Desert Sage / Slate (#708090)",
    hexCode: "#708090",
    breakingEvent: "Autonomous 17-Node Matrix Self-Healing Sweep & Albuquerque Family Support Trust Capital Allocation",
    location: "Albuquerque Executive HQ / North Valley, NM",
    thirteenLogicAngle: "The 13=1 consensus core runs weekly self-healing validation audits across all 17 computational nodes. 100% rule validation certifies that all investigative revenue generated across the week clears zero-fraud compliance with exactly 50% routed to community trust allocation.",
    ridewireSolution: "DevilsQC automated sweep verifies sub-1.8hr decision compression velocity and zero AI hallucination. Automatically clears weekly EFT/ACH retainers, allocating $60k+ directly to the Albuquerque Family Support Trust and employee 401(k) pools.",
    targetAudience: "CDFI Institutional Lenders (WESST, DreamSpring), Family Trust Beneficiaries, & Equity Shareholders",
    primaryDecisionMaker: "CDFI Chief Credit Officer & Community Trust Trustee",
    distributionChannel: "CDFI Quarterly Compliance Wire + Albuquerque Business Journal Spotlight + RideWire Master Catalog Syndication",
    estimatedRetainerValue: "$50,000 - $150,000 (CDFI Facility)",
    rwJitCode: "RW-JIT-TRUST-100",
    shockAndAweHeadline: "PROVING THE TECH & FILLING THE BANK: 17-NODE MATRIX CLEARS 100% RULE VALIDATION, LOCKING 50% PROFIT TO ALBUQUERQUE FAMILIES"
  }
];

export const THREE_DISTINCT_TARGET_AUDIENCES: TargetAudienceProfile[] = [
  {
    id: "audience-midstream",
    title: "Permian Basin & Midstream Infrastructure Operators",
    category: "High-Pressure Oil, Gas & Hazardous Liquid Pipelines",
    decisionMakers: [
      "VP of Pipeline Operations & Midstream Integrity",
      "Chief Risk Officer & Safety Superintendent",
      "Field Maintenance & Pipeline Foremen (Ground Truth Execution)"
    ],
    acutePainPoint: "Catastrophic pipeline rupture, flange shear, and hydraulic cavitation under surge pressure. Single incident downtime exceeds $85k/hr; PHMSA fines surpass $2.5M; environmental cleanup can exceed $40M.",
    how13LogicSolvesIt: "RideWire's 13=1 Mathematical Consensus Core reduces chaotic multi-sensor vibration and hydraulic pressure noise into a single ground-truth stress vector. Node 3 and Node 6 detect micro-fracture shear waves 72 hours before traditional SCADA alarms, outputting verified RW-JIT emergency depressurization codes to isolate line pressure below the 152.0 MPa safety threshold.",
    distributionChannels: {
      primary: "Industry Specialized Intelligence Wire: Hart Energy Midstream, Pipeline & Gas Journal, and Oil & Gas Investor daily briefings.",
      secondary: "Targeted Executive Direct InMail & Operator Briefings: Personalized executive dispatches sent directly to VP Operations desks in Midland, Houston, and Lea County.",
      directDispatch: "Real-time RW-JIT SMS Packets: Instant encrypted SMS dispatches delivered directly to on-call field foremen with step-by-step valve isolation parameters."
    },
    retentionPricing: "$25,000 to $75,000 per immediate diagnostic retainer; $15,000/month recurring telemetry monitoring.",
    conversionStrategy: "Send the 'Shock and Awe' live telemetry dossier showing their exact junction operating at 168.4 MPa. Present an immediate pre-drafted JIT Retainer: sign and wire today, and our algorithms isolate the fault before catastrophic rupture."
  },
  {
    id: "audience-municipal",
    title: "Municipal Water Utility Authorities & Environmental Districts",
    category: "Public Hydrological Infrastructure & Aquifer Management",
    decisionMakers: [
      "Executive Director of Water Utility Authorities (e.g. ABCWUA)",
      "Chief Hydrologist & Deep-Well Plant Reliability Engineer",
      "Regional Irrigation Conservancy Board Members (e.g. MRGCD)"
    ],
    acutePainPoint: "Subterranean aquifer subsidence and -4.2 bar vacuum drawdown causing severe acoustic cavitation that shreds $180k deep-well pump impellers every 90 days, threatening sudden municipal water supply outages during peak heatwaves.",
    how13LogicSolvesIt: "Node 4 (SubsurfaceTelemetry) correlates real-time wellhead telemetry with the 110 ancient alignment hydrological resonance model. By calculating exact non-random pressure distribution cycles, RideWire's 13=1 engine determines dynamic pump throttling coefficients that eliminate acoustic cavitation without dropping water delivery quotas.",
    distributionChannels: {
      primary: "Public Sector & Utility Bulletins: American Water Works Association (AWWA), WaterWorld Magazine, and Municipal Infrastructure Intelligence.",
      secondary: "County Commission & State Agency Dockets: Direct regulatory submissions to New Mexico Office of the State Engineer (OSE) and Bernalillo County Water Boards.",
      directDispatch: "Automated SCADA Controller Integration: Algorithmic setpoint recommendations sent directly to water plant supervisory consoles."
    },
    retentionPricing: "$30,000 to $60,000 annual municipal diagnostic retainer; emergency cavitation mitigation retainers at $45,000.",
    conversionStrategy: "Show empirical evidence of impeller erosion before the municipal board: 'Your pump in Sector 3 is operating in destructive cavitation right now. For $45k, we stop the damage today, saving $1.2M in replacements.'"
  },
  {
    id: "audience-powergrid",
    title: "Regional Electric Grid Reliability Operators & Power Co-ops",
    category: "High-Voltage Transmission & Substation Interconnects",
    decisionMakers: [
      "VP of Power Delivery & Grid Reliability Operations",
      "Substation Operations Chief & Protection Engineer",
      "Regional Transmission Organization (RTO) Operations Desk (ERCOT / SPP / CAISO)"
    ],
    acutePainPoint: "Sub-synchronous resonance (18.2 Hz) caused by renewable wind and solar inverter coupling with gas peakers, driving 345kV transformer core temperatures past 138°C and risking catastrophic burnout with 36-to-48-month replacement lead times.",
    how13LogicSolvesIt: "Node 15 (GridTelemetry) and Node 7 (CostShield) compute sub-harmonic fast Fourier transforms on live line telemetry, identifying low-frequency intermodulation waves invisible to 60 Hz relays. DevilsQC calculates active inverter damping parameters that neutralize the resonant wave in under 1.8 hours.",
    distributionChannels: {
      primary: "Grid Reliability & Energy Portals: Utility Dive, IEEE Power & Energy Magazine, and North American Electric Reliability Corporation (NERC) alerts.",
      secondary: "Direct Operations Room Telecon: Emergency commercial intelligence packet delivered directly to transmission dispatch desks.",
      directDispatch: "Encrypted API Setpoint Push: Real-time damping ratios fed into substation supervisory automated controls."
    },
    retentionPricing: "$50,000 to $100,000 emergency grid stabilization retainer; $20,000/month continuous harmonic shield.",
    conversionStrategy: "Deliver immediate thermal proof: 'Your 345kV autotransformer is at 138°C due to 18.2 Hz resonance. Execute this $50,000 retainer, and our algorithms damp the wave in under an hour, protecting a $4M transformer you cannot replace for 3 years.'"
  }
];
