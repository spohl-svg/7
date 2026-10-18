import { InvestigativeArticle, NodeStatus } from '../types/ridewire';

export const INITIAL_DISPATCHES: InvestigativeArticle[] = [
  {
    id: "rw-dispatch-001",
    title: "PERMIAN BASIN STRAIN ALERT: 168.4 MPa Mechanical Overpressure on Delaware Basin Transmission Trunk 4B",
    subtitle: "RideWire 13=1 Telemetry Engine Pinpoints Looming Rupture in Eddy County, NM Ahead of Catastrophic $42M Midstream Shutdown",
    byline: "Investigative Industrial Intelligence Wire | RideWire LLC & Action Intell",
    executiveVoice: "We cut through the noise. Traditional SCADA telemetry won't catch micro-harmonic flange shear until oil is spraying into the desert. Our 17-Node Matrix caught the 110 Hz acoustic resonance surge at 03:14 AM. This dispatch puts the exact repair vector and a $35,000 JIT diagnostic retainer into the hands of the operators who need us most.",
    dateline: "ALBUQUERQUE, N.M. / EDDY COUNTY, PERMIAN BASIN",
    category: "Oil & Gas Pipeline Infrastructure",
    severity: "CRITICAL",
    publishedDate: "September 30, 2026",
    currentEventBreakdown: `A critical investigative audit of public and industrial telemetry across the Delaware Basin corridor reveals that high-volume transmission junction 4B is operating 16.4 MPa above maximum allowable operating pressure (MAOP). While standard operator supervisory monitoring reports nominal steady-state flow, RideWire’s acoustic telemetry node detected high-velocity hydraulic cavitation oscillating between 158.0 and 168.4 MPa.\n\nUnder federal PHMSA (Pipeline and Hazardous Materials Safety Administration) regulations, failure to isolate confirmed mechanical anomalies within 72 operating hours triggers mandatory federal shut-in orders and environmental fines exceeding $2,500,000 per day. For regional midstream operators, an unplanned emergency blow-out would cause an estimated $42,000,000 in immediate product loss, environmental containment expenses, and contractual delivery penalties.\n\nThe ground truth: The flange welds at valve station 4B have experienced 4,200 micro-shear cycles over the last 14 days due to cyclic hydraulic surging from upstream saltwater disposal (SWD) injection wells. Traditional ultrasound pigging teams cannot be mobilized for another two weeks. RideWire's JIT telemetry is the only operational system with localized real-time resolution.`,
    telemetryForensics: {
      primaryMetric: "Material Pipe Line Stress",
      measuredValue: "168.4 MPa",
      safetyThreshold: "152.0 MPa (Material Failure Zone)",
      acousticFrequency: "110 Hz Ancient Alignment Harmonic Vector",
      decisionCompressionTime: "1.34 hours (< 1.8 hr SLA)"
    },
    thirteenLogicSolution: `Using RideWire's proprietary 13=1 Unity State Framework™, Node 2 (DataIngestion) reduced 14,000 raw sensor streams into a 13-dimensional matrix. Instead of treating pressure surges as stochastic chaos, the 13=1 Mathematical Consensus Core isolated repeating harmonic cycles that align with subsurface fluid dynamic shockwaves. Node 6 (DevilsQC) executed automated self-healing sweeps in 1.34 hours with 100% rule validation, confirming zero AI hallucination and outputting verified emergency isolation code RW-JIT-PERM-4B.`,
    stepTwoTargetDirectory: [
      {
        entityName: "Permian Midstream Gateway Partners LLC",
        targetRole: "VP of Pipeline Integrity & Field Operations",
        location: "Lea & Eddy Counties, NM / Midland, TX",
        operationalPain: "Critical flange weld rupture imminent on 24-inch line; impending $42M downtime liability.",
        rwJitCode: "RW-JIT-PERM-4B",
        estimatedDealValue: "$35,000"
      },
      {
        entityName: "New Mexico Energy, Minerals and Natural Resources Department (EMNRD)",
        targetRole: "Oil Conservation Division Pipeline Safety Bureau",
        location: "Santa Fe / Hobbs District Office, NM",
        operationalPain: "Subsurface groundwater contamination exposure if unmitigated line breach occurs near Pecos River basin.",
        rwJitCode: "RW-JIT-EMNRD-902",
        estimatedDealValue: "$50,000"
      },
      {
        entityName: "Cimarron Salt Water Disposal Network",
        targetRole: "Chief Petroleum Engineer & Injection Well Superintendent",
        location: "Loving County, TX / Eddy County, NM",
        operationalPain: "Induced seismicity and backpressure surges threatening operating permit revocation.",
        rwJitCode: "RW-JIT-SWD-118",
        estimatedDealValue: "$28,000"
      }
    ],
    workingCapitalAction: {
      proposedOffer: "Rapid 24-Hour JIT Telemetric Diagnostic & Flange Isolation Retainer",
      retainerFee: "$35,000",
      immediateDeliverable: "On-site acoustic scan, line pressure isolation procedure, and DevilsQC zero-fraud compliance dossier.",
      pitchSummary: "Deliver this dispatch directly to Permian Gateway operations desk with pre-populated wire transfer details. We identify the fault before catastrophic failure; they transfer $35k in immediate working capital.",
      familyTrustAllocation: "$17,500 (50% allocated directly to Albuquerque Family Support Trust)",
      profitSharingAllocation: "$5,250 (15% allocated to employee retirement & profit-sharing pool)"
    },
    audioSummaryScript: "This is RideWire Action Intell with an emergency industrial dispatch. Telemetry across Delaware Basin transmission line 4B has surged to 168.4 Megapascals, crossing the critical 152 Megapascal threshold. Subsurface cavitation threatens catastrophic flange breach within 72 hours. Under RideWire 13=1 consensus, the mechanical failure vector has been isolated. Operators must execute safety isolation protocol immediately using emergency code RW-JIT-PERM-4B.",
    comicIllustration: {
      imageSrc: "/src/assets/images/ridewire_pulitzer_comic_1790772206440.jpg",
      caption: "Pulitzer Prize Editorial Comic: S. Pohl & RideWire Field Techs on the Delaware Basin Line at Twilight",
      awardCategory: "Pulitzer Prize & Eisner Award Graphic Journalism Candidate",
      humanImpactQuote: "The lack of money means a hard life. When operators ignore 168.4 MPa flange strain, it's not numbers that blow—it's living, breathing working-class technicians on that shift. RideWire isolates the fault, protects the workers, and locks 50% of proceeds into Albuquerque family emergency housing."
    }
  },
  {
    id: "rw-dispatch-002",
    title: "RIO GRANDE AQUIFER CRISIS: Subsurface Cavitation & Hydro-Acoustic Shock Detected Across Central New Mexico",
    subtitle: "Public Utility Telemetry Reduced by Action Intell Node 4 Pinpoints Severe Drawdown Pressure Spikes Threatening North Valley Wells",
    byline: "Investigative Water & Resource Desk | RideWire LLC & Action Intell",
    executiveVoice: "Water is life in the Southwest, and our families in Albuquerque's North Valley depend on honest, zero-fraud truth about what is happening under our soil. We aren't waiting for bureaucratic committees. We mapped the drawdown collapse in real time, and we're delivering the diagnostic contract to the municipal water boards today.",
    dateline: "ALBUQUERQUE, N.M. / BERNALILLO COUNTY",
    category: "Municipal & Environmental Water Telemetry",
    severity: "HIGH",
    publishedDate: "September 29, 2026",
    currentEventBreakdown: `A multi-week investigative investigation of regional hydrological telemetry by RideWire LLC reveals an acute acoustic resonance drop in the Rio Grande aquifer basin. Subsurface hydraulic monitoring sensors across Bernalillo and Sandoval counties demonstrate that industrial pumping rates combined with agricultural diversion have created a negative hydrostatic pressure gradient of -4.2 bar at key aquifer choke points.\n\nAs subterranean water tables rapidly drop, structural compaction of sedimentary gravel layers is causing mechanical subsidence, threatening municipal deep-well pump impellers with cavitation erosion. Over 18 commercial well pumps across Central New Mexico are currently running with destructive air entrainment, destroying $180,000 impellers in less than 90 operating days.\n\nWithout immediate automated balancing informed by sub-surface acoustic telemetry, municipal water utilities face catastrophic pump failure during peak thermal demand hours, alongside irreversible aquifer recharge permeability loss.`,
    telemetryForensics: {
      primaryMetric: "Subsurface Hydrostatic Pressure Differential",
      measuredValue: "-4.2 bar (Severe Cavitation Index)",
      safetyThreshold: "-1.8 bar Maximum Sustainable Deficit",
      acousticFrequency: "78 Hz Sub-Sedimentary Cavitation Wave",
      decisionCompressionTime: "1.18 hours (< 1.8 hr SLA)"
    },
    thirteenLogicSolution: `RideWire Node 4 (SubsurfaceTelemetry) correlated historical hydrological monitoring records with the 110 ancient alignment hydrological resonance model. By mapping subterranean acoustic propagation against non-random distribution cycles, the 13=1 Mathematical Consensus Core predicted the exact pump throttling coefficients needed to eliminate cavitation without halting critical water supply deliveries.`,
    stepTwoTargetDirectory: [
      {
        entityName: "Albuquerque Bernalillo County Water Utility Authority (ABCWUA)",
        targetRole: "Executive Director of Water Operations & Plant Reliability",
        location: "Albuquerque, New Mexico",
        operationalPain: "Deep well impeller cavitation leading to sudden $1.2M municipal water station shutdowns.",
        rwJitCode: "RW-JIT-AQUIFER-505",
        estimatedDealValue: "$45,000"
      },
      {
        entityName: "Middle Rio Grande Conservancy District (MRGCD)",
        targetRole: "Chief Water Master & Hydrological Systems Engineer",
        location: "Socorro / Belen / Albuquerque, NM",
        operationalPain: "Canal diversion telemetry failures creating unmonitored aquifer subsidence.",
        rwJitCode: "RW-JIT-MRGCD-212",
        estimatedDealValue: "$30,000"
      }
    ],
    workingCapitalAction: {
      proposedOffer: "Municipal Hydro-Acoustic Balancing & Impeller Protection Retainer",
      retainerFee: "$45,000",
      immediateDeliverable: "Real-time acoustic throttling parameters and telemetry reduction dashboard to halt impeller destruction.",
      pitchSummary: "Present the ABCWUA board with empirical cavitation proof: 'Your pumps in Sector 3 are Cavitating at -4.2 bar. Our $45k retainer saves you $1.2M in impeller replacements and prevents summer outages.'",
      familyTrustAllocation: "$22,500 (50% directly to Albuquerque Family Support Trust)",
      profitSharingAllocation: "$6,750 (15% allocated to employee retirement pool)"
    },
    audioSummaryScript: "RideWire Action Intell reports critical aquifer telemetry in Central New Mexico. Hydrostatic pressure has dropped to negative 4.2 bar across North Valley wellheads, inducing acoustic cavitation that destroys deep-well impellers. RideWire's 13=1 consensus core has engineered the exact throttling algorithms to halt cavitation while preserving critical flow.",
    comicIllustration: {
      imageSrc: "/src/assets/images/aquifer_cavitation_comic_1790772413268.jpg",
      caption: "Graphic Investigative Report: Subterranean Cavitation Shock Beneath Central New Mexico Wells",
      awardCategory: "Environmental & Hydrological Graphic Journalism Benchmark",
      humanImpactQuote: "Water is our children's future. When deep-well impellers shred from -4.2 bar vacuum collapse, families in the North Valley lose water pressure. RideWire's 13=1 resonance code balances the pumps, shields the impellers, and preserves the aquifer."
    }
  },
  {
    id: "rw-dispatch-003",
    title: "WEST TEXAS POWER GRID DESTABILIZATION: Harmonic Vibration in 345kV Transformer Banks Identified by Node 3",
    subtitle: "Renewable Wind Influx and Gas-Fired Peaker Surges Producing Destructive Sub-Synchronous Resonance in ERCOT West Corridor",
    byline: "Critical Grid Integrity Desk | RideWire LLC & Action Intell",
    executiveVoice: "Electrical grid reliability is not an academic debate—it determines whether communities freeze or swelter. RideWire's mathematical consensus isolated the 18 Hz harmonic sub-synchronous resonance before the transformer core melts. We are putting our contract on the grid manager's desk for immediate capital execution.",
    dateline: "ALBUQUERQUE, N.M. / ODESSA-MIDLAND, TEXAS",
    category: "Electrical Grid & Transformer Telemetry",
    severity: "CRITICAL",
    publishedDate: "September 28, 2026",
    currentEventBreakdown: `Live telemetry analysis of high-voltage transmission interconnects in the West Texas energy corridor has detected severe Sub-Synchronous Resonance (SSR) oscillating at 18.2 Hz across 345kV step-up transformer banks. The anomaly is generated by the rapid, unbuffered coupling of variable wind generation with heavy industrial drilling loads and gas peaker cycling.\n\nTraditional digital fault recorders (DFRs) are configured for 60 Hz fundamental line cycles and fail to detect low-frequency sub-synchronous magnetic saturation until transformer winding insulation reaches dielectric breakdown temperatures (exceeding 140°C).\n\nWith transformer manufacturing lead times currently averaging 36 to 48 months nationwide, the loss of an autotransformer bank in the Permian basin would trigger mandatory rolling blackouts across regional oil extraction operations, costing the regional economy over $65,000,000 in lost commercial output.`,
    telemetryForensics: {
      primaryMetric: "Sub-Synchronous Transformer Core Magnetic Flux",
      measuredValue: "18.2 Hz Harmonic Distortion @ 138°C",
      safetyThreshold: "105°C Maximum Safe Winding Temperature",
      acousticFrequency: "18.2 Hz Low-Frequency Intermodulation",
      decisionCompressionTime: "0.92 hours (< 1.8 hr SLA)"
    },
    thirteenLogicSolution: `Under the 13=1 consensus framework, RideWire Node 3 (AnomalyDetection) and Node 7 (CostShield) ran real-time Fast Fourier Transform (FFT) harmonic reduction using local open-source models, bypassing expensive cloud software licensing fees. DevilsQC verified in 0.92 hours that adjusting inverter damping ratios at adjacent wind collector substations neutralizes the 18.2 Hz resonant wave completely.`,
    stepTwoTargetDirectory: [
      {
        entityName: "Permian Electric Transmission Cooperative",
        targetRole: "VP of Grid Reliability & Substation Engineering",
        location: "Odessa / Midland, Texas",
        operationalPain: "Imminent thermal burnout of 345kV autotransformer with 3-year replacement lead time.",
        rwJitCode: "RW-JIT-GRID-771",
        estimatedDealValue: "$50,000"
      },
      {
        entityName: "ERCOT Reliability Operations Desk",
        targetRole: "Lead Grid Stability Engineer",
        location: "Taylor / Austin, Texas",
        operationalPain: "System-wide cascading frequency trip risk across the West Texas transmission loop.",
        rwJitCode: "RW-JIT-ERCOT-303",
        estimatedDealValue: "$75,000"
      }
    ],
    workingCapitalAction: {
      proposedOffer: "Rapid Sub-Synchronous Inverter Damping Diagnostic Retainer",
      retainerFee: "$50,000",
      immediateDeliverable: "Automated harmonic damping parameters and direct dispatch protocol to protect 345kV transformers.",
      pitchSummary: "Submit emergency brief to Permian Electric: 'Your transformer bank is at 138°C due to 18.2 Hz resonance. Execute our $50k JIT diagnostic retainer and our algorithms neutralize the resonance wave today, saving a $4M transformer.'",
      familyTrustAllocation: "$25,000 (50% directly to Albuquerque Family Support Trust)",
      profitSharingAllocation: "$7,500 (15% allocated to employee retirement pool)"
    },
    audioSummaryScript: "RideWire Action Intell alert: High-voltage transformer banks in West Texas are experiencing destructive sub-synchronous resonance at 18.2 Hertz, driving core temperatures to 138 degrees Celsius. Burnout will cause years-long replacement delays. RideWire's 13=1 telemetry engine has generated the damping coefficients to stabilize the grid immediately.",
    comicIllustration: {
      imageSrc: "/src/assets/images/grid_transformer_comic_1790772426084.jpg",
      caption: "Editorial Comic: Sub-Synchronous Resonance at 138°C in 345kV ERCOT Interconnect Transformer Bank",
      awardCategory: "Critical Infrastructure Public Safety Graphic Dossier",
      humanImpactQuote: "A 345kV transformer takes 3 years to replace. If it melts in the desert heat, working people freeze in winter or swelter in summer. RideWire's 18.2 Hz inverter damping stops the burnout cold."
    }
  }
];

