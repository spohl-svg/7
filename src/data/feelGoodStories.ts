export interface FeelGoodStory {
  id: string;
  badge: string;
  title: string;
  subtitle: string;
  heroEntity: string;
  leadPerson: string;
  location: string;
  category: 'pipeline' | 'water' | 'grid' | 'community';
  safetyScore: string; // e.g. "100% Zero-Incident"
  telemetryProof: {
    keyMetric: string;
    achievedValue: string;
    standardIndustryBenchmark: string;
    verifiedBy: string;
  };
  humanTriumphStory: string;
  theRightWayDifference: string;
  commercialValueCreated: {
    insuranceSavings: string;
    assetLifeExtended: string;
    annualVerificationRetainer: string;
  };
  publicPressReleaseHeadline: string;
  syndicationQuote: string;
  goldSealCertifiedDate: string;
}

export const FEEL_GOOD_STORIES: FeelGoodStory[] = [
  {
    id: "hero-pipeline-01",
    badge: "13=1 GOLD STANDARD • CRITICAL INFRASTRUCTURE",
    title: "The Zero-Leak Line: How Lea County Midstream's Welders Caught the Micro-Crack Before the Pressure Surge",
    subtitle: "Proactive Flange Re-Torquing and Acoustic Damping Preserves 14 Lives and Shields the Pecos River Basin",
    heroEntity: "Lea County Midstream Operations LLC",
    leadPerson: "Mateo Ortiz (Lead Master Welder) & Sarah Begay (Safety Superintendent)",
    location: "Lea County, New Mexico (Permian Basin Corridor)",
    category: "pipeline",
    safetyScore: "100% Zero-Defect (3,400 Days Rupture-Free)",
    telemetryProof: {
      keyMetric: "Harmonic Flange Vibration",
      achievedValue: "0.02 mm/s (98% below safety limit)",
      standardIndustryBenchmark: "1.20 mm/s (industry threshold)",
      verifiedBy: "RideWire Node 6 (DevilsQC Automated Verification)"
    },
    humanTriumphStory: "When midstream line pressure began rising under surging production, foreman Mateo Ortiz didn't wait for a high-level corporate audit. Trusting RideWire's 13=1 acoustic telemetry, his crew isolated a 432 Hz sub-harmonic micro-vibration on Flange Junction 14-B at 02:40 AM in freezing desert wind. They executed precision pre-stress re-torquing before a single drop leaked. Mateo's entire 14-man shift walked home safe to their families the next morning.",
    theRightWayDifference: "Instead of cutting corners or delaying maintenance to beat quarterly quotas, this team puts human life and Southwest land first. They prove that energy infrastructure can be run with honor, zero emissions, and absolute mechanical precision.",
    commercialValueCreated: {
      insuranceSavings: "$240,000 Annual Underwriter Premium Discount",
      assetLifeExtended: "+18 Years Projected Trunk Line Longevity",
      annualVerificationRetainer: "$65,000/year Continuous 13=1 Gold Standard Monitoring"
    },
    publicPressReleaseHeadline: "HOW MATEO ORTIZ AND LEA COUNTY MIDSTREAM BUILT AMERICA'S SAFEST HIGH-PRESSURE PIPELINE JUNCTION",
    syndicationQuote: "We don't cut corners on our watch. Every bolt we tighten is protecting the young hands working beside us and the water our kids drink in the valley.",
    goldSealCertifiedDate: "2026-09-28"
  },
  {
    id: "hero-water-02",
    badge: "13=1 GOLD STANDARD • HYDROLOGICAL STEWARDSHIP",
    title: "The Night-Shift Water Miracle: North Valley Acequia Stewards Save 4.2 Million Gallons for Downstream Orchards",
    subtitle: "Ancient Puebloan Wisdom Meets RideWire Capillary Telemetry to Beat 100°F Drought Conditions",
    heroEntity: "Middle Rio Grande Acequia Madre Association",
    leadPerson: "Elena Lucero-Chavez (Mayordoma) & Roberto Vigil (Third-Generation Farmer)",
    location: "North Valley, Albuquerque & Corrales, New Mexico",
    category: "water",
    safetyScore: "Zero Waste Water Allocation • 100% Crop Survival",
    telemetryProof: {
      keyMetric: "Canal Evapotranspiration Loss",
      achievedValue: "Reduced by 42.4%",
      standardIndustryBenchmark: "Typical Daytime Canal Loss: ~50%",
      verifiedBy: "RideWire Node 14 (MunicipalAquifer Hydrological Core)"
    },
    humanTriumphStory: "Facing a brutal July heatwave with 102°F afternoon temperatures, Mayordoma Elena Lucero-Chavez synchronized 64 family farms to execute nocturnal flood irrigation based on RideWire's soil moisture tension calculus. By opening the headgates exclusively between 23:00 and 04:30 when ambient vapor deficit was lowest, the community preserved 4,200,000 gallons of Rio Grande water while securing a record organic green chile and heirloom apple harvest.",
    theRightWayDifference: "They didn't sell their water rights to corporate developers or let the fields go fallow. They used math and centuries-old community solidarity to ensure every grandmother's garden and young grower's acre received life-giving water.",
    commercialValueCreated: {
      insuranceSavings: "$120,000 Drought Risk Shield Credit",
      assetLifeExtended: "Preserved 300-year-old unlined acequia earthen bank stability",
      annualVerificationRetainer: "$45,000 County Agricultural Grant Sponsoring"
    },
    publicPressReleaseHeadline: "THE ACEQUIA MOTHER: HOW ALBUQUERQUE'S NORTH VALLEY BEAT THE DROUGHT WITH ANCIENT CANALS AND 13=1 TELEMETRY",
    syndicationQuote: "La acequia es vida. Water isn't a commodity to trade on a stock ticker; it belongs to our grandchildren. When you respect the earth and calculate with honesty, the desert blossoms.",
    goldSealCertifiedDate: "2026-09-29"
  },
  {
    id: "hero-grid-03",
    badge: "13=1 GOLD STANDARD • POWER GRID RELIABILITY",
    title: "The Dust Storm Linemen: Rural Co-Op Crew Replaces 345kV Bushings in 65 MPH Winds to Protect Hospital Oxygen",
    subtitle: "Preventing Sub-Synchronous Inverter Resonance from Blacking Out Cibola Regional Medical Center",
    heroEntity: "Continental Divide Electric Cooperative",
    leadPerson: "Jack Tenorio (Chief Lineman) & Amanda Yazzie (Substation Electrical Engineer)",
    location: "Grants & Gallup Corridor, McKinley & Cibola Counties, NM",
    category: "grid",
    safetyScore: "99.999% Regional Grid Uptime (Zero Hospital Blinks)",
    telemetryProof: {
      keyMetric: "Substation Harmonic Distortion (THD)",
      achievedValue: "0.8% Total Harmonic Distortion",
      standardIndustryBenchmark: "IEEE 519 Standard Limit: 5.0%",
      verifiedBy: "RideWire Node 15 (GridTelemetry High-Speed Relay)"
    },
    humanTriumphStory: "When extreme spring desert winds whipped 65 mph gusts across the Continental Divide, solar inverter oscillation threatened to blow the main 345kV autotransformer at Grants Substation. Amanda Yazzie detected the 18.2 Hz resonant signature on RideWire's monitor. Lineman Jack Tenorio and his bucket-truck crew strapped into their harnesses in blinding dust and replaced the failing phase-C surge arrester in 48 minutes flat. Cibola Regional Medical Center's intensive care ward never lost a watt of power.",
    theRightWayDifference: "These men and women didn't wait in the truck for the wind to die down while patients sat in the dark. They stepped into the storm with professional pride and saved their community.",
    commercialValueCreated: {
      insuranceSavings: "$310,000 Catastrophic Supply Chain Replacement Avoidance",
      assetLifeExtended: "+25 Years Transformer Core Operating Life",
      annualVerificationRetainer: "$55,000/year Rural Cooperative Reliability Shield"
    },
    publicPressReleaseHeadline: "THE LINEMEN WHO KEPT THE OXYGEN FLOWING: NEW MEXICO'S RURAL CO-OP PROVES WHAT HEROES LOOK LIKE",
    syndicationQuote: "When the wind howls and the wires start singing that high-pitch scream, you don't back down. You look at your brother in the bucket and you get the job done right.",
    goldSealCertifiedDate: "2026-09-27"
  },
  {
    id: "hero-community-04",
    badge: "13=1 GOLD STANDARD • MUNICIPAL INTEGRITY",
    title: "The Impeller Guardian: How One Municipal Water Engineer Stopped Cavitation and Froze Rates on 120,000 Families",
    subtitle: "Eliminating Supersonic Cavitation Shock on 800-Foot Deep Wells Without Passing Costs to Working Parents",
    heroEntity: "Albuquerque Regional Water Utility Authority",
    leadPerson: "Marcus Vance, P.E. (Plant Reliability Lead)",
    location: "Bernalillo County & West Mesa, New Mexico",
    category: "water",
    safetyScore: "100% Mechanical Compliance • $1.2M Saved for Ratepayers",
    telemetryProof: {
      keyMetric: "Deep-Well Cavitation Amplitude",
      achievedValue: "0.4 mm/s RMS (Zero Bubble Collapse)",
      standardIndustryBenchmark: "Destructive Cavitation Level: > 12.0 mm/s",
      verifiedBy: "RideWire Node 3 & Node 14 Hydro-Acoustic Audit"
    },
    humanTriumphStory: "Deep-well pumps at Well Station 12 were chewing through $180,000 impellers every 90 days due to -4.2 bar suction drawdown. The standard city consulting playbook recommended passing an 8% rate hike onto Albuquerque residents. Marcus Vance refused. Working with RideWire's 13=1 frequency analysis, he recalibrated the variable-frequency drives to bypass the 78 Hz destructive acoustic resonant mode. The cavitation stopped completely, saving $1,200,000 in replacement costs and canceling the proposed rate hike.",
    theRightWayDifference: "Marcus treated the public's tax money like his own grandmother's grocery budget. Real engineering that protects working-class family wallets is the highest form of public service.",
    commercialValueCreated: {
      insuranceSavings: "$450,000 Municipal Infrastructure Reserve Protection",
      assetLifeExtended: "Pump Rebuild Cycles Extended from 3 Months to 7 Years",
      annualVerificationRetainer: "$50,000 Annual Municipal Telemetry Seal"
    },
    publicPressReleaseHeadline: "THE ENGINEER WHO CANCELLED THE WATER BILL HIKE: MARCUS VANCE DEPLOYS 13=1 ACOUSTICS TO SAVE $1.2 MILLION",
    syndicationQuote: "People in Albuquerque work too hard for us to charge them more because of sloppy pump tuning. You fix the vibration at the root, and the budget takes care of itself.",
    goldSealCertifiedDate: "2026-09-30"
  }
];
