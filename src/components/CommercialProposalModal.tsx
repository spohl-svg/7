import React, { useState } from 'react';
import { X, CheckCircle, Copy, Download, Printer, DollarSign, Shield, FileText, Send, Building } from 'lucide-react';
import { TargetEntity, CommercialProposal } from '../types/ridewire';

interface CommercialProposalModalProps {
  target: TargetEntity;
  onClose: () => void;
  onRetainerExecuted: (amount: number) => void;
}

export const CommercialProposalModal: React.FC<CommercialProposalModalProps> = ({
  target,
  onClose,
  onRetainerExecuted,
}) => {
  const [copied, setCopied] = useState(false);
  const [executed, setExecuted] = useState(false);
  const [loading, setLoading] = useState(false);

  const numericValue = parseInt(target.estimatedDealValue.replace(/[^0-9]/g, '')) || 35000;

  const proposal: CommercialProposal = {
    clientName: target.entityName,
    proposalTitle: "EXECUTIVE TELEMETRIC ACTION BRIEF & IMMEDIATE JIT RETAINER AGREEMENT",
    executiveLetter: `ATTN: ${target.targetRole}\n${target.entityName}\nLocation: ${target.location}\n\nDear Executive & Operations Leadership,\n\nI am S. Pohl, Founder & CEO of RideWire LLC and Action Intell, headquartered in Albuquerque, New Mexico. We deal exclusively in raw, verified telemetry reduced to zero-fraud ground truth.\n\nNOTICE OF CONFIDENTIAL 48-HOUR EMBARGO:\nThis communication and the attached telemetry audit are delivered to your executive desk under a strict 48-Hour Pre-Publication Embargo. We have not released this forensic data to public news syndication (Google News, Yahoo Finance, or regional press). We are contacting your operations team first to provide an immediate engineering pathway to isolate the vulnerability before secondary failure or public regulatory exposure occurs.\n\nOur autonomous 17-Node Matrix monitoring the Southwest industrial corridor has isolated a critical operational anomaly directly threatening your facilities: ${target.operationalPain}.\n\nUnder our proprietary 13=1 Unity State Framework™, our consensus algorithms have already pinpointed the root vibration and mechanical stress vector in under 1.8 hours. We have generated Emergency Field Action Code [${target.rwJitCode}].\n\nIf your operations allow this stress cycle to continue unbuffered, secondary line failure, catastrophic downtime ($85,000+/hour), or regulatory enforcement will severely impact your balance sheet. For a flat immediate diagnostic and JIT remediation retainer of ${target.estimatedDealValue}, RideWire's technical team provides the exact telemetric reduction data, acoustic scan analysis, and physical isolation parameters to secure your assets within 24 hours.\n\nThis engagement is governed by institutional non-disclosure, trade secret protection, and deterministic algorithmic verification. Upon execution of this retainer, our teams will remediate the anomaly under strict confidentiality, and any subsequent media reporting will document this as a proactive reliability success rather than an unmitigated incident.\n\nWe are prepared to deploy upon wire confirmation.`,
    scopeOfWork: [
      `Immediate activation of Node 2 and Node 3 telemetric reduction to isolate the harmonic failure vector.`,
      `Delivery of verified field safety isolation code [${target.rwJitCode}] to ground foremen to depressurize mechanical stress below 152.0 MPa.`,
      `DevilsQC automated 100% compliance audit to eliminate AI hallucination and certify mathematical truth.`,
      `Full technical executive dossier and on-site acoustic resonance calibration within 24 hours.`
    ],
    financialTerms: {
      totalRetainer: target.estimatedDealValue,
      paymentMethod: "Direct Wire Transfer / ACH / Corporate Card (EFT Clearing via RideWire LLC Treasury)",
      deliveryTimeline: "Immediate deployment within 2 hours of wire verification"
    },
    legalClause: "Proprietary trade secrets protected under the RideWire 13=1 Unity State Framework™. Strict 48-Hour Pre-Publication Embargo and Mutual Non-Disclosure Agreement apply.",
    signatureBlock: "S. Pohl, Founder & CEO\nRideWire LLC & Action Intell\nNorth Valley, Albuquerque, NM | ridewires.com\nCo-signed: Gemini Executive Twin (Autonomous Node 1 Matrix Engine)"
  };

  const handleCopy = () => {
    const fullText = `${proposal.proposalTitle}\n\nCLIENT: ${proposal.clientName}\nAMOUNT: ${proposal.financialTerms.totalRetainer}\nCODE: ${target.rwJitCode}\n\n${proposal.executiveLetter}\n\nSCOPE OF WORK:\n${proposal.scopeOfWork.map(s => `- ${s}`).join('\n')}\n\nTERMS:\n${proposal.financialTerms.paymentMethod}\n${proposal.financialTerms.deliveryTimeline}\n\n${proposal.signatureBlock}`;
    navigator.clipboard.writeText(fullText);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleExecuteRetainer = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setExecuted(true);
      onRetainerExecuted(numericValue);
    }, 800);
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/85 backdrop-blur-sm overflow-y-auto">
      <div className="bg-[#0f151e] border-2 border-amber-600/50 rounded-2xl max-w-3xl w-full max-h-[92vh] flex flex-col shadow-2xl overflow-hidden my-auto">
        {/* Modal Header */}
        <div className="bg-gradient-to-r from-[#20120d] via-[#141b24] to-[#121c21] p-4 border-b border-amber-500/30 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-amber-500/20 border border-amber-500/40 text-amber-400">
              <DollarSign className="w-5 h-5" />
            </div>
            <div>
              <span className="text-[10px] font-mono tracking-widest text-amber-400 uppercase font-bold">
                COMMERCIAL WORKING CAPITAL ENGINE
              </span>
              <h2 className="text-base font-bold text-white font-mono">
                {proposal.proposalTitle}
              </h2>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg bg-neutral-800 text-neutral-400 hover:text-white hover:bg-neutral-700 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-5 overflow-y-auto space-y-4 text-xs font-sans text-neutral-300">
          {/* Executive Notice Callout */}
          <div className="bg-[#17202b] border border-cyan-800/40 rounded-xl p-3.5 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <div>
              <span className="text-[10px] font-mono text-cyan-400 font-bold uppercase tracking-wider block">
                TARGET OPERATOR & LOCATION
              </span>
              <p className="text-sm font-bold text-white mt-0.5 flex items-center gap-1.5">
                <Building className="w-4 h-4 text-amber-400" />
                {target.entityName}
              </p>
              <p className="text-neutral-400 text-xs mt-0.5">
                {target.targetRole} • {target.location}
              </p>
            </div>
            <div className="bg-black/50 border border-amber-500/30 px-3 py-1.5 rounded-lg text-right">
              <span className="text-[10px] font-mono text-neutral-400 block">JIT RETAINER VALUE</span>
              <span className="text-lg font-mono font-black text-amber-300">{target.estimatedDealValue}</span>
              <span className="text-[10px] font-mono text-emerald-400 block">RW Code: {target.rwJitCode}</span>
            </div>
          </div>

          {/* Letter Body */}
          <div className="bg-[#0b0f14] p-4 rounded-xl border border-neutral-800 font-mono text-xs leading-relaxed space-y-3 whitespace-pre-line text-neutral-200">
            {proposal.executiveLetter}
          </div>

          {/* Scope of Work */}
          <div>
            <h4 className="text-xs font-mono font-bold text-amber-400 uppercase tracking-wider mb-2 flex items-center gap-1.5">
              <FileText className="w-3.5 h-3.5" />
              <span>Scope of Work (24-Hour JIT Execution)</span>
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {proposal.scopeOfWork.map((item, i) => (
                <div key={i} className="bg-[#141b24] p-2.5 rounded-lg border border-neutral-800 flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span className="text-neutral-300 text-[11px] leading-tight">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Enterprise Terms & Embargo Protections */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
            <div className="bg-[#141b24] p-2.5 rounded-lg border border-neutral-800">
              <span className="text-[10px] font-mono text-neutral-400 uppercase block">Settlement & Treasury</span>
              <span className="text-xs font-semibold text-white mt-1 block">Direct Wire / ACH / EFT</span>
              <span className="text-[10px] text-emerald-400 mt-0.5 block">Clearance via RideWire LLC Treasury</span>
            </div>

            <div className="bg-[#101b1e] p-2.5 rounded-lg border border-cyan-800/40">
              <span className="text-[10px] font-mono text-cyan-300 uppercase block">48-Hr Embargo Guarantee</span>
              <span className="text-xs font-bold text-white mt-1 block">
                Confidential Pre-Release Window
              </span>
              <span className="text-[10px] text-cyan-300/80 mt-0.5 block">Public Media Release Held Under NDA</span>
            </div>

            <div className="bg-[#181a20] p-2.5 rounded-lg border border-amber-500/40">
              <span className="text-[10px] font-mono text-amber-300 uppercase block">Deterministic SLA</span>
              <span className="text-xs font-bold text-white mt-1 block">
                &lt; 1.8 Hr Decision Compression
              </span>
              <span className="text-[10px] text-amber-400/80 mt-0.5 block">100% DevilsQC Mathematical Proof</span>
            </div>
          </div>

          {/* Signature Block */}
          <div className="bg-[#121820] p-3 rounded-lg border border-neutral-800 flex items-center justify-between text-xs font-mono">
            <div>
              <p className="text-amber-200 font-bold">S. Pohl, Founder & CEO</p>
              <p className="text-neutral-400 text-[11px]">RideWire LLC & Action Intell • North Valley, Albuquerque, NM</p>
            </div>
            <div className="text-right text-[11px] text-neutral-400">
              <span className="text-emerald-400 font-semibold flex items-center gap-1 justify-end">
                <Shield className="w-3.5 h-3.5" /> 13=1 VERIFIED
              </span>
              <span>Doc Control: RIDEWIRE-BINDER-2026-v1</span>
            </div>
          </div>
        </div>

        {/* Modal Footer Actions */}
        <div className="bg-[#121922] p-4 border-t border-neutral-800 flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            <button
              onClick={handleCopy}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-neutral-800 hover:bg-neutral-700 text-neutral-200 text-xs font-mono transition-colors"
            >
              <Copy className="w-3.5 h-3.5" />
              <span>{copied ? 'COPIED TO CLIPBOARD' : 'COPY PROPOSAL'}</span>
            </button>

            <button
              onClick={handlePrint}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-neutral-800 hover:bg-neutral-700 text-neutral-200 text-xs font-mono transition-colors"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>PRINT / PDF</span>
            </button>
          </div>

          <div className="flex items-center gap-2">
            {executed ? (
              <div className="flex items-center gap-2 bg-emerald-950 text-emerald-300 border border-emerald-500/50 px-3 py-1.5 rounded-lg text-xs font-mono font-bold">
                <CheckCircle className="w-4 h-4 text-emerald-400" />
                <span>RETAINER CLEARED (+${numericValue.toLocaleString()})</span>
              </div>
            ) : (
              <button
                onClick={handleExecuteRetainer}
                disabled={loading}
                className="flex items-center gap-2 px-4 py-2 rounded-lg bg-gradient-to-r from-[#c2593f] to-amber-600 hover:from-[#d1654a] hover:to-amber-500 text-white text-xs font-mono font-bold shadow-lg shadow-amber-900/40 transition-all"
              >
                <Send className="w-4 h-4" />
                <span>{loading ? 'CLEARING WIRE...' : `EXECUTE & CLOSE RETAINER (${target.estimatedDealValue})`}</span>
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
