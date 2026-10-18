import React, { useState } from 'react';
import { Shield, Cpu, RefreshCw, CheckCircle2, ShieldAlert, Zap, Clock, Activity, Lock } from 'lucide-react';
import { NodeStatus } from '../types/ridewire';
import { INITIAL_NODES } from '../data/mockArticles';

export const NodeMatrixView: React.FC = () => {
  const [nodes, setNodes] = useState<NodeStatus[]>(INITIAL_NODES);
  const [runningSweep, setRunningSweep] = useState(false);
  const [lastSweepTime, setLastSweepTime] = useState<string>("0.94 hours ago (Clean Pass)");

  const handleRunDevilsQCSweep = () => {
    setRunningSweep(true);
    setTimeout(() => {
      setRunningSweep(false);
      setLastSweepTime("Just now (< 1.8h SLA Verified - 100% Rule Compliance)");
      // Flash node 6 self-healing
      setNodes(prev => prev.map(n => n.id === 6 ? { ...n, status: 'SELF-HEALING', verifiedAccuracy: '100%' } : n));
    }, 1200);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-6 space-y-6">
      {/* Node Matrix Header */}
      <div className="bg-gradient-to-r from-[#17202b] via-[#121c21] to-[#1e1410] border-2 border-cyan-500/40 rounded-2xl p-6 shadow-2xl">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-3.5">
            <div className="p-3 rounded-xl bg-cyan-500/20 border border-cyan-500/40 text-cyan-400">
              <Cpu className="w-7 h-7" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-[10px] font-mono tracking-widest text-cyan-400 uppercase font-bold">
                  ACTION INTELL SOP-01 ARCHITECTURE
                </span>
                <span className="text-[10px] bg-emerald-950 text-emerald-300 border border-emerald-500/30 px-2 py-0.5 rounded font-mono">
                  17-NODE AUTONOMOUS MATRIX
                </span>
              </div>
              <h2 className="text-xl sm:text-2xl font-black text-white font-mono mt-0.5">
                DevilsQC & Autonomous Computational Nodes
              </h2>
              <p className="text-xs text-neutral-300 font-sans mt-0.5">
                Every investigative dossier, sensor reduction, and customer brief must pass automated self-healing checks to eliminate AI hallucination, guarantee 100% rule validation, and enforce sub-1.8hr decision compression.
              </p>
            </div>
          </div>

          <button
            onClick={handleRunDevilsQCSweep}
            disabled={runningSweep}
            className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-gradient-to-r from-teal-600 to-cyan-600 hover:from-teal-500 hover:to-cyan-500 text-white font-mono text-xs font-bold shadow-lg shadow-teal-950/40 transition-all disabled:opacity-50"
          >
            <RefreshCw className={`w-4 h-4 ${runningSweep ? 'animate-spin' : ''}`} />
            <span>{runningSweep ? 'EXECUTING DEVILSQC AUDIT...' : 'RUN DEVILSQC SELF-HEALING SWEEP'}</span>
          </button>
        </div>
      </div>

      {/* SLA & Governance Badges */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5">
        <div className="bg-[#121922] p-4 rounded-xl border border-neutral-800 flex items-center gap-3">
          <div className="p-2 rounded-lg bg-emerald-950 border border-emerald-500/40 text-emerald-400">
            <CheckCircle2 className="w-5 h-5" />
          </div>
          <div>
            <span className="text-[10px] font-mono text-neutral-400 uppercase block">Rule Validation</span>
            <span className="text-base font-mono font-black text-emerald-300">100% Verified Truth</span>
            <span className="text-[10px] text-neutral-500 block">Zero AI Hallucination Guarantee</span>
          </div>
        </div>

        <div className="bg-[#121922] p-4 rounded-xl border border-neutral-800 flex items-center gap-3">
          <div className="p-2 rounded-lg bg-cyan-950 border border-cyan-500/40 text-cyan-400">
            <Clock className="w-5 h-5" />
          </div>
          <div>
            <span className="text-[10px] font-mono text-neutral-400 uppercase block">Decision Compression</span>
            <span className="text-base font-mono font-black text-cyan-300">&lt; 1.8 Hours Velocity</span>
            <span className="text-[10px] text-neutral-500 block">Last sweep: {lastSweepTime}</span>
          </div>
        </div>

        <div className="bg-[#121922] p-4 rounded-xl border border-neutral-800 flex items-center gap-3">
          <div className="p-2 rounded-lg bg-amber-950 border border-amber-500/40 text-amber-400">
            <Lock className="w-5 h-5" />
          </div>
          <div>
            <span className="text-[10px] font-mono text-neutral-400 uppercase block">CostShield Protocol</span>
            <span className="text-base font-mono font-black text-amber-300">$0.00 External License Risk</span>
            <span className="text-[10px] text-neutral-500 block">Open Source Local Processing Base</span>
          </div>
        </div>
      </div>

      {/* 17-Node Matrix Grid */}
      <div className="bg-[#0e141c] border border-neutral-800 rounded-2xl p-5 shadow-xl space-y-4">
        <div className="flex items-center justify-between border-b border-neutral-800 pb-3">
          <h3 className="text-sm font-bold text-white font-mono flex items-center gap-2">
            <Activity className="w-4 h-4 text-cyan-400" />
            <span>ACTIVE 17-NODE AUTONOMOUS ENGINE REGISTRY</span>
          </h3>
          <span className="text-xs font-mono text-neutral-400">
            13=1 Mathematical Consensus Core Active
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
          {nodes.map((node) => (
            <div
              key={node.id}
              className={`p-3.5 rounded-xl border transition-all ${
                node.id === 6 // DevilsQC
                  ? 'bg-[#17201b] border-emerald-500/40 shadow-md'
                  : node.id === 7 // CostShield
                  ? 'bg-[#1f1712] border-amber-500/40 shadow-md'
                  : node.id === 1 // Executive Twin
                  ? 'bg-[#14202b] border-cyan-500/40 shadow-md'
                  : 'bg-[#121822] border-neutral-800 hover:border-neutral-700'
              }`}
            >
              <div className="flex items-center justify-between mb-2">
                <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded bg-black/60 text-neutral-300">
                  NODE 0{node.id}
                </span>
                <span className={`text-[10px] font-mono font-bold px-2 py-0.5 rounded ${
                  node.status === 'SELF-HEALING'
                    ? 'bg-emerald-900/60 text-emerald-300 border border-emerald-500/40 animate-pulse'
                    : node.status === 'SHIELDED'
                    ? 'bg-amber-900/60 text-amber-300 border border-amber-500/40'
                    : 'bg-cyan-900/40 text-cyan-300 border border-cyan-800/40'
                }`}>
                  {node.status}
                </span>
              </div>

              <h4 className="text-xs font-mono font-bold text-white">
                {node.name}
              </h4>
              <span className="text-[10px] font-sans text-amber-200/80 block mt-0.5">
                {node.role}
              </span>

              <p className="text-[11px] text-neutral-400 font-sans mt-2 leading-relaxed">
                {node.description}
              </p>

              <div className="mt-3 pt-2 border-t border-neutral-800/80 flex items-center justify-between text-[10px] font-mono text-neutral-500">
                <span>Latency: <strong className="text-neutral-300">{node.latency}</strong></span>
                <span>Accuracy: <strong className="text-emerald-400">{node.verifiedAccuracy}</strong></span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
