import React from 'react';
import { Calendar, Zap, Compass, DollarSign, HeartHandshake, CheckCircle } from 'lucide-react';

export const OperationalCalendarView: React.FC = () => {
  const schedule = [
    {
      days: "Mondays & Tuesdays",
      cycleType: "High-Velocity Execution Days",
      colorName: "Terracotta / Copper",
      hex: "#C2593F / #B87333",
      accentBg: "bg-[#c2593f]/20 border-[#c2593f]/50 text-amber-200",
      pillBg: "bg-[#c2593f] text-white",
      directives: "High-velocity outreach to Permian Basin operators, Daily Wire launches, contract signings, and live RW-JIT field repair dispatches.",
      targetActions: [
        "Dispatch Wicket Report & Critical Infrastructure Wires",
        "Deliver $25k-$50k Diagnostic Retainer Contracts to Midstream VPs",
        "Transmit RW-JIT Emergency Depressurization Packets"
      ]
    },
    {
      days: "Wednesdays",
      cycleType: "Strategic Deep R&D Days",
      colorName: "Slate Turquoise / Deep Slate",
      hex: "#366470 / #4A7B7D",
      accentBg: "bg-[#366470]/20 border-[#4a7b7d]/50 text-cyan-200",
      pillBg: "bg-[#366470] text-white",
      directives: "AI node code updates, 13=1 consensus algorithm refinement, 110 ancient alignment telemetry harmonics, and patent drafting.",
      targetActions: [
        "13=1 Mathematical Consensus Core Parameter Calibration",
        "Subsurface Hydro-Acoustic Resonance FFT Analysis",
        "DevilsQC Automated Self-Healing Compliance Sweep"
      ]
    },
    {
      days: "Thursdays",
      cycleType: "Capital & Partnership Days",
      colorName: "Sandstone / Warm Gold",
      hex: "#D2B48C / #DAA520",
      accentBg: "bg-[#d2b48c]/20 border-[#daa520]/50 text-yellow-200",
      pillBg: "bg-amber-600 text-white",
      directives: "Financial reviews, CDFI loan filings (WESST / DreamSpring), banking reviews, and state environmental proposal submissions.",
      targetActions: [
        "Submit $50k WESST Enterprise Center Working Capital Applications",
        "Audit 50% Net Allocation to Albuquerque Family Support Trust",
        "Review 15% Employee Profit-Sharing & 10M Share Cap Table"
      ]
    },
    {
      days: "Fridays",
      cycleType: "Weekly Sales Recap & Capital Clearing",
      colorName: "Terracotta / Copper",
      hex: "#C2593F / #B87333",
      accentBg: "bg-[#c2593f]/20 border-[#c2593f]/50 text-amber-200",
      pillBg: "bg-[#c2593f] text-white",
      directives: "Weekly revenue recap, JIT field dispatch audits, and direct EFT/ACH working capital clearing.",
      targetActions: [
        "Direct ACH / Wire Invoice Reconciliation",
        "JIT Field Foreman Resolution Sign-offs",
        "Weekend Automated Self-Healing Matrix Arming"
      ]
    },
    {
      days: "Saturdays & Sundays",
      cycleType: "Rest & Self-Healing Cycles",
      colorName: "Desert Sage / Slate",
      hex: "#8A9A86 / #708090",
      accentBg: "bg-[#8a9a86]/20 border-[#708090]/50 text-stone-200",
      pillBg: "bg-stone-600 text-white",
      directives: "System backup audits, self-healing DevilsQC automated sweeps, and employee rest cycles.",
      targetActions: [
        "Autonomous Node 6 (DevilsQC) Background Verification",
        "CostShield Zero-License Liability Integrity Check",
        "Family Time & Community Support Allocation"
      ]
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 py-6 space-y-6">
      {/* Calendar Header */}
      <div className="bg-gradient-to-r from-[#17202b] via-[#1c1813] to-[#141b24] border-2 border-amber-600/40 rounded-2xl p-6 shadow-2xl">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-3.5">
            <div className="p-3 rounded-xl bg-amber-500/20 border border-amber-500/40 text-amber-400">
              <Calendar className="w-7 h-7" />
            </div>
            <div>
              <span className="text-[10px] font-mono tracking-widest text-amber-400 uppercase font-bold">
                RIDEWIRE SOP-07 OPERATIONAL PLAYBOOK
              </span>
              <h2 className="text-xl sm:text-2xl font-black text-white font-mono mt-0.5">
                Southwest Color-Coded Operational Calendar
              </h2>
              <p className="text-xs text-neutral-300 font-sans mt-0.5">
                Aligning daily corporate activities with non-random mathematical trend cycles, working capital velocity, and family trust governance.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2 bg-black/50 border border-neutral-700 px-3 py-1.5 rounded-xl font-mono text-xs text-neutral-300">
            <span>Cycle Alignment:</span>
            <strong className="text-emerald-400">13=1 Synchronized</strong>
          </div>
        </div>
      </div>

      {/* Days Schedule Cards */}
      <div className="space-y-3.5">
        {schedule.map((item, index) => (
          <div
            key={index}
            className={`border rounded-xl p-5 transition-all shadow-lg ${item.accentBg}`}
          >
            <div className="flex flex-wrap items-center justify-between gap-3 mb-2.5">
              <div className="flex items-center gap-2.5">
                <span className={`px-2.5 py-0.5 rounded text-xs font-mono font-bold uppercase ${item.pillBg}`}>
                  {item.days}
                </span>
                <h3 className="text-base font-bold text-white font-mono">
                  {item.cycleType}
                </h3>
              </div>
              <span className="text-[11px] font-mono text-neutral-300 bg-black/40 px-2.5 py-1 rounded border border-neutral-700">
                Palette: {item.colorName} ({item.hex})
              </span>
            </div>

            <p className="text-xs sm:text-sm text-neutral-200 font-sans leading-relaxed mb-3">
              {item.directives}
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-2 pt-2 border-t border-white/10">
              {item.targetActions.map((act, i) => (
                <div key={i} className="flex items-center gap-2 text-xs text-neutral-300 bg-black/30 p-2 rounded border border-white/5">
                  <CheckCircle className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                  <span className="leading-tight">{act}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
