export interface TelemetryForensics {
  primaryMetric: string;
  measuredValue: string;
  safetyThreshold: string;
  acousticFrequency: string;
  decisionCompressionTime: string;
}

export interface TargetEntity {
  entityName: string;
  targetRole: string;
  location: string;
  operationalPain: string;
  rwJitCode: string;
  estimatedDealValue: string;
}

export interface WorkingCapitalAction {
  proposedOffer: string;
  retainerFee: string;
  immediateDeliverable: string;
  pitchSummary: string;
  familyTrustAllocation: string;
  profitSharingAllocation: string;
}

export interface InvestigativeArticle {
  id: string;
  title: string;
  subtitle: string;
  byline: string;
  executiveVoice: string;
  dateline: string;
  category: string;
  severity: 'CRITICAL' | 'HIGH' | 'ELEVATED' | 'STRATEGIC';
  publishedDate: string;
  currentEventBreakdown: string;
  telemetryForensics: TelemetryForensics;
  thirteenLogicSolution: string;
  stepTwoTargetDirectory: TargetEntity[];
  workingCapitalAction: WorkingCapitalAction;
  audioSummaryScript: string;
  comicIllustration?: {
    imageSrc: string;
    caption: string;
    awardCategory: string;
    humanImpactQuote: string;
  };
}

export interface NodeStatus {
  id: number;
  name: string;
  role: string;
  status: 'ACTIVE' | 'PROCESSING' | 'SELF-HEALING' | 'SHIELDED';
  latency: string;
  verifiedAccuracy: string;
  description: string;
}

export interface CapitalLedger {
  pipelineValue: number;
  closedWorkingCapital: number;
  familyTrustAllocated: number; // 50%
  employeeRetirementAllocated: number; // 15%
  operationsCapital: number; // 35%
  activeRetainersCount: number;
  authorizedShares: number; // 10,000,000
}

export interface CommercialProposal {
  clientName: string;
  proposalTitle: string;
  executiveLetter: string;
  scopeOfWork: string[];
  financialTerms: {
    totalRetainer: string;
    paymentMethod: string;
    deliveryTimeline: string;
  };
  legalClause: string;
  signatureBlock: string;
}

export interface CdfiApplication {
  institution: string;
  requestedAmount: string;
  borrowerName: string;
  location: string;
  missionStatement: string;
  communityImpact: string;
  useOfFunds: string[];
  repaymentMechanism: string;
  status: string;
}
