import React, { useState } from 'react';
import { X, CheckCircle, Download, Landmark, FileCheck, Send, ShieldCheck, Heart } from 'lucide-react';
import { CdfiApplication } from '../types/ridewire';

interface CdfiModalProps {
  onClose: () => void;
  onGrantApproved: (amount: number) => void;
}

export const CdfiModal: React.FC<CdfiModalProps> = ({ onClose, onGrantApproved }) => {
  const [institution, setInstitution] = useState<'WESST' | 'DreamSpring'>('WESST');
  const [requestedAmount, setRequestedAmount] = useState('50000');
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const numericAmt = parseInt(requestedAmount) || 50000;

  const appData: CdfiApplication = {
    institution: institution === 'WESST' 
      ? "WESST Enterprise Center (Albuquerque, NM CDFI)" 
      : "DreamSpring Community Development Financial Institution",
    requestedAmount: `$${numericAmt.toLocaleString()}`,
    borrowerName: "RideWire LLC & Action Intell",
    location: "North Valley, Albuquerque, Bernalillo County, New Mexico",
    missionStatement: "To democratize natural resource and industrial telemetry intelligence by making public geological, environmental, and mechanical data accessible and unified through AI-orchestrated analysis.",
    communityImpact: "50% of parent company net corporate profits are irrevocably dedicated to the Albuquerque Family Support Trust, providing emergency housing assistance, parent advocacy, and child welfare support right here in Bernalillo County.",
    useOfFunds: [
      `Field Telemetry Sensor Inventory & Hardware Calibration: $${(numericAmt * 0.4).toLocaleString()}`,
      `DevilsQC High-Throughput Computational Node Hardware: $${(numericAmt * 0.3).toLocaleString()}`,
      `Permian Basin JIT Field Technicians & Emergency Engineering: $${(numericAmt * 0.2).toLocaleString()}`,
      `North Valley Albuquerque Trust Administration & Compliance: $${(numericAmt * 0.1).toLocaleString()}`
    ],
    repaymentMechanism: "Repaid through recurring high-margin industrial telemetry licensing ($15,000-$50,000 retainers) and Permian midstream diagnostic contracts.",
    status: "READY FOR FAST-TRACK SUBMISSION"
  };

  const handleSubmit = () => {
    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      setSubmitted(true);
      onGrantApproved(numericAmt);
    }, 900);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/85 backdrop-blur-sm overflow-y-auto">
      <div className="bg-[#0f151e] border-2 border-cyan-600/50 rounded-2xl max-w-2xl w-full max-h-[92vh] flex flex-col shadow-2xl overflow-hidden my-auto">
        {/* Header */}
        <div className="bg-gradient-to-r from-[#17202b] via-[#101c22] to-[#1a1c12] p-4 border-b border-cyan-500/30 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-cyan-500/20 border border-cyan-500/40 text-cyan-400">
              <Landmark className="w-5 h-5" />
            </div>
            <div>
              <span className="text-[10px] font-mono tracking-widest text-cyan-400 uppercase font-bold">
                NEW MEXICO CDFI CAPITAL EXPEDITION
              </span>
              <h2 className="text-base font-bold text-white font-mono">
                WESST & DreamSpring Working Capital Filing
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

        {/* Content */}
        <div className="p-5 overflow-y-auto space-y-4 text-xs font-sans text-neutral-300">
          {/* Institution Selector */}
          <div className="flex gap-2">
            <button
              onClick={() => setInstitution('WESST')}
              className={`flex-1 p-3 rounded-xl border text-left transition-all ${
                institution === 'WESST'
                  ? 'bg-[#182631] border-cyan-400 text-white shadow-md'
                  : 'bg-[#121922] border-neutral-800 text-neutral-400 hover:border-neutral-700'
              }`}
            >
              <div className="font-mono font-bold text-xs text-cyan-300">WESST Enterprise Center</div>
              <div className="text-[11px] text-neutral-400 mt-0.5">Albuquerque, NM Women-Owned Capital & Microloan</div>
            </button>

            <button
              onClick={() => setInstitution('DreamSpring')}
              className={`flex-1 p-3 rounded-xl border text-left transition-all ${
                institution === 'DreamSpring'
                  ? 'bg-[#222319] border-amber-400 text-white shadow-md'
                  : 'bg-[#121922] border-neutral-800 text-neutral-400 hover:border-neutral-700'
              }`}
            >
              <div className="font-mono font-bold text-xs text-amber-300">DreamSpring CDFI</div>
              <div className="text-[11px] text-neutral-400 mt-0.5">Southwest Fast-Track Industrial Working Capital</div>
            </button>
          </div>

          {/* Amount input */}
          <div className="bg-[#121922] p-3 rounded-xl border border-neutral-800 flex items-center justify-between gap-4">
            <div>
              <label className="text-[10px] font-mono text-neutral-400 uppercase block">
                Requested Working Capital Facility
              </label>
              <span className="text-sm font-bold text-white">Non-Dilutive Equipment & Field Payroll</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-neutral-400 font-mono">$</span>
              <input
                type="number"
                value={requestedAmount}
                onChange={(e) => setRequestedAmount(e.target.value)}
                step="5000"
                min="10000"
                max="150000"
                className="bg-black/60 border border-neutral-700 rounded-lg px-3 py-1.5 font-mono text-sm text-white font-bold w-28 text-right focus:border-cyan-400 outline-none"
              />
            </div>
          </div>

          {/* Core Mission & 50% Family Trust Impact */}
          <div className="bg-gradient-to-br from-[#1a120e] to-[#121720] border border-[#c2593f]/40 rounded-xl p-3.5 space-y-2">
            <div className="flex items-center gap-2 text-amber-300 font-mono font-bold text-xs">
              <Heart className="w-4 h-4 text-[#c2593f]" />
              <span>COMMUNITY COVENANT: ALBUQUERQUE FAMILY SUPPORT TRUST</span>
            </div>
            <p className="text-[11px] text-neutral-300 leading-relaxed">
              {appData.communityImpact}
            </p>
          </div>

          {/* Use of Funds */}
          <div>
            <h4 className="text-xs font-mono font-bold text-cyan-400 uppercase tracking-wider mb-2 flex items-center gap-1.5">
              <FileCheck className="w-3.5 h-3.5" />
              <span>Itemized Use of Working Capital</span>
            </h4>
            <div className="space-y-1.5">
              {appData.useOfFunds.map((fund, i) => (
                <div key={i} className="bg-[#141b24] p-2.5 rounded-lg border border-neutral-800 flex items-center justify-between text-xs">
                  <span className="text-neutral-200">{fund.split(':')[0]}</span>
                  <span className="font-mono font-bold text-cyan-300">{fund.split(':')[1]}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Repayment and Zero-Fraud Certification */}
          <div className="bg-[#121820] p-3 rounded-lg border border-neutral-800 text-[11px] text-neutral-400 font-mono space-y-1">
            <div className="flex items-center gap-1 text-emerald-400 font-bold">
              <ShieldCheck className="w-4 h-4" />
              <span>ZERO-FRAUD REPAYMENT ASSURANCE</span>
            </div>
            <p>{appData.repaymentMechanism}</p>
          </div>
        </div>

        {/* Footer */}
        <div className="bg-[#121922] p-4 border-t border-neutral-800 flex items-center justify-between">
          <span className="text-xs font-mono text-neutral-400">
            Founder & CEO: S. Pohl • Albuquerque, NM
          </span>

          {submitted ? (
            <div className="flex items-center gap-2 bg-emerald-950 text-emerald-300 border border-emerald-500/50 px-3 py-1.5 rounded-lg text-xs font-mono font-bold">
              <CheckCircle className="w-4 h-4 text-emerald-400" />
              <span>CAPITAL FACILITY APPROVED (+${numericAmt.toLocaleString()})</span>
            </div>
          ) : (
            <button
              onClick={handleSubmit}
              disabled={submitting}
              className="flex items-center gap-2 px-4 py-2 rounded-lg bg-gradient-to-r from-cyan-600 to-teal-600 hover:from-cyan-500 hover:to-teal-500 text-white text-xs font-mono font-bold shadow-lg shadow-cyan-900/40 transition-all"
            >
              <Send className="w-4 h-4" />
              <span>{submitting ? 'TRANSMITTING FILING...' : `SUBMIT CDFI APPLICATION ($${numericAmt.toLocaleString()})`}</span>
            </button>
          )}
        </div>
      </div>
    </div>
  );
};