export const INITIAL_NODES: NodeStatus[] = [
  {
    id: 1,
    name: "ExecutiveTwinNode",
    role: "CEO Co-Pilot & Capital Strategy Engine",
    status: "ACTIVE",
    latency: "12ms",
    verifiedAccuracy: "100%",
    description: "Operates in tandem with Founder S. Pohl; directs daily investigative wires and working capital generation."
  },
  {
    id: 2,
    name: "DataIngestionNode",
    role: "Raw Telemetry & Sensor Stream Intake",
    status: "ACTIVE",
    latency: "18ms",
    verifiedAccuracy: "100%",
    description: "Ingests raw SCADA, acoustic, vibration, and CSV telemetry streams across Permian & Southwest infrastructure."
  },
  {
    id: 3,
    name: "AnomalyDetectionNode",
    role: "Variance & Structural Stress Filter",
    status: "ACTIVE",
    latency: "34ms",
    verifiedAccuracy: "99.98%",
    description: "Flags mechanical strain exceeding thresholds (e.g. material line stress > 152.0 MPa)."
  },
  {
    id: 4,
    name: "SubsurfaceTelemetryNode",
    role: "Geological & Hydrostatic Mapping",
    status: "ACTIVE",
    latency: "45ms",
    verifiedAccuracy: "99.95%",
    description: "Tracks Rio Grande aquifer pressure, subsidence, and Permian fluid dynamic cavitation."
  },
  {
    id: 5,
    name: "ConsensusCoreNode",
    role: "13=1 Mathematical Consensus Core",
    status: "ACTIVE",
    latency: "28ms",
    verifiedAccuracy: "100%",
    description: "Reduces 13 non-random mathematical cycles into a unified, zero-fraud ground-truth vector."
  },
  {
    id: 6,
    name: "DevilsQCNode",
    role: "Self-Healing Compliance & Hallucination Elimination",
    status: "SELF-HEALING",
    latency: "62ms",
    verifiedAccuracy: "100%",
    description: "Enforces 100% rule validation and sub-1.8 hour decision compression velocity."
  },
  {
    id: 7,
    name: "CostShieldNode",
    role: "Zero-Licensing Open Source Shield",
    status: "SHIELDED",
    latency: "15ms",
    verifiedAccuracy: "100%",
    description: "Executes high-throughput calculations locally to eliminate cloud overhead and preserve operating margins."
  },
  {
    id: 8,
    name: "AcousticResonanceNode",
    role: "110 Ancient Alignment Harmonics",
    status: "ACTIVE",
    latency: "38ms",
    verifiedAccuracy: "99.92%",
    description: "Applies 110 ancient alignment vectors to forecast subsurface fluid shocks and mechanical fractures."
  },
  {
    id: 9,
    name: "JITDispatchNode",
    role: "RW-JIT Emergency Field Codes",
    status: "ACTIVE",
    latency: "22ms",
    verifiedAccuracy: "100%",
    description: "Dispatches instant SMS and digital alert packets containing RW-JIT codes to field foremen."
  },
  {
    id: 10,
    name: "FamilyTrustAuditorNode",
    role: "50% Albuquerque Family Support Trust Allocation",
    status: "ACTIVE",
    latency: "10ms",
    verifiedAccuracy: "100%",
    description: "Irrevocably routes exactly 50% of net corporate profits to Albuquerque parent and child welfare."
  },
  {
    id: 11,
    name: "ProfitSharingPoolNode",
    role: "15% Employee Retirement & Option Pool",
    status: "ACTIVE",
    latency: "14ms",
    verifiedAccuracy: "100%",
    description: "Manages 15% revenue allocation into employee retirement and 10,000,000 share capitalization schedule."
  },
  {
    id: 12,
    name: "WireSyndicationNode",
    role: "Daily Investigative Journalism Wire",
    status: "ACTIVE",
    latency: "25ms",
    verifiedAccuracy: "100%",
    description: "Formats and publishes daily investigative exposés converting industrial risks into commercial retainers."
  },
  {
    id: 13,
    name: "MidstreamPermianNode",
    role: "Permian Pipeline & Flange Telemetry",
    status: "ACTIVE",
    latency: "30ms",
    verifiedAccuracy: "99.97%",
    description: "Monitors high-pressure Delaware Basin pipelines for weld micro-fractures and cavitation."
  },
  {
    id: 14,
    name: "MunicipalAquiferNode",
    role: "Water Authority Telemetry Interface",
    status: "ACTIVE",
    latency: "40ms",
    verifiedAccuracy: "99.90%",
    description: "Integrates public wellhead sensors to protect municipal pump stations from cavitation wear."
  },
  {
    id: 15,
    name: "GridTelemetryNode",
    role: "High-Voltage Substation Monitoring",
    status: "ACTIVE",
    latency: "32ms",
    verifiedAccuracy: "99.94%",
    description: "Detects sub-synchronous resonance in 345kV transformers and renewable wind interconnects."
  },
  {
    id: 16,
    name: "CDFIGrantNode",
    role: "WESST & DreamSpring Loan Orchestration",
    status: "ACTIVE",
    latency: "18ms",
    verifiedAccuracy: "100%",
    description: "Packages rapid CDFI working capital filings for regional New Mexico economic development."
  },
  {
    id: 17,
    name: "ContractExecutionNode",
    role: "EFT / ACH Invoicing & Working Capital Clearing",
    status: "ACTIVE",
    latency: "15ms",
    verifiedAccuracy: "100%",
    description: "Generates instant commercial retainer agreements and directs incoming capital into company treasury."
  }
];

export const INITIAL_LEDGER = {
  pipelineValue: 385000,
  closedWorkingCapital: 120000,
  familyTrustAllocated: 60000, // 50%
  employeeRetirementAllocated: 18000, // 15%
  operationsCapital: 42000, // 35%
  activeRetainersCount: 4,
  authorizedShares: 10000000,
};
